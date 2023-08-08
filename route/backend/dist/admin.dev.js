"use strict";

var express = require('express');

var router = express();
router.set('view engine', 'ejs');
router.get('/', function (req, res) {
  res.render('../views/backend/admin-file');
});
module.exports = router;