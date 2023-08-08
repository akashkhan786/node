"use strict";

var _require = require('mongodb'),
    MongoClient = _require.MongoClient;

var express = require('express');

var url = 'mongodb://0.0.0.0';
var client = new MongoClient(url);
var database = 'E-com';

function dbconnection() {
  var result, d1;
  return regeneratorRuntime.async(function dbconnection$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(client.connect());

        case 2:
          result = _context.sent;
          d1 = result.db(database);
          return _context.abrupt("return", d1.collection('products'));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

module.exports = dbconnection;