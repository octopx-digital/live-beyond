var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

// get all fact elements
router.get('/video', (req, res) => {
  console.log(req.params.id);
  let getVideo = `SELECT * FROM video`;
  connect.query(getVideo, (err, result) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      // console.log(result);
      //return result as json
      res.json({
        video: result
      });
    }
  });
});

module.exports = router;
