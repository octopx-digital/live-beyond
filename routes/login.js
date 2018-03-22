var express = require('express');
var router = express.Router();
var config = require('../config');
var bodyParser = require('body-parser');
var connect = require('../utils/sqlConnect');
var bcrypt = require('bcryptjs');

var curdate = new Date();
var year = curdate.getFullYear();

router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  res.render('login', {
    adminpage: true,
    title: 'Live Beyond Your Life | Login',
    year: year
  });
});



module.exports = router;
