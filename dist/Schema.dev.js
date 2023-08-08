"use strict";

var mongoose = require('mongoose');

require('./Config');

var product = mongoose.Schema({
  name: String,
  model: String,
  price: String,
  category: String
});
module.exports = mongoose.model('products', product);