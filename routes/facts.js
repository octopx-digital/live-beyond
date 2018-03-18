var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

// get all fact elements
router.get('/getAll', (req, res) => {
  let getFacts = `SELECT * FROM facts ORDER BY position`;
  connect.query(getFacts, (err, result) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      res.json({
        facts: result
      });
    }
  });
});

router.post('/add', (req, res) => {
  let insert = `INSERT INTO facts (name, description, position) VALUE ("${req.body.name}", "${req.body.description}", ${req.body.position});`;
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
  let update = `UPDATE facts SET name = "${req.body.name}", description = "${req.body.description}", position = ${req.body.position} WHERE id = ${req.params.id};`;
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
  let remove = `DELETE FROM facts WHERE id = "${req.params.id}"`;
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
