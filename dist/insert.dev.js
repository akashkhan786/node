"use strict";

var dbconnection = require('./mongodb');

var insert = function insert() {
  var db, result;
  return regeneratorRuntime.async(function insert$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(dbconnection());

        case 2:
          db = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(db.insertMany([{
            name: 'Syed',
            model: 'akash',
            price: 'null',
            brand: 'Syed'
          }, {
            name: 'Syed1',
            model: 'akash',
            price: 'null'
          }, {
            name: 'Syed2',
            model: 'akash',
            price: 'null'
          }]));

        case 5:
          result = _context.sent;

          if (result.acknowledged) {
            console.log('Data completely true');
          }

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

insert();