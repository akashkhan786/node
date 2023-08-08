"use strict";

//               CRUD THROUGH API (MONGOOSE)
var express = require('express');

require("./Config");

var product = require('./Schema');

var _require = require('mongoose'),
    Query = _require.Query;

var mongodb = require('mongodb');

var app = express(); //         EXAMPLE POST OR SAVE API METHOD

app.post('/', function _callee(req, res) {
  var data, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = product(req.body); // console.log(req.body);

          _context.next = 3;
          return regeneratorRuntime.awrap(data.save());

        case 3:
          result = _context.sent;
          console.log(data);
          res.send(data);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}); //         EXAMPLE GET OR FIND API METHOD

app.get('/list', function _callee2(req, res) {
  var data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(product.find());

        case 2:
          data = _context2.sent;
          res.send(data);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.use(express.json()); //         EXAMPLE DELETE API METHOD

app["delete"]('/delete/:_id', function _callee3(req, res) {
  var data;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log(req.params);
          _context3.next = 3;
          return regeneratorRuntime.awrap(product.deleteOne(req.params));

        case 3:
          data = _context3.sent;

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}); //         EXAMPLE PUT OR UPDATE API METHOD

app.put('/delete/:_id', function _callee4(req, res) {
  var data;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log(req.params);
          _context4.next = 3;
          return regeneratorRuntime.awrap(product.updateOne(req.params, {
            $set: req.body
          }));

        case 3:
          data = _context4.sent;
          res.send(data);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
});
app.listen(4000);