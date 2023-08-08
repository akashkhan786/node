const mongoose = require('mongoose')
 mongoose.connect('mongodb://0.0.0.0/E-com');

let pageSchema = mongoose.Schema({
      photo:String,
      pageUrl :String,
      pageNevtext:String,
      pageMetacDEescription:String,
      pageMetakeyword:String,
      pageHeading:String,
      pageDetail:String,

})

let pageModel= mongoose.model('pageTable',pageSchema);

module.exports = pageModel;