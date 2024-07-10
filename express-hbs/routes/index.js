var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express - Bai. 1 Tao Temp HBS' });
});

module.exports = router;
