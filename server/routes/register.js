var express=require('express');
var router=express.Router();
const {registerGuest,registerClinic,registerPatient}= require("../controllers/register");
/*router.post("/registerClinic",registerClinic);
router.post("/registerPatient",registerPatient);*/
router.post("/registerGuest",registerGuest);
module.exports=router;