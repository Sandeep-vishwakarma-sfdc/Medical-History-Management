import { useState } from "react";
import UserCard from "./userCard";

function ListUserCard({usertype,searchstr,patientlst}) {

console.log('User type ',usertype,'search str',searchstr);
console.log('Patient ',patientlst);
return(patientlst.map((patient)=>
    <ul key={patient._id.toString()}>
        <UserCard id={patient._id} name={patient.Name}/>
    </ul>
))  
}
export default ListUserCard;