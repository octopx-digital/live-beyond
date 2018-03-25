var express = require('express');
var router = express.Router();
var config = require('../config');
var bodyParser = require('body-parser');
var connect = require('../utils/sqlConnect');
var bcrypt = require('bcryptjs');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var sess;

var curdate = new Date();
var year = curdate.getFullYear();

router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  res.render('login', {
    adminpage: true,
    title: 'Live Beyond Your Life | Login',
    subTitle: 'Login',
    year: year
  });
});

router.get('/check', (req, res, next) => {
  res.render('login', {
    adminpage: true,
    title: 'Live Beyond Your Life | Login',
    subTitle: 'Login',
    error: true,
    message: "Seems that there's something wrong, try again!",
    year: year,
  });
});

router.post('/check', (req, res, next) => {
  if(req.body.username != null && req.body.password != null){
    let logInfo = req.body.username;
    let password = req.body.password;
    let checkUser = `SELECT * FROM users WHERE username = "${logInfo}"`;
  connect.query(checkUser, (err, result) => {
    if(result){
      if(result.length > 0) {
        let hash = result[0].password;
          bcrypt.compare(password, hash).then((response, err) => {
            // res === true
            if(response) {
              // req.session.valid = true;
              sess = req.session;
              sess.username = req.body.username;
              var hour = 36000;
              sess.cookie.expires = new Date(Date.now() + hour);
              sess.cookie.maxAge = hour;
              sess.cookie.user = req.body.username;
              sess.cookie.key = "user_sid";
              sess.validation = true;
              res.redirect('/admin');
            } else {
              console.log(err);
              res.render('login', {
                adminpage: true,
                title: 'Live Beyond Your Life | Login',
                subTitle: 'Login',
                error: true,
                message: "Oooops, there's something wrong, try again!",
                year: year
              });
            }
        });
      }
      else {
        res.render('login', {
          adminpage: true,
          title: 'Live Beyond Your Life | Login',
          subTitle: 'Login',
          error: true,
          message: "Oooops, there's something wrong, try again!",
          year: year
        });
      }
    }
    else {
      console.log(err);
    }
  });
} else {
  res.render('login', {
    adminpage: true,
    title: 'Live Beyond Your Life | Login',
    subTitle: 'Login',
    error: true,
    message: "Seems that there's something wrong, try again!",
    year: year
  });
}
});

module.exports = router;
