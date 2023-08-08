//               CRUD THROUGH API (MONGOOSE)

const express = require('express')
require("./Config");
const product= require('./Schema');
const { Query } = require('mongoose');
const mongodb=require('mongodb');
const app=express();

//         EXAMPLE POST OR SAVE API METHOD

app.post('/',async(req,res)=>{
    const data = product(req.body)
    // console.log(req.body);
    const result =await data.save();
    console.log(data);
    res.send(data);
})
//         EXAMPLE GET OR FIND API METHOD
app.get('/list',async(req,res)=>{
    let data = await product.find();
    res.send(data);
})
app.use(express.json());
//         EXAMPLE DELETE API METHOD

app.delete('/delete/:_id',async(req,res)=>{
    console.log(req.params);
    let data =await product.deleteOne(req.params)
    // res.send(data);
})
//         EXAMPLE PUT OR UPDATE API METHOD

app.put('/delete/:_id',async(req,res)=>{
    console.log(req.params);
    let data =await product.updateOne(req.params,{
        $set:req.body
    })
    res.send(data);
})
app.listen(4000);
