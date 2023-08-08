"use strict";

var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String
});
var product = mongoose.model('products', productSchema);
module.exports = product;