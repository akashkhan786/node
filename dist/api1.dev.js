"use strict";

var express = require('express');

var dbconnection = require('./mongodb');

var mongodb = require('mongodb');

var app = express();
app.use(express.json()); // app.put('/:name',async(req,res)=>{
//   let data=await dbconnection();
//   let result= await data.updateOne({name:req.params.name},{$set:req.body})
//   console.log(result);
//   res.send({status:"updated"})
// })
// app.delete('/:id',async(req,res)=>{
//     let data =await dbconnection();
//     let result  =await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
//     res.send(result);
//     console.log(req.params.id);
//     })
// app.listen(4000);