"use strict";

var dbconnection = require('./mongodb');

var DeleteDATA = function DeleteDATA() {
  var data, result;
  return regeneratorRuntime.async(function DeleteDATA$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(dbconnection());

        case 2:
          data = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(data.deleteMany({
            name: "Syed"
          }));

        case 5:
          result = _context.sent;
          console.warn(result);

          if (result.acknowledged) {
            console.log('Record Delted');
          }

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

DeleteDATA();