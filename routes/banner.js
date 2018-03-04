var express = require('express');
var connect = require('../utils/sqlConnect');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

// get all fact elements
router.get('/getAll', (req, res) => {
  console.log(req.params.id);
  let getBanner = `SELECT * FROM banner ORDER BY position`;
  connect.query(getBanner, (err, result) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      console.log(result);
      //return result as json
      res.json({
        banner: result
      });
      // res.render('home', {
      //   banner: result
      // });
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
