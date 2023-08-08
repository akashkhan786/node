//                  MONGOOSE CRUD OPERATION

const mongoose= require('mongoose');

  mongoose.connect('mongodb://0.0.0.0/E-com');
  const productSchema=  mongoose.Schema({
    name:String,brand:String,price:Number,category:String
})

const Saveindb= async()=>{
    const productmodel = mongoose.model("products",productSchema);
let data =new productmodel({
    name:"iphone 12",brand:"iphone",price:499,category:"mobile"
});
}
// Saveindb();
const Findindb =async()=>{
    const productmodel =mongoose.model('products',productSchema)
    let data =await productmodel.findOne({name:"iphone 12"});
    console.log(data);
}
// Findindb();
const UpdateinDB=async ()=>{
const productmodel = mongoose.model('products',productSchema);
let data = await productmodel.updateOne({name:"iphone 12"},
{
    $set:{name:"iphone 14"}

})
console.log(data)
}
// UpdateinDB();
const DelteInDB= async()=>{
const product= mongoose.model('products',productSchema);
let data =await product.deleteOne({name:"iphone 14"});
console.log(data);
}
DelteInDB();
