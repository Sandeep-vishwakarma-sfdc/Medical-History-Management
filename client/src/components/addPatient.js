import React, { useEffect, useState } from "react"; 
import { Button,Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function AddPatient(){
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