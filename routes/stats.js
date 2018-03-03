var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

// get all fact elements
router.get('/stats/getAll', (req, res) => {
  console.log(req.params.id);
  let getStats = `SELECT * FROM stats ORDER BY position`;
  connect.query(getStats, (err, result) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      console.log(result);
      //return result as json
      res.json({
        stats: result
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
