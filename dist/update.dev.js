"use strict";

var dbconnection = require('./mongodb');

var update = function update() {
  var db, result;
  return regeneratorRuntime.async(function update$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(dbconnection());

        case 2:
          db = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(db.updateMany({
            name: "syed"
          }, {
            $set: {
              name: "Akash"
            }
          }));

        case 5:
          result = _context.sent;
          console.warn(result);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

update();