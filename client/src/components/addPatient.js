import React, {  useState } from "react"; 
import { Button,Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

function AddPatient(){
const { addToast } = useToasts();
const [showModel,setshowModel ]=useState(true);
const [userDetails,setUserDetails] = useState({'fname':'','lname':'','email':'','mobile':'','adhaarNumber':'','age':'','password':'','retype_pass':'','isPatient':true,'clinicname':'','usertype':'Patient'});

let handleChange = e =>{
    let name = e.target.name
    setUserDetails(prevState=>({
        ...prevState,
        [name]:e.target.value
    }));
}

let addPatient = e =>{
    console.log("userDetails ",userDetails);
    setshowModel(false);
    addToast('Patient Added Successfully', { appearance: 'success', autoDismiss: true});
    setTimeout(() => {
        window.location.replace('/clinicdashboard');
    }, 2000);
    //Add paint Api
    // Add ClinicPatient Mapping Api
}
return ( <Modal show={showModel} onHide={()=>{
    setshowModel(false);
    window.location.replace('/clinicdashboard');
    }}>
    <Modal.Header closeButton>
        <Modal.Title>Add Patient</Modal.Title>
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
    <div className="row">
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
   </form> 
</Modal.Body>
<Modal.Footer>
    <Link to="/clinicdashboard" className="btn btn-secondary" onClick={() => setshowModel(false)
        }>Close</Link>
    <Button variant="primary" onClick={addPatient}>Add patient</Button>
</Modal.Footer>
</Modal>)
}
export default AddPatient;