"use strict";

// const express = require('express');
// require('./eConfig1-0');
// const  product = require('./eproductSch1-3');
// // const { default: mongoose } = require('mongoose');
// const app= express();
// app.use(express.json());
// app.post('/creates', async(req,res)=>{
//     let data =new product(req.body);
//     let result =await data.save();
//     console.log(result);
// })
// app.listen(4000);
var mongoose = require('mongoose');

var express = require('express');

var data = mongoose.connect('mongodb://0.0.0.0/E-com');

var Check = function Check() {
  var products, productmodel, result;
  return regeneratorRuntime.async(function Check$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(data.Schema({
            name: String,
            brand: String,
            price: Number,
            category: String
          }));

        case 2:
          products = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(mongoose.model('products', products));

        case 5:
          productmodel = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(productmodel.insertOne({
            name: 'iphone 13',
            brand: 'iphone ',
            price: '4000',
            category: 'mobile'
          }));

        case 8:
          result = _context.sent;
          console.log(result);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

Check();