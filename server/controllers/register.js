const { response } = require('express');
const { getConnetion } = require('../dbutils/dbConnection.js');
let PatientModel = require('../models/PatientModel');
const CPModel = require('../models/ClinicPatientMappingModel');

exports.registerGuest= async (req,res)=>{
let midreq=req.body;
    guest =new PatientModel(
        {
            adhaarNo:midreq.adhaarNumber,
            fname:midreq.fname,
            lname:midreq.lname,
            contact:{patientMobile:midreq.mobile},
            email:midreq.email,
            usertype:midreq.usertype,
            age:midreq.age
        }
    );
    console.log(req.body);
    guest.save();
    await res.send(guest);

};
exports.registerPatient=(req,res)=>{
   let midreq1=req.body;
   Patient =new PatientModel(
       {
        adhaarNo:midreq1.adhaarNumber,
        fname:midreq1.fname,
        lname:midreq1.lname,
        contact:{patientMobile:midreq1.mobile},
        email:midreq1.email,
        usertype:midreq1.usertype,
        age:midreq1.age,
        passwd:midreq1.password
       }
   );
   
   if(Patient.save()){
        console.log(Patient);
        ClientPatient=new CPModel(
            {
                clinicId:req.body.clinicId,
                PatientId:Patient._id
            }
        );
        if(ClientPatient.save())
       {
           res.send(ClientPatient);
       }
         
        } else
        res.send("Error");
};
