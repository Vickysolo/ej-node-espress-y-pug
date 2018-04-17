var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ejercicio Node, Express y Pug' });
});

router.get('/quienes-somos', function(req, res, next) {
  res.render('quienes-somos', { title: 'Quiénes somos - Ejercicio Node, Express y Pug' });
});

router.get('/donde-estamos', function(req, res, next) {
  res.render('donde-estamos', { title: 'Dónde estamos - Ejercicio Node, Express y Pug' });
});

router.get('/que-hacemos', function(req, res, next) {
  res.render('que-hacemos', { title: 'Qué hacemos - Ejercicio Node, Express y Pug' });
});

router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Contacto - Ejercicio Node, Express y Pug' });
});

module.exports = router;
