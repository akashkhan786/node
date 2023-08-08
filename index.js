/////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
let app = express();
let bodyParser= require('body-parser') //1-?
let methodOverride = require('method-override')
 const port = 4000;

app.get('/',(req,res)=>{
res.send("Frontend page");
})
 
app.set("view engine ","ejs")
app.use(bodyParser.urlencoded({extended:true})) // 1-?
app.use(express.static(__dirname+'/public'))
app.use(methodOverride('_method'))
let adminroute = require('./route/backend/admin')
let pageroute = require('./route/backend/page') 

app.use('/admin',adminroute);
app.use('/admin/page',pageroute)
app.listen(port,()=>{
    console.log(`SERVER CREATED & RUNNING ON ${port} `);
})


