var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var sean = "sean"
    var dcClass = ["Sean", "Drew"];
  res.render('index', {
      classArray: dcClass,
      title: ""});

});

module.exports = router;
