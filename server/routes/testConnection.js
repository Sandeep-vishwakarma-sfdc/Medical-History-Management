const express = require('express');
const app = express();
const { getConnetion } = require('../dbutils/dbConnection.js');
const PatientModel = require('../models/PatientModel');
const PatientDocumentModel = require('../models/PatientDocuments');
const ClinicModel = require('../models/ClinicModel');
const CPModel = require('../models/ClinicPatientMappingModel');
const cors = require('cors');
console.log('Connection '+getConnetion());
app.use(express.json());
app.use(cors());

app.get('/insertPatient',async (req,res)=>{

    let clinic = new ClinicModel({
        name:'clinic',
        Address:'xyz park',
        tel:'9594216059',
        email:'clinic@test.com',
        mobile:'9594206059',
        clinicCode:'1000',
        passwd:'xyz'
    })
    await clinic.save();

    let patient = new PatientModel({
        adhaarNo:'980243698467',
        fname:'Sandeep',
        lname:'Vishwakarma',
        name:'Sandeep Vishwakarma',// name =  fname + lname
        email:'xyz@test.com',
        contact:{patientMobile:'9594216059'},
        gender:'Male',
        usertype:'patient',
        passwd:'xyz'
    });
    await patient.save();
    res.send(patient);

    let patientDocument = new PatientDocumentModel({
        PatientId:patient._id,
        name:'Blood Group',
        description:'B+'
    });
    await patientDocument.save();

    let ClinicPatientMapping = new CPModel({
        clinicId:clinic._id,
        PatientId:patient._id
    });
    await ClinicPatientMapping.save();
 });

 app.post('/cliniclogin', (req,res)=>{
     console.log('email '+req.body.email);
    ClinicModel.find({email:req.body.email,passwd:req.body.passwd},async (err,result)=>{
        console.log(err);
        console.log(result);
        if(result)
            console.log('LogIN sucess '+result[0].email);
        else
            console.log('Login Failed');
        await res.send(result);
    });
 });
 app.listen(5000);

