var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

// get all myth elements
router.get('/getAll', (req, res) => {
  let getMyths = `SELECT * FROM myths ORDER BY position`;
  connect.query(getMyths, (err, result) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      res.json({
        myths: result
      });
    }
  });
});

router.post('/add', (req, res) => {
  let insert = `INSERT INTO myths (title, text, position) VALUE ("${req.body.title}", "${req.body.text}", ${req.body.position});`;
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
  let update = `UPDATE myths SET title = "${req.body.title}", text = "${req.body.text}", position = ${req.body.position} WHERE id = ${req.params.id};`;
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
  let remove = `DELETE FROM myths WHERE id = "${req.params.id}"`;
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
