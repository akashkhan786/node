const mongoose =require('mongoose');
require('./Config');

const product= mongoose.Schema({
    name:String,
    model:String,
    price:String,
    category:String
})

module.exports =  mongoose.model('products',product);