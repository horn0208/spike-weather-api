const express = require('express');
const router = express.Router();

router.get('/forecast', (req, res)=>{
    console.log('in /forecast GET');
    res.send('data!');
});


module.exports=router;