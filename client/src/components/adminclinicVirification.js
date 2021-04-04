import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {FcApprove,FcDisapprove} from 'react-icons/fc';
import { useToasts } from 'react-toast-notifications';
function AdminClinicVirification(){
const [userAdmin,setAdinuser] =  useState({name:"xyz",pass:"pass1"});
const [pendinguser,setPendeingUser] = useState([{userid:"1",clinicname:"deepak hospital"},{userid:"2",clinicname:"sultan blood bank"},{userid:"3",clinicname:"deepak hospital"}]);
const { addToast } = useToasts();
useEffect(()=>{
    console.log("Api from server");
    // setPendeingUser(res)
},[]);  
let handleApprove = (e) =>{
    addToast('Approved', { appearance: 'success', autoDismiss: true});
}
let handleReject = (e) =>{
        addToast('Rejected', { appearance: 'success', autoDismiss: true});
}  
return(pendinguser.map((usr)=>
    <ul key={usr.userid.toString()}>
    <div className="row mt-2" style={{backgroundColor:"white",borderBottom:'2px solid grey'}}>
        <div className="col-xs-6 col-sm-6 col-md-1 mt-3 mb-2">
            <img className="img_avatar" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" width="70px" height="70px" style={{border:'2px solid'}}></img>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-5">
        <div className="row mt-3"><div className="col-xs-6 col-sm-1 col-md-5 iconcmp" style={{color:'',fontSize:'18px',fontWeight:'700'}}>{usr.clinicname}</div></div>
        <div className="row mt-2">
        </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3"></div>
        <div className="col-xs-6 col-sm-6 col-md-3 mt-5">
        <Button variant="outline-success" id={usr.userid.toString()} onClick={handleApprove} >Approve<FcApprove size="20"/></Button>
        <Button variant="outline-danger" onClick={handleReject} style={{marginLeft:"10px"}}>Reject <FcDisapprove size="20"/></Button>
        </div>
    </div>
    </ul>
));
}
export default AdminClinicVirification;