var express = require('express');
var router = express.Router();
var config = require('../config');
var bodyParser = require('body-parser');
var connect = require('../utils/sqlConnect');
var bcrypt = require('bcryptjs');

var curdate = new Date();
var year = curdate.getFullYear();

/* GET home page. */
router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());
router.get('/', function(req, res, next) {
  res.render('admin', {
    adminpage: true,
    title: 'Live Beyond Your Life | Admin ',
    year: year
  });
});

router.get('/banner', (req, res) => {
  let getBanner = `SELECT * FROM banner`;
  connect.query(getBanner, (err, result, fields) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      // console.log(result);
      // console.log(fields);
      res.json({
        data: result,
        fields: fields
      });
    }
  });
});

router.get('/banner/:id', (req, res) => {
  let getBanner = `SELECT * FROM banner WHERE id = ${req.params.id}`;
  connect.query(getBanner, (err, result, fields) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      // console.log(result);
      // console.log(fields);
      res.json({
        data: result,
        fields: fields
      });
    }
  });
});

router.get('/addbanner', (req, res) => {
  res.render('form', {
    adminpage: true,
    title: 'Live Beyond Your Life | Admin',
    section: 'banner',
    operation: 'add',
    year: year,
    add: true,
    formaction: '/banner/add',
    formmethod: 'post'
  });
});

router.get('/editbanner/:id', (req, res) => {
  res.render('form', {
    adminpage: true,
    title: 'Live Beyond Your Life | Admin',
    section: 'banner',
    operation: 'edit',
    year: year,
    edit: true,
    formaction: `/banner/edit/${req.params.id}`,
    formmethod: 'post',
    id: req.params.id
  });
});

router.get('/events', (req, res) => {
  let getEvents = `SELECT * FROM events`;
  connect.query(getEvents, (err, result, fields) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      // console.log(result);
      // console.log(fields);
      res.json({
        data: result,
        fields: fields
      });
    }
  });
});

router.get('/events/:id', (req, res) => {
  let getEvents = `SELECT * FROM events WHERE id = ${req.params.id}`;
  connect.query(getEvents, (err, result, fields) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      // console.log(result);
      // console.log(fields);
      res.json({
        data: result,
        fields: fields
      });
    }
  });
});

router.get('/addevents', (req, res) => {
  res.render('form', {
    adminpage: true,
    title: 'Live Beyond Your Life | Admin',
    section: 'events',
    operation: 'add',
    year: year,
    add: true,
    formaction: '/events/add',
    formmethod: 'post'
  });
});

router.get('/editevents/:id', (req, res) => {
  res.render('form', {
    adminpage: true,
    title: 'Live Beyond Your Life | Admin',
    section: 'events',
    operation: 'edit',
    year: year,
    edit: true,
    formaction: `/events/edit/${req.params.id}`,
    formmethod: 'post',
    id: req.params.id
  });
});

router.get('/facts', (req, res) => {
  let getFacts = `SELECT * FROM facts`;
  connect.query(getFacts, (err, result, fields) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      // console.log(result);
      // console.log(fields);
      res.json({
        data: result,
        fields: fields
      });
    }
  });
});

router.get('/facts/:id', (req, res) => {
  let getFacts = `SELECT * FROM facts WHERE id = ${req.params.id}`;
  connect.query(getFacts, (err, result, fields) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      // console.log(result);
      // console.log(fields);
      res.json({
        data: result,
        fields: fields
      });
    }
  });
});

router.get('/addfacts', (req, res) => {
  res.render('form', {
    adminpage: true,
    title: 'Live Beyond Your Life | Admin',
    section: 'facts',
    operation: 'add',
    year: year,
    add: true,
    formaction: '/facts/add',
    formmethod: 'post'
  });
});

router.get('/editfacts/:id', (req, res) => {
  res.render('form', {
    adminpage: true,
    title: 'Live Beyond Your Life | Admin',
    section: 'facts',
    operation: 'edit',
    year: year,
    edit: true,
    formaction: `/facts/edit/${req.params.id}`,
    formmethod: 'post',
    id: req.params.id
  });
});

router.get('/myths', (req, res) => {
  let getMyths = `SELECT * FROM myths`;
  connect.query(getMyths, (err, result, fields) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      // console.log(result);
      // console.log(fields);
      res.json({
        data: result,
        fields: fields
      });
    }
  });
});

router.get('/myths/:id', (req, res) => {
  let getMyths = `SELECT * FROM myths WHERE id = ${req.params.id}`;
  connect.query(getMyths, (err, result, fields) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      // console.log(result);
      // console.log(fields);
      res.json({
        data: result,
        fields: fields
      });
    }
  });
});

router.get('/addmyths', (req, res) => {
  res.render('form', {
    adminpage: true,
    title: 'Live Beyond Your Life | Admin',
    section: 'myths',
    operation: 'add',
    year: year,
    add: true,
    formaction: '/myths/add',
    formmethod: 'post'
  });
});

router.get('/editmyths/:id', (req, res) => {
  res.render('form', {
    adminpage: true,
    title: 'Live Beyond Your Life | Admin',
    section: 'myths',
    operation: 'edit',
    year: year,
    edit: true,
    formaction: `/myths/edit/${req.params.id}`,
    formmethod: 'post',
    id: req.params.id
  });
});

router.get('/stats', (req, res) => {
  let getStats = `SELECT * FROM stats`;
  connect.query(getStats, (err, result, fields) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      // console.log(result);
      // console.log(fields);
      res.json({
        data: result,
        fields: fields
      });
    }
  });
});

router.get('/stats/:id', (req, res) => {
  let getStats = `SELECT * FROM stats WHERE id = ${req.params.id}`;
  connect.query(getStats, (err, result, fields) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      // console.log(result);
      // console.log(fields);
      res.json({
        data: result,
        fields: fields
      });
    }
  });
});

router.get('/addstats', (req, res) => {
  res.render('form', {
    adminpage: true,
    title: 'Live Beyond Your Life | Admin',
    section: 'stats',
    operation: 'add',
    year: year,
    add: true,
    formaction: '/stats/add',
    formmethod: 'post'
  });
});

router.get('/editstats/:id', (req, res) => {
  res.render('form', {
    adminpage: true,
    title: 'Live Beyond Your Life | Admin',
    section: 'stats',
    operation: 'edit',
    year: year,
    edit: true,
    formaction: `/stats/edit/${req.params.id}`,
    formmethod: 'post',
    id: req.params.id
  });
});

router.get('/video', (req, res) => {
  let getVideo = `SELECT * FROM video`;
  connect.query(getVideo, (err, result, fields) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      // console.log(result);
      // console.log(fields);
      res.json({
        data: result,
        fields: fields
      });
    }
  });
});

router.get('/video/:id', (req, res) => {
  let getVideo = `SELECT * FROM video WHERE id = ${req.params.id}`;
  connect.query(getVideo, (err, result, fields) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      // console.log(result);
      // console.log(fields);
      res.json({
        data: result,
        fields: fields
      });
    }
  });
});

router.get('/addvideo', (req, res) => {
  res.render('form', {
    adminpage: true,
    title: 'Live Beyond Your Life | Admin',
    section: 'video',
    operation: 'add',
    year: year,
    add: true,
    formaction: '/video/add',
    formmethod: 'post'
  });
});

router.get('/editvideo/:id', (req, res) => {
  res.render('form', {
    adminpage: true,
    title: 'Live Beyond Your Life | Admin',
    section: 'video',
    operation: 'edit',
    year: year,
    edit: true,
    formaction: `/video/edit/${req.params.id}`,
    formmethod: 'post',
    id: req.params.id
  });
});

router.get('/users', function(req, res, next) {
  connect.query('SELECT id, fname, username, email FROM users WHERE active = 1', (err, result) => {
    if(err) {
      throw err; console.log(err);
    } else {
      console.log(result);
      res.render('users', {
        adminpage: true,
        title: 'Live Beyond Your Life | Users',
        subTitle: "Users",
        year: year,
        userData : result
      });
    }
  });
});

router.get('/users/register', (req, res, next) => {
  res.render('users', {
    adminpage: true,
    title: 'Live Beyond Your Life | Users',
    register : true,
    subTitle: "Create New User",
    year: year
  });
});

router.post('/users/register', (req, res, next) => {
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

router.get('/users/edit/:id', function(req, res, next) {
  let getSingle = `SELECT id, fname, username, email FROM users WHERE id=${req.params.id}`;
  connect.query( getSingle, (err, result) => {
    if(err) {
      throw err; console.log(err);
    } else {
      console.log(result);
      res.render('users', {
        adminpage: true,
        title: 'Live Beyond Your Life | Users',
        singleUSer : result[0],
        subTitle: "Edit User",
        year: year
      });
    }
  });
});

module.exports = router;
