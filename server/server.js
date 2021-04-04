const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 9000;
const otpRoutes=require('../server/routes/otp');
const registerRoutes=require('../server/routes/register');
const loginRoutes=require('../server/routes/login');
const patientRoutes=require('../server/routes/patient');
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use('/',otpRoutes);
app.use('/',registerRoutes);
app.use('/',loginRoutes);
app.use('/',patientRoutes);
app.listen(PORT,()=>console.log(`server is running at ${PORT}`));


