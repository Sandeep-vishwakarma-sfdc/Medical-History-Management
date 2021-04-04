import {  useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
function AdminLogin(){
    const [adminDetail,setAdminDetails] = useState({email:'abc@gmail.com',password:'abc'});
    const [showModel, setshowModel] = useState(true);
    
    let handleChange = e =>{
        // console.log('event on field',e.target.name)
        let name = e.target.name
        setAdminDetails(prevState=>({
            ...prevState,
            [name]:e.target.value
        }));
    }
return ( <div>
    <Modal show={showModel} onHide={() => {
        setshowModel(false)
        window.location.replace('/');
        }}>
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form >
                <div className="form-group">
                    <label>Email</label><span className="required-input">*</span>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={adminDetail.email} onChange={handleChange}/>
                </div>
                
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={adminDetail.password} onChange={handleChange} />
                </div>
                <Link to="/adminclinicVerification" className="btn btn-primary" >Admin Login</Link>
           </form>    
        </Modal.Body>
    </Modal>
</div>
);
}
export default AdminLogin;