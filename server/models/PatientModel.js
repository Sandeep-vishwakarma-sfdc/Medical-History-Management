const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PatientSchema = new Schema({
    adhaarNo:{
        type:String, //adhaar number
        required:true,
        // unique:true //uncomment this after testing
    },
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    contact:{
        patientMobile:{
            type:String,
            required:true
        },
        familyMemberMobile:{
            type:String,
            required:false
        }
    },
    email:{
        type:String,
        required:true,
        // unique:true //uncomment this after testing
    },
    name:{
        type:String,
        required:true
    },
    motherName:{
        type:String,
        required:false,
    },
    fatherName:{
        type:String,
        required:false,
    },
    dateOFBirth:{
        type:String,
        required:false,
    },
    height:{
        type:Number,// in centi-meter
        required:false,
    },
    weight:{
        type:Number, // in kg
        required:false,
    },
    gender:{
        type:String,
        required:true,
    },
    BMI:{
        type:String,
        required:false,
    },
    createdDate:{
        type:Date,
        required:false,
        default:Date.now
    },
    passwd:{
        type:String
    },
    usertype:{
        type:String, // guest,patient
        required:true
    },
    alise:{
        type:String,
        unique:true
    }
});
const PatientModel = mongoose.model('Patient',PatientSchema);
module.exports = PatientModel;