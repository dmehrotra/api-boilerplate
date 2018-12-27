var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/location', db.getLocation);


module.exports = router;
