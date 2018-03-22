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

router.post('/register', (req, res) => {
  var newPass = req.body.pass;
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newPass , salt, function(err, hash) {
      var newHash = hash;
      let newUser = `INSERT INTO users (fname, username, password, email) VALUE ("${req.body.fname}", "${req.body.username}", "${newHash}" , "${req.body.email}");`;
      connect.query(newUser, (err, data) => {
        if(err) {
          throw err;
        }
        else {
          //if success, redirect to admin page
          // return res.redirect('/admin');
          return data;
        }
      });
    });
  });
});

module.exports = router;
