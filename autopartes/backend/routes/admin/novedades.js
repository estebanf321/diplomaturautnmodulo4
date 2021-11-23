var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');


/* GET novedades. */
router.get('/', async function (req, res, next) {

    //precarga de datos para mostrar al abrir la pagina
    var novedades = await novedadesModel.getNovedades();


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
        if (req.body.id_producto != "" && req.body.precio_oferta != "") {
            await novedadesModel.insertNovedades(req.body);
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
        var obj = {
            id_producto: req.body.id_producto,
            precio_oferta: req.body.precio_oferta,
            cant_min: req.body.cant_min,
            observaciones: req.body.observaciones,
            vigencia: req.body.vigencia
        }
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