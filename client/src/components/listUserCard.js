import { useState } from "react";
import UserCard from "./userCard";

function ListUserCard({usertype,searchstr}) {
const [patientlst,setPatientlst] = useState([{_id:'1',Name:'Sandeep Vishwakarma'},{_id:'2',Name:'Sachin Vishwakarma'},{_id:'3',Name:'Amit Vishwakarma'},{_id:'4',Name:'Sandeep Vishwakarma'},{_id:'5',Name:'Sachin Vishwakarma'},{_id:'6',Name:'Amit Vishwakarma'}]);
console.log('User type ',usertype,'search str',searchstr);
console.log('Patient ',patientlst);
return(patientlst.map((patient)=>
    <ul key={patient._id.toString()}>
        <UserCard id={patient._id} name={patient.Name}/>
    </ul>
))  
}
export default ListUserCard;