var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

// get all video elements
router.get('/get', (req, res) => {
  let getVideo = `SELECT * FROM video`;
  connect.query(getVideo, (err, result) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      res.json({
        video: result
      });
    }
  });
});

router.post('/add', (req, res) => {
  let insert = `INSERT INTO video (video, placeholder) VALUE ("${req.body.video}", "${req.body.placeholder}";`;
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
  let update = `UPDATE video SET video = "${req.body.video}", placeholder = "${req.body.placeholder}" WHERE id = ${req.params.id};`;
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
  let remove = `DELETE FROM video WHERE id = "${req.params.id}"`;
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
