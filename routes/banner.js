var express = require('express');
var connect = require('../utils/sqlConnect');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

// get all fact elements
router.get('/getAll', (req, res) => {
  let getBanner = `SELECT * FROM banner ORDER BY position`;
  connect.query(getBanner, (err, result) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      res.json({
        banner: result
      });
    }
  });
});

router.post('/add', (req, res) => {
  let insert = `INSERT INTO banner (name, description, photo, alt, position) VALUE ("${req.body.name}", "${req.body.description}", "${req.body.photo}", "${req.body.alt}", ${req.body.position});`;
  connect.query(insert, (err, data) => {
    if(err) {
      throw err;
    }
    else {
      //if success, redirect to admin page
      return res.redirect('/admin');
    }
  });
});

router.post('/edit/:id', (req, res) => {
  let update = `UPDATE banner SET name = "${req.body.name}", description = "${req.body.description}", photo = "${req.body.photo}", alt = "${req.body.alt}", position = ${req.body.position} WHERE id = ${req.params.id};`;
  connect.query(update, (err, data) => {
    if(err) {
      throw err;
    }
    else {
      //if success, redirect to admin page
      return res.redirect('/admin');
    }
  });
});

router.delete('/delete/:id', (req, res) => {
  let remove = `DELETE FROM banner WHERE id = "${req.params.id}"`;
  connect.query(remove, (err, result) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      res.json(result);
    }
  });
});

module.exports = router;
