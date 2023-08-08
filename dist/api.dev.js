"use strict";

var express = require('express');

var dbconnection = require('./mongodb');

var App = express();
App.use(express.json()); // const  main = async ()=>{
//     let data=await dbconnection(); 
//     let result= await data.find({}).toArray();
//    return result;
// }
// //           read data through get mehtod  (get api)
// App.get('/',async(req,res)=>{
//     // console.log(main());
//     res.send(await main());
// })
// //       access data through postman and insert in mongodb  (post api)
// App.post('/',async (req,res)=>{ 
// // console.log(req.body)
// let data=await dbconnection();
// let result=await data.insertOne(req.body)
// res.send(result)
// })
//                      put method
// App.use(express.json());
// App.put('/:name',async(req,res)=>{
//   let data=await dbconnection();
//   let result= await data.updateOne({name:req.params.name},{$set:req.body})
//   console.log(result);
//   res.send({status:"updated"})
// })
// App.listen(4000);