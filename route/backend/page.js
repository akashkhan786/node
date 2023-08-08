const express = require('express');
let router = express();
router.set('view engine', 'ejs')
const path =require('path');
let multer = require('multer');
let bodyParser = require('body-parser');
let pageModel = require('../../model/pageModel')
// let flash = require('flash')


//         page uploading  
let storage = multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,'public/backend/images/');
    },
    filename:(req,file,cb)=>{  // callback func
        // cb(null,Dattenow(+file+orignalname));       date kai sath 
        cb(null,file.originalname)
    }
})
//            page uploading
let upload= multer({   
    storage:storage,    //value  Storage var
    // fileFilter:(req,file,cb)=>{
    //     if(file.mimetype=='PNG' || file.mimetype=='png' || file.mimetype=='jpeg'|| file.mimetype=='jpg'){
    //         cb(null,true)
    //     }
    //         else{
    //             cb(null,false)
    //             return cb('only jpg and png allow')
    //         }
    //     }  
})
//

router.get('/', (req, res) => {
    pageModel.find({}).then((x)=>{
    res.render('../views/backend/page-file',{x} )
    console.log(x)
    }).catch((y)=>{
        console.log(y);
    })
})
router.get('/addpage/',(req,res)=>{
    res.render('../views/backend/add-page-file')
})
router.post('/addpage/', upload.single('Page_Photo'), (req, res) => {
    pageModel.findOne({pageUrl: req.body.Page_Url}).then((a)=>{
        if(err){
            console.log('dupliacate URl plz Another URL')
        }
        else{
            if(req.filename){
                pageModel.create({
                        pageUrl: req.body.Page_Url,
                        pageMetacDEescription: req.body.Page_Meta_Description,
                        pageMetakeyword: req.body.Page_Meta_Keyword,
                        pageHeading: req.body.Page_Heading,
                        pageDetail: req.body.Page_Details,
                        photo:req.file.filename
                    })
                    .then((x) => {
                        res.redirect('/admin/page/');
                    })
            
                }
                else{
                    pageModel.create({
                        pageUrl: req.body.Page_Url,
                        pageMetacDEescription: req.body.Page_Meta_Description,
                        pageMetakeyword: req.body.Page_Meta_Keyword,
                        pageHeading: req.body.Page_Heading,
                        pageDetail: req.body.Page_Details
                    })
                    .then((x) => {
                        res.redirect('/admin/page/');
                    })
                }
            
        }
    })
   
})

router.get('/edit-page/:id', (req, res) => {
    pageModel.findOne({pageUrl:req.params.id}).then((x)=>{
    res.render("../views/backend/edit-page-file",{x});
    }).catch((err)=>{
      console.log(err)  
    })
})
router.put('/edit-page/:id',upload.single('Page_Photo'),(req,res)=>{
    if(req.file){
    pageModel.updateOne({pageUrl:req.params.id},
        {$set:{
                pageUrl:req.body.Page_Url,
                pageMetacDEescription:req.body.Page_Meta_Description,
                pageMetakeyword:req.body.Page_Meta_Keyword,
                pageHeading:req.body.Page_Heading,
                pageDetail:req.body.Page_Details,
                photo:req.file.filename
            }
        }
        ).then((x)=>{
            res.redirect('/admin/page/')
        }
        )
    }
    else {          
        pageModel.updateOne({pageUrl:req.params.id},
            {$set:{
                    pageUrl:req.body.Page_Url,
                    pageMetacDEescription:req.body.Page_Meta_Description,
                    pageMetakeyword:req.body.Page_Meta_Keyword,
                    pageHeading:req.body.Page_Heading,
                    pageDetail:req.body.Page_Details
                    }}).then((x)=>{
                res.redirect('/admin/page/')
            })
    }
})
router.delete('/Delete-page/:id',(req,res)=>{
    pageModel.deleteOne({pageUrl:req.params.id}).then((x)=>{
        console.log|('Successfuly Delteted')
        res.redirect('/admin/page/')
    })
})
module.exports = router;