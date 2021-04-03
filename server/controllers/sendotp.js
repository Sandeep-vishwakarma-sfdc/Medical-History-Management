const fast2sms = require('fast-two-sms');
const express = require('express');
var app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();
exports.otpverify=(req,res)=>{
let num="1234567890";
let OTP="";
for(let i=0;i<4;i++)
{
    OTP+=num[Math.floor(Math.random()*10)];
}
const phone=req.body.phone;
console.log('Phone'+phone);
var options = {authorization : process.env.API_KEY , message : OTP ,  numbers :[phone]} ;
/*const response= fast2sms.sendMessage(options);*/
res.send(OTP);
console.log(options);
};
