var express=require('express');
var router=express.Router();
const {otpverify}= require("../controllers/sendotp");
router.post("/otpverify",otpverify);
module.exports=router;
