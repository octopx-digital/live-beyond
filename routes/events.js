var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

// get all fact elements
router.get('/getAll', (req, res) => {
  console.log(req.params.id);
  let getEvents = `SELECT * FROM events ORDER BY position`;
  connect.query(getEvents, (err, result) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      // console.log(result);
      //return result as json
      res.json({
        events: result
      });
    }
  });
});

router.post('/add', (req, res) => {
  let insert = `INSERT INTO events (name, title, date, time, address, partner, logo, link, position) VALUE ("${req.body.name}", "${req.body.title}", "${req.body.date}", "${req.body.time}", "${req.body.address}", "${req.body.partner}", "${req.body.logo}", "${req.body.link}", ${req.body.position});`;
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
  let update = `UPDATE events SET name = "${req.body.name}", title = "${req.body.title}", date = "${req.body.date}", time = "${req.body.time}", address = "${req.body.address}", partner = "${req.body.partner}", logo = "${req.body.logo}", link = "${req.body.link}", position = ${req.body.position} WHERE id = ${req.params.id};`;
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
  let remove = `DELETE FROM events WHERE id = "${req.params.id}"`;
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
