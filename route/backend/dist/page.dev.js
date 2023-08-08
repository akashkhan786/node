"use strict";

var express = require('express');

var router = express();
router.set('view engine', 'ejs');

var path = require('path');

var multer = require('multer');

var bodyParser = require('body-parser');

var pageModel = require('../../model/pageModel'); // let flash = require('flash')
//         page uploading  


var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    return cb(null, 'public/backend/images/');
  },
  filename: function filename(req, file, cb) {
    // callback func
    // cb(null,Dattenow(+file+orignalname));       date kai sath 
    cb(null, file.originalname);
  }
}); //            page uploading

var upload = multer({
  storage: storage //value  Storage var
  // fileFilter:(req,file,cb)=>{
  //     if(file.mimetype=='PNG' || file.mimetype=='png' || file.mimetype=='jpeg'|| file.mimetype=='jpg'){
  //         cb(null,true)
  //     }
  //         else{
  //             cb(null,false)
  //             return cb('only jpg and png allow')
  //         }
  //     }  

}); //

router.get('/', function (req, res) {
  pageModel.find({}).then(function (x) {
    res.render('../views/backend/page-file', {
      x: x
    });
    console.log(x);
  })["catch"](function (y) {
    console.log(y);
  });
});
router.get('/addpage/', function (req, res) {
  res.render('../views/backend/add-page-file');
});
router.post('/addpage/', upload.single('Page_Photo'), function (req, res) {
  pageModel.findOne({
    pageUrl: req.body.Page_Url
  }).then(function (err) {
    if (err) {
      console.log('dupliacate URl plz Another URL');
    } else {
      if (req.filename) {
        pageModel.create({
          pageUrl: req.body.Page_Url,
          pageMetacDEescription: req.body.Page_Meta_Description,
          pageMetakeyword: req.body.Page_Meta_Keyword,
          pageHeading: req.body.Page_Heading,
          pageDetail: req.body.Page_Details,
          photo: req.file.filename
        }).then(function (x) {
          res.redirect('/admin/page/');
        });
      } else {
        pageModel.create({
          pageUrl: req.body.Page_Url,
          pageMetacDEescription: req.body.Page_Meta_Description,
          pageMetakeyword: req.body.Page_Meta_Keyword,
          pageHeading: req.body.Page_Heading,
          pageDetail: req.body.Page_Details
        }).then(function (x) {
          res.redirect('/admin/page/');
        });
      }
    }
  });
});
router.get('/edit-page/:id', function (req, res) {
  pageModel.findOne({
    pageUrl: req.params.id
  }).then(function (x) {
    res.render("../views/backend/edit-page-file", {
      x: x
    });
  })["catch"](function (err) {
    console.log(err);
  });
});
router.put('/edit-page/:id', upload.single('Page_Photo'), function (req, res) {
  if (req.file) {
    pageModel.updateOne({
      pageUrl: req.params.id
    }, {
      $set: {
        pageUrl: req.body.Page_Url,
        pageMetacDEescription: req.body.Page_Meta_Description,
        pageMetakeyword: req.body.Page_Meta_Keyword,
        pageHeading: req.body.Page_Heading,
        pageDetail: req.body.Page_Details,
        photo: req.file.filename
      }
    }).then(function (x) {
      res.redirect('/admin/page/');
    });
  } else {
    pageModel.updateOne({
      pageUrl: req.params.id
    }, {
      $set: {
        pageUrl: req.body.Page_Url,
        pageMetacDEescription: req.body.Page_Meta_Description,
        pageMetakeyword: req.body.Page_Meta_Keyword,
        pageHeading: req.body.Page_Heading,
        pageDetail: req.body.Page_Details
      }
    }).then(function (x) {
      res.redirect('/admin/page/');
    });
  }
});
router["delete"]('/Delete-page/:id', function (req, res) {
  pageModel.deleteOne({
    pageUrl: req.params.id
  }).then(function (x) {
    console.log | 'Successfuly Delteted';
    res.redirect('/admin/page/');
  });
});
module.exports = router;