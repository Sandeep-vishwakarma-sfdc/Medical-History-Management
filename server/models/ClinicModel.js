const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClinicSchema = Schema({
    name:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:false
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
        required:false,
        unique:false
    },
    passwd:{
        type:String,
        required:true
    }

});

const ClinicModel = mongoose.model('Client',ClinicSchema);
module.exports = ClinicModel;