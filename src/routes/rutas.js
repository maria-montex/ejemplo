const {Router} = require('express');
const router = Router();

//const express = require(express);
//const router =  express.Router();
//EQUIVALE A LO DE ARRIBA

router.get('/', (req,res) =>{
    res.send({"name":"John Doe"});
});
router.get('/home', (req,res) =>{
    res.send('si funciona, estas en el home');
});

module.exports = router;
