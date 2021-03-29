const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClinicSchema = Schema({
    name:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    tel:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    clinicCode:{
        type:String,
        required:true,
        unique:true
    },
    passwd:{
        type:String,
        required:true
    }

});

const ClinicModel = mongoose.model('Client',ClinicSchema);
module.exports = ClinicModel;