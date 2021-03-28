import { Button,Modal} from 'react-bootstrap';
import React, { useEffect, useState } from "react"; 
import {Link} from 'react-router-dom';
import OtpInput from 'react-otp-input';
function Register(){
    const [showModel,setshowModel ]=useState(true);
    const [isAdhaar, setIsAdhaar] = useState(false);
    const [radioSelected, setRadioSelected] = useState('Clinic');
    const [userDetails,setUserDetails] = useState({'fname':'','lname':'','email':'','mobile':'','adhaarNumber':'','age':'','password':'','retype_pass':'','isPatient':true});
    const [otp,setOtp] = useState(0);
    const [otpFlag,setOtpFlag] = useState(true);
    
    useEffect(()=>{
        console.log('sometihing happen');
    })

    let handleChange = e =>{
        // console.log('event on field',e.target.name)
        let name = e.target.name
        setUserDetails(prevState=>({
            ...prevState,
            [name]:e.target.value
        }));
    }

    let handleChangeradio = e =>{
        let isPatient = e.target.value =='Clinic'?false:true;
        console.log('isPatient ',isPatient);
        setRadioSelected(e.target.value);
        isPatient==true?setIsAdhaar(true):setIsAdhaar(false);
        setUserDetails({'fname':'','lname':'','email':'','mobile':'','adhaarNumber':'','age':'','password':'','retype_pass':'','isPatient':isPatient});
    }
    
    let handleChangeOtp = otp =>{
        console.log('OTP ',otp);
        setOtp(otp);

    }

        return otpFlag?(
            <Modal show={showModel} onHide={()=>{
                setshowModel(false);
                window.location.replace('/');
                }}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
            <form>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" name="fname" className="form-control" placeholder="First name" value={userDetails.fname} onChange={handleChange}/>
                        </div>
                    </div>    
                    <div className="col-xs-6 col-sm-6 col-md-6">
                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" name="lname" className="form-control" placeholder="Last name" value={userDetails.lname} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email" value={userDetails.email} onChange={handleChange} />
                    </div>
                </div>  
                <div className="col-xs-6 col-sm-6 col-md-6">
                    <div className="form-group">
                        <label>Mobile</label>
                        <input type="text" name="mobile" className="form-control" placeholder="Enter Contact" value={userDetails.mobile} onChange={handleChange}/>
                    </div>
                </div>   
                </div>
                <div className="row" hidden={!isAdhaar}>
                <div className="col-xs-6 col-sm-6 col-md-6">
                    <div className="form-group">
                                <label>Adhaar Number</label>
                                <input type="text" name="adhaarNumber" className="form-control" placeholder="Enter Adhaar Number" value={userDetails.adhaarNumber} onChange={handleChange}/>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6">
                    <div className="form-group">
                                <label>Age</label>
                                <input type="Number" name="age" className="form-control" placeholder="Enter Age" value={userDetails.age} onChange={handleChange} />
                    </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" placeholder="Enter password" value={userDetails.password} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6">
                        <div className="form-group">
                            <label>Retype Password</label>
                            <input type="password" name="retype_pass" className="form-control" placeholder="Retype password" value={userDetails.retype_pass} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="mb-2">
                        <div className="form-check form-check-inline">
                            <input type="radio"
                                checked={radioSelected === "Patient"}
                                className="form-check-input"
                                id="inlineRadio2"
                                disabled
                                value="Patient"
                                onChange={handleChangeradio} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Patient</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio"
                                checked={radioSelected === "Clinic"}
                                id="inlineRadio1"
                                className="form-check-input"
                                value="Clinic"
                                onChange={handleChangeradio} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Clinic</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio"
                                checked={radioSelected === "Guest"}
                                className="form-check-input"
                                id="inlineRadio3"
                                disabled
                                value="Guest"
                                onChange={handleChangeradio}/>
                            <label className="form-check-label" htmlFor="inlineRadio3">Guest</label>
                        </div>
                    </div>
            </form> 
            </Modal.Body>
            <Modal.Footer>
                <Link to="/login" className="register_link forgot-password text-right"> click here to login</Link>
                <Link to="/" className="btn btn-secondary" onClick={() => setshowModel(false)
                    }>Close</Link>
                <Button variant="primary" onClick={()=>{
                    console.log('userDetails ',userDetails);
                    setOtpFlag(false);
                }}>Sign up</Button>
            </Modal.Footer>
        </Modal>
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
                <Link to="/login" className="register_link forgot-password text-right"> click here to login</Link>
                <Link to="/" className="btn btn-secondary" onClick={() => setshowModel(false)
                    }>Close</Link>
                <Button variant="primary" onClick={()=>{
                    console.log('userDetails ',userDetails);
                    
                }}>Sign up</Button>
            </Modal.Footer>
        </Modal>);
}
export default Register;