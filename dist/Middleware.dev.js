"use strict";

module.exports = reqFilter = function reqFilter(req, res, next) {
  if (!req.query.age) {
    res.send('Please provide Age ');
  } else if (req.query.age < 18) {
    res.send('Your age is Not valid');
  } else {
    next();
  }
};