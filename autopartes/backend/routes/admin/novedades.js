var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

//manipulacion de imagenes agregado 4 reglones
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


/* GET novedades. */
router.get('/', async function (req, res, next) {

    //precarga de datos para mostrar al abrir la pagina
    var novedades = await novedadesModel.getNovedades();
    //con imagenes a
    novedades = novedades.map(novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.image(novedad.img_id, {
                width: 150,
                height: 100,
                crop: 'fill'
            });
            return {
                ...novedad,
                imagen
            }
        } else {
            return {
                ...novedad,
                imagen: ''
            }
        }
    })


    res.render('admin/novedades', {
        title: 'Novedades',
        layout: 'admin/layout',
        usuario: req.session.nombre,
        //mando los datos 
        novedades
    });
});

/* GET ir al form agregar. */
router.get('/agregar', async function (req, res, next) {

    res.render('admin/agregar', {
        title: 'Agregar Oferta',
        layout: 'admin/layout',

    });
});


/* POST  agregar. */
router.post('/agregar', async (req, res, next) => {
    try {
        //agregar imagenes a
        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }
        //fin imagenes a

        if (req.body.id_producto != "" && req.body.precio_oferta != "") {
            //await novedadesModel.insertNovedades(req.body);
            //cambio para insertar imagenes a
            await novedadesModel.insertNovedades({
                ...req.body,
                img_id
            });

            res.redirect('/admin/novedades')
        } else {
            res, render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargo la oferta'
        })
    }

});


/* GET para eliminar. */
router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;

    let ofertadel = await novedadesModel.getNovedadById(id);
    if (ofertadel.img_id){
        await(destroy(ofertadel.img_id));
    }

    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades');

});


/* GET para modificar >me traiga 1 sola oferta . */
router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    var oferta = await novedadesModel.getNovedadById(id);

    res.render('admin/modificar', {
        layout: 'admin/layout',
        oferta
    })

});


/* POST  modificar la oferta por el id. */
router.post('/modificar', async (req, res, next) => {
    try {
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;

        if (req.body.img_delete === "1") {
            img_id = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }
        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }

        var obj = {
            id_producto: req.body.id_producto,
            precio_oferta: req.body.precio_oferta,
            cant_min: req.body.cant_min,
            observaciones: req.body.observaciones,
            vigencia: req.body.vigencia,
            img_id
        }
        console.log(obj);

        await novedadesModel.modificarNovedadById(obj, req.body.id_oferta);
        res.redirect('/admin/novedades');

    }
    catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modificó la oferta'
        })
    }

});


module.exports = router;