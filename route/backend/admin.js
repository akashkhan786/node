
const express = require('express');

let router = express();
router.set('view engine','ejs')
router.get('/',(req,res)=>{
    res.render('../views/backend/admin-file');
})

module.exports = router;
