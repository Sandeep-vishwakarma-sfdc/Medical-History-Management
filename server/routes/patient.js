var express=require('express');
var router=express.Router();
const {getClinicPatients} =require("../controllers/patient");
router.get('/getClinicPatients/:clinicId',getClinicPatients);
module.exports=router;