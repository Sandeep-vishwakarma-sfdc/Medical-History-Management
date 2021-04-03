const { getConnetion } = require('../dbutils/dbConnection.js');
const PatientModel = require('../models/PatientModel');
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