var express = require('express');
var router = express.Router();
var config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Live Beyond Your Life'
  });
});

module.exports = router;
