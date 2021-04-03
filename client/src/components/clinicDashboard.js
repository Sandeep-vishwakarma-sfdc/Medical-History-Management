import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ListUserCard from "./listUserCard";
import {useHistory} from 'react-router-dom';

function ClinicDashboard(){
let history = useHistory();
const [usertype,setUsertype] = useState('patient');
const [searchstr,setSearchstr] = useState('');
const [patientlst,setPatientlst] = useState([{_id:'1dasdsdfdfgdg',Name:'Sandeep Vishwakarma'},{_id:'2',Name:'Sachin Vishwakarma'},{_id:'3',Name:'Amit Vishwakarma'},{_id:'4',Name:'Sandeep Vishwakarma'},{_id:'5',Name:'Sachin Vishwakarma'},{_id:'6',Name:'Amit Vishwakarma'},{_id:'7',Name:'Mummy Vishwakarma'},{_id:'8',Name:'Akshay Patil'}]);
const [templist,setTempList] = useState([]);

useEffect(()=>{
    // call Api 
    setTempList(patientlst);
},[])

let handleSearch = event => {
    setSearchstr(event.target.value);
    if(searchstr!=''){
        searchInList();
    }else{
        console.log('Refresh from Api');
        let temp = [{_id:'1',Name:'Sandeep Vishwakarma'},{_id:'2',Name:'Sachin Vishwakarma'},{_id:'3',Name:'Amit Vishwakarma'},{_id:'4',Name:'Sandeep Vishwakarma'},{_id:'5',Name:'Sachin Vishwakarma'},{_id:'6',Name:'Amit Vishwakarma'},{_id:'7',Name:'Mummy Vishwakarma'},{_id:'8',Name:'Akshay Patil'}];
        setPatientlst(temp);
        setTempList(temp);
    }
}
function searchInList(){
    // console.log('handle backspace');
    let templist1 = [];
    setTempList([]);
    patientlst.forEach(patient=>{
        let name = patient.Name.toLowerCase();
        if(name.includes(searchstr.toLowerCase())){
            let patient_element = templist1.find(ele=>ele._id == patient._id);
            // console.log('patient element in temp ',patient_element);
            if(!patient_element){
                templist1.push(patient);
                setTempList(templist1);
            }
        }
    });
    console.log('templist ',templist1);
}


let handleAddPatient = e => {
    console.log('Add patient');
    history.push('/addpatient');
}

return (<div className="ml-3 ">
        <div className="form-group mt-3 row">
            <div className="col-xs-6 col-sm-3 col-md-3">
            <input type="text" className="form-control" placeholder="type here to search.." name="search" autoComplete="off" value={searchstr} onKeyUp={handleSearch} onChange={handleSearch}/>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3"></div>
            <div className="col-xs-6 col-sm-5 col-md-4"></div>
            <div className="col-xs-6 col-sm-1 col-md-2">
                <Button variant="primary" onClick={handleAddPatient}>Add Person</Button>
            </div>
        </div>
            <div className="listUser">
            <ListUserCard usertype={usertype} searchstr={searchstr} patientlst={templist}/>
            </div>
        {/* <div className="form-group mt-3 row container">
        <div className="col-xs-6 col-sm-3 col-md-1"></div>
        <div className="col-xs-6 col-sm-3 col-md-4">
            <Button variant="outline-primary"  onClick={handleFirst}><BiArrowBack/><span style={{paddingLeft:"10px"}}>First</span></Button>
            <Button variant="outline-primary" className="ml-4" onClick={handlePrevious}><BiArrowBack/><span style={{paddingLeft:"10px"}}>Previous</span></Button>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2"></div>
        <div className="col-xs-6 col-sm-3 col-md-4">
            <Button variant="outline-primary" className="align-left" onClick={handleNext}><MdArrowForward className="push-right"/><span style={{paddingRight:"10px"}}>Next</span></Button>
            <Button variant="outline-primary" className="ml-4 align-left" onClick={handleLast}><MdArrowForward className="push-right"/><span style={{paddingRight:"10px"}}>Last</span></Button>
        </div>
        </div> */}
        </div>
);
}
export default ClinicDashboard;