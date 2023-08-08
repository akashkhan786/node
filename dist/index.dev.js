"use strict";

/////////////////////////////////////////////////////////////////////////////////////
var express = require('express');

var app = express();

var bodyParser = require('body-parser'); //1-?


var methodOverride = require('method-override');

var port = 4000;
app.get('/', function (req, res) {
  res.send("Frontend page");
});
app.set("view engine ", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
})); // 1-?

app.use(express["static"](__dirname + '/public'));
app.use(methodOverride('_method'));

var adminroute = require('./route/backend/admin');

var pageroute = require('./route/backend/page');

app.use('/admin', adminroute);
app.use('/admin/page', pageroute);
app.listen(port, function () {
  console.log("SERVER CREATED & RUNNING ON ".concat(port, " "));
});