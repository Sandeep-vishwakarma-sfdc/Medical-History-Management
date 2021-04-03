const fast2sms = require('fast-two-sms');
const { getConnetion } = require('../dbutils/dbConnection.js');
const PatientModel = require('../models/PatientModel');
const ClinicModel = require('../models/ClinicModel');
exports.loginGuest=async (req,res)=>{
    adhaarNo=req.body.adhaarNumber;
    PatientModel.findOne({adhaarNo:adhaarNo},(err,result)=>{
        if(err) throw err
        if(result){
            console.log(result.contact.patientMobile);
            let num="1234567890";
            let OTP="";
            for(let i=0;i<4;i++)
            {
                OTP+=num[Math.floor(Math.random()*10)];
            }
            const phone=result.contact.patientMobile;
            var options = { authorization: process.env.API_KEY, message: OTP, numbers: [phone] };
            //const response= fast2sms.sendMessage(options);
            let obj={
                result:result,
                otp:OTP
            }
            res.send(obj);
        }
        else{
            res.send("Error");
        }
    });
};
    exports.loginClinic=(req,res)=>{
        email=req.body.email;
        password=req.body.password;
        ClinicModel.findOne({email:email,passwd:password},(err,result)=>{
            if(err)
                res.send(err);
            if(result)
               res.send(result);
            else
                res.send("Error");
           });
        console.log("End");
    };
    exports.loginPatient=(req,res)=>{
        email=req.body.email;
        password=req.body.password;
        PatientModel.findOne({email:email,passwd:password},(err,result)=>{
            if(err)
                res.send(err);
            if(result)
               res.send(result);
           });
    };





