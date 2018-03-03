var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

// get all fact elements
router.get('/myths/getAll', (req, res) => {
  console.log(req.params.id);
  let getMyths = `SELECT * FROM myths ORDER BY position`;
  connect.query(getMyths, (err, result) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      console.log(result);
      //return result as json
      res.json({
        myths: result
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
