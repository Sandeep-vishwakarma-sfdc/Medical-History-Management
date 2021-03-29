const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 9000;
const otpRoutes=require('../server/routes/otp');
//app.use("/",otpRoutes);
app.use('/',otpRoutes);
app.use(express.json());
app.listen(PORT,()=>console.log(`server is running at ${PORT}`));


