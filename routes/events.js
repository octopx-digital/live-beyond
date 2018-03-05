var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

// get all fact elements
router.get('/events/getAll', (req, res) => {
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

// router.delete('api/:id', (req, res) => {
//   console.log('hit to delete route');
//
//   connect.query(`DELETE FROM mainmodel WHERE model = "${req.params.id}"`, (err, result) => {
//     if(err) {
//       throw err;
//       console.log(err);
//     }
//     else {
//       console.log(result);
//       //return result as json
//       res.json(result);
//     }
//   });
// })

module.exports = router;
