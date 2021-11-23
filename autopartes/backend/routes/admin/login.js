var express = require('express');
var router = express.Router();
var UsuariosModel = require('./../../models/usuariosModel');

/* GET login.home page */
router.get('/', function (req, res, next) {
  res.render('admin/login', {
    title: 'Ingreso',
    layout: 'admin/layout'
  });

});

/* GET logout. */
router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('admin/login', {
    title: 'Ingreso',
    layout: 'admin/layout'
  });
});

/* POST . */
router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    // verifique q trae los datos
    // console.log(req.body);

    var data = await UsuariosModel.getUserByUsernameAndPassword(usuario, password);

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        error: true,
        title: 'Reingreso',
        layout: 'admin/layout'
      })
    }

  } catch (error) {
    console.log(error);
  }

});

module.exports = router;
