import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import OtpInput from 'react-otp-input';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
require('dotenv').config();

function Login() {
    let history = useHistory();
    const [showModel, setshowModel] = useState(true);
    const [isAdhaar, setIsAdhaar] = useState(true);
    const [radioSelected, setRadioSelected] = useState('Patient');
    const RELATIVE_PATH = process.env.REACT_APP_RELATIVE_URL;
    const [userDetails,setUserDetails] = useState({'isPatient':true,'adhaarNumber':'','email':'','password':'','usertype':'Patient','alise':''});

    const [isGuest,setIsguest] = useState(false);
    const [isotp,setIsOtp] = useState(false);
    const [otp,setOtp] = useState(0);
    const [serverOtp,setServerOtp] = useState(0);
    const [validPatient,setvalidPatient] = useState({email:true,password:true});
    const [validClinic,setvalidClinic] = useState({email:true,password:true}); 
    const [validAdhaar,setvalidAdhaar] = useState(true); 
    // console.log('login')
    let handleChange = e =>{
        // console.log('event on field',e.target.name)
        let name = e.target.name
        setUserDetails(prevState=>({
            ...prevState,
            [name]:e.target.value
        }));
    }
    let handleChangeRadio = e => {
        let isPatient = e.target.value ==='Clinic'?false:true;
        console.log('isPatient ',isPatient);
        setRadioSelected(e.target.value);
        isPatient===true?setIsAdhaar(true):setIsAdhaar(false);
        setUserDetails({'isPatient':isPatient,'adhaarNumber':'','email':'','password':'','usertype':e.target.value});
        if(e.target.value=='Guest'){
            setIsguest(true);
        }else{
            setIsguest(false);
        }
    }
    let handleLogin = e => {
        console.log('UserDetails ',userDetails,`${process.env.REACT_APP_RELATIVE_URL}`);
        if(isGuest){
            if(validateAdhaar(userDetails.adhaarNumber)){
                setIsOtp(true);
                let url = `${RELATIVE_PATH}/loginGuest`;
                let obj = {adhaarNumber:userDetails.adhaarNumber};
                Axios.post(url,obj).then(res=>{
                    if(res.data){
                        setServerOtp(res.data.otp);
                        setUserDetails(res.data.result);
                        console.log('Res ',userDetails,'OTP ',res.data.otp);
                    }
                })
            }
        }
        let condition = userDetails.usertype=="Clinic"? validateClinic():validatePatient();
        let url = userDetails.usertype=="Clinic"?`${RELATIVE_PATH}/loginClinic`:`${RELATIVE_PATH}/loginPatient`;
        if(condition){
            console.log('valid input');
            let obj = {email:userDetails.email,password:userDetails.password};
            Axios.post(url,obj).then(res=>{
                console.log('Login Response ',res.data);
                sessionStorage.setItem("loggedInUser",JSON.stringify(res.data));
                if(radioSelected=='Clinic'){
                    history.push('/dashboard');
                }else{
                    history.push(`/persondetail/${res.data._id}`);
                }
            }).catch(err=>console.log('login '+err));
            console.log("End");
        }else{
            console.log("Invalid input");
        }
}

let handleGuestLogin = e =>{
    if(serverOtp==otp){
        console.log("Res ",userDetails);
        sessionStorage.setItem("loggedInUser",JSON.stringify(userDetails));
        history.push(`/persondetail/${userDetails._id}`)
    }else{
        console.log('Invalid OTP');
    }
}

let handleChangeOtp = otp =>{
        console.log('OTP ',otp);
        setOtp(otp);
    }

    function validatePatient(){
        console.log('isvalid ',(userDetails.email=='') || (userDetails.password==''));
         if((userDetails.email=='') || (userDetails.password=='')){
            let tempemail =  !userDetails.email=='';
            let temppass =  !userDetails.password=='';
            console.log(`tempemail ${tempemail} temppass ${temppass}`);
            setvalidPatient({email:tempemail,password:temppass});
            return false;
         }else{
             if(validateEmail(userDetails.email)){
                 setvalidPatient({email:true,password:true});
                 return true;
                }else{
                setvalidPatient({email:false,password:true});
                return false;
             }
         }
    }

    function validateClinic(){
        if((userDetails.email=='') || (userDetails.password=='')){
            let tempemail =  !userDetails.email=='';
            let temppass =  !userDetails.password=='';
            console.log(`tempemail ${tempemail} temppass ${temppass}`);
            setvalidClinic({email:tempemail,password:temppass});
            return false;
         }else{
             if(validateEmail(userDetails.email)){
                 setvalidClinic({email:true,password:true});
                 return true;
                }else{
                setvalidClinic({email:false,password:true});
                return false;
             }
         }
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validateAdhaar(adhaar){
        if(adhaar){
        if(adhaar.toString().length==12){
            let result =  !Number.isNaN(Number(adhaar));
            setvalidAdhaar(result);
            return result;
        }
        setvalidAdhaar(false);
        return false;
        }else{
            setvalidAdhaar(false);
            return false;
        }
    }
    
    return !isotp?(
        <div>
            <Modal show={showModel} onHide={() => {
                setshowModel(false)
                window.location.replace('/');
                }}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form hidden={isGuest}>
                        <div className="form-group" hidden={isAdhaar}>
                            <label>Email</label><span className="required-input">*</span>
                            <input type="email" className="form-control" placeholder="Enter email" name="email" value={userDetails.email} onChange={handleChange}/>
                            <span className="required-input" hidden={validClinic.email}>Invalid input</span>
                        </div>
                        <div className="form-group" hidden={!isAdhaar}>
                            <label>Email</label><span className="required-input">*</span>
                            <input type="email" className="form-control" placeholder="Enter email" name="email" value={userDetails.email} onChange={handleChange}/>
                            <span className="required-input" hidden={validPatient.email}>Invalid input</span>
                        </div>
                        <div className="form-group" hidden={!isAdhaar}>
                            <label>Password</label><span className="required-input">*</span>
                            <input type="password" className="form-control" placeholder="Enter password" name="password" value={userDetails.password} onChange={handleChange} />
                            <span className="required-input" hidden={validPatient.password}>Complete this field</span>
                        </div>
                        <div className="form-group" hidden={isAdhaar}>
                            <label>Password</label><span className="required-input">*</span>
                            <input type="password" className="form-control" placeholder="Enter password" name="password" value={userDetails.password} onChange={handleChange} />
                            <span className="required-input" hidden={validClinic.password}>Complete this field</span>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                        
                        <p className="forgot-password text-right">
                            Forgot <a href="forget#">password?</a>
                        </p>
                    </form>
                    <form hidden={!isGuest}>
                        <div className="form-group">
                                <label>Adhaar Number</label><span className="required-input">*</span>
                                <input type="text" className="form-control" placeholder="Enter Adhaar Number" name="adhaarNumber" value={userDetails.adhaarNumber} onChange={handleChange}/>
                                <span className="required-input" hidden={validAdhaar} >Invalid input</span>
                        </div>
                    </form>
                    <div>
                        <div className="form-check form-check-inline">
                            <input type="radio"
                                checked={radioSelected === "Patient"}
                                className="form-check-input"
                                id="inlineRadio2"
                                value="Patient"
                                onChange={handleChangeRadio} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Patient</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio"
                                checked={radioSelected === "Clinic"}
                                id="inlineRadio1"
                                className="form-check-input"
                                value="Clinic"
                                onChange={handleChangeRadio} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Clinic</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio"
                                checked={radioSelected === "Guest"}
                                className="form-check-input"
                                id="inlineRadio3"
                                value="Guest"
                                onChange={handleChangeRadio} />
                            <label className="form-check-label" htmlFor="inlineRadio3">Guest</label>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/register" className="register_link"> click here to register</Link>
                    <Link to="/" className="btn btn-secondary" onClick={() => setshowModel(false)}>Close</Link>

                    <Button  className="btn btn-primary" onClick={handleLogin}>Login</Button>
                </Modal.Footer>
            </Modal>
        </div>
    ):(<Modal show={showModel} onHide={()=>{
        setshowModel(false);
        window.location.replace('/');
        }}>
        <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="card-body">
         <OtpInput
             className="otpcls"
             value={otp}
             onChange={handleChangeOtp}
             numInputs={4}
             separator={<span>O</span>}
         />
         </div> </Modal.Body>
        <Modal.Footer>
            
            <Link to="/" className="btn btn-secondary" onClick={() => setshowModel(false)
                }>Close</Link>
            <Button variant="primary" onClick={handleGuestLogin}>Login</Button>
        </Modal.Footer>
    </Modal>);
}

export default Login;