var express = require('express');
var router = express.Router();
var config = require('../config');
var bodyParser = require('body-parser');

var curdate = new Date();
var year = curdate.getFullYear();

/* GET home page. */
router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Live Beyond Your Life',
    year: year,
    mainpage: true
  });
});

module.exports = router;
