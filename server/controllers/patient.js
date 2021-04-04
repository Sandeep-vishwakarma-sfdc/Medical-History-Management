const { getConnetion } = require('../dbutils/dbConnection.js');
const PatientModel = require('../models/PatientModel');
const CPModel = require('../models/ClinicPatientMappingModel');
exports.getClinicPatients=(req,res)=>{
    clinicId=req.params.clinicId;
    CPModel.find({clinicId:clinicId},(err,patientids)=>{
        if(err)
            console.log(err);
        if(patientids){
            let arr = [];
            console.log(patientids);
            patientids.forEach(ele=>{
               arr.push(ele.PatientId);
             });
    
     PatientModel.find({_id:{$in:arr}},(err,patients)=>{
         if(err)
        {
            res.send(err);
        }
        if (patients) {
            res.send(patients);
        }
    });

        };
    });
};
        
    
    