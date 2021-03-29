import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Login() {
    const [showModel, setshowModel] = useState(true);
    const [isAdhaar, setIsAdhaar] = useState(true);
    const [radioSelected, setRadioSelected] = useState('Patient');
    const [userDetails,setUserDetails] = useState({'isPatient':true,'adhaarNumber':'','email':'','password':''});
    const [isGuest,setIsguest] = useState(false);
    const [isotp,setIsOtp] = useState(false);
    const [otp,setOtp] = useState(0);
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
        let isPatient = e.target.value =='Clinic'?false:true;
        console.log('isPatient ',isPatient);
        setRadioSelected(e.target.value);
        isPatient==true?setIsAdhaar(true):setIsAdhaar(false);
        setUserDetails({'isPatient':isPatient,'adhaarNumber':'','email':'','password':''});
        if(e.target.value=='Guest'){
            setIsguest(true);
        }else{
            setIsguest(false);
        }
    }
    let handleLogin = e => {
        console.log('UserDetails ',userDetails);
        if(isGuest){
            setIsOtp(true);
        }
        let obj = {email:userDetails.email,passwd:userDetails.password};
        Axios.post(`http://localhost:5000/cliniclogin`,obj).then(res=>{
            console.log('Login Response ',res);
        }).catch(err=>console.log('login '+err));
    }
    let handleChangeOtp = otp =>{
        console.log('OTP ',otp);
        setOtp(otp);
    }
    useEffect(()=>{
       
    });
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
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" name="email" value={userDetails.email} onChange={handleChange}/>
                        </div>
                        <div className="form-group" hidden={!isAdhaar}>
                            <label>Adhaar Number</label>
                            <input type="text" className="form-control" placeholder="Enter Adhaar Number" name="adhaarNumber" value={userDetails.adhaarNumber} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" name="password" value={userDetails.password} onChange={handleChange} />
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
                                <label>Adhaar Number</label>
                                <input type="text" className="form-control" placeholder="Enter Adhaar Number" name="adhaar_number" value={userDetails.email} onChange={handleChange}/>
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
                    <Button variant="primary" onClick={handleLogin}>Login</Button>
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
            <Button variant="primary" onClick={()=>{
                console.log('userDetails ',userDetails);
            }}>Login</Button>
        </Modal.Footer>
    </Modal>);
}

export default Login;