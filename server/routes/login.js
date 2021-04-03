var express=require('express');
var router=express.Router();
const {loginGuest,loginPatient,loginClinic}= require("../controllers/login");
router.post('/loginGuest',loginGuest);
router.post('/loginPatient',loginPatient);
router.post('/loginClinic',loginClinic);
module.exports=router;