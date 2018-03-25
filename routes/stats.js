var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

// get all statistic elements
router.get('/getAll', (req, res) => {
  let getStats = `SELECT * FROM stats ORDER BY position`;
  connect.query(getStats, (err, result) => {
    if (err) {
      throw err;
      console.log(err);
    } else {
      res.json({
        stats: result
      });
    }
  });
});

router.post('/add', (req, res) => {
  let insert = `INSERT INTO stats (organ_title, description, icon, success, queue, position) VALUE ("${req.body.organ_title}", "${req.body.description}", "${req.body.icon}", "${req.body.success}", "${req.body.queue}", ${req.body.position});`;
  connect.query(insert, (err, data) => {
    if (err) {
      throw err;
    } else {
      //if success, redirect to admin page
      return res.redirect('/admin');
    }
  });
});

router.post('/edit/:id', (req, res) => {
  let update = `UPDATE stats SET organ_title = "${req.body.organ_title}", description = "${req.body.description}", icon = "${req.body.icon}", success = "${req.body.success}", queue = "${req.body.queue}", position = ${req.body.position} WHERE id = ${req.params.id};`;
  connect.query(update, (err, data) => {
    if (err) {
      throw err;
    } else {
      //if success, redirect to admin page
      return res.redirect('/admin');
    }
  });
});

router.delete('/delete/:id', (req, res) => {
  let remove = `DELETE FROM stats WHERE id = "${req.params.id}"`;
  connect.query(remove, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      res.json(result);
    }
  });
});

module.exports = router;