
import { GrView } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import {MdDelete} from 'react-icons/md';

function UserCard({id,name}){
return(
<div className="row mt-2" style={{backgroundColor:"white",borderBottom:'2px solid grey'}}>
    <div className="col-xs-6 col-sm-6 col-md-1 mt-3 mb-2">
        <img className="img_avatar" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" width="70px" height="70px" style={{border:'2px solid'}}></img>
    </div>
    <div className="col-xs-6 col-sm-6 col-md-5">
       <div className="row mt-3"><div className="col-xs-6 col-sm-1 col-md-1 iconcmp" style={{color:'',fontSize:'18px',fontWeight:'700'}} onClick={()=>console.log('Record Id ',id)}>{name}</div></div>
       <div className="row mt-2">
       </div>
    </div>
    <div className="col-xs-6 col-sm-6 col-md-5 mt-5">
        <GrView size="1.5em"  className="iconcmp" onClick={(e)=>console.log("View",id)}/><label style={{paddingLeft:'5px'}}>View</label>
        <FaEdit size="1.5em"  color="#007BFF" className="iconcmp ml-4" onClick={(e)=>console.log("Edit",id)}/><label style={{paddingLeft:'5px'}}>Edit</label>
        <MdDelete size="1.5em"  color="rgb(241, 72, 50)" className="iconcmp ml-4" onClick={(e)=>console.log("Delete",id)}/><label style={{paddingLeft:'5px'}}>Delete</label>
    </div>
</div>
);
}
export default UserCard;