var express = require('express');
var router = express.Router();
var config = require('../config');
var bodyParser = require('body-parser');

/* GET home page. */
router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Live Beyond Your Life'
  });
});

module.exports = router;
