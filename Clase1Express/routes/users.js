var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  res.send('Hola' +nombre+ 'como estas');
});

router.post('/id', function(req, res, next) {
  console.log(req.body );
  var nombre= req.body.nombre;
  var n1 = parseInt(req.body.n1, 10); 
  var n2 = parseInt(req.body.n2, 10); 
  var suma = n1 + n2;
  res.send('Hola ' +suma+ ' como estas');
});

router.post('/name', function(req, res, next) {
  console.log(req.body );
    var nombre= req.body.nombre;
    const vocales = 'aeiouAEIOU';
    let numVocales = 0;
    let numConsonantes = 0;

    for (let char of nombre) {
      if (vocales.includes(char)) {
        numVocales++;
      } else if (/[a-zA-Z]/.test(char)) {
        numConsonantes++;
      }
    }

  res.send( 'El número de vocales del nombre ' +nombre+ ' es ' +numVocales+ ' con ' +numConsonantes+ 'consonantes');
  });

module.exports = router;
