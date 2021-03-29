import { useState } from "react";
import ListUserCard from "./listUserCard";
function ClinicDashboard(){
const [usertype,setUsertype] = useState('patient');
const [searchstr,setSearchstr] = useState('');
let handleSearch = event => {
    setSearchstr(event.target.value);
    var theEvent1 = event || window.event;
    var key1 = theEvent1.keyCode || theEvent1.which;
    console.log('key code ', key1);
    key1 = String.fromCharCode(key1);
    console.log('key code ', key1);
    if (key1 == 8 || key1 == 46) {
        console.log('handle backspace');
    }
}
return (<div className="ml-3 ">
        <div className="form-group mt-3 row">
            <div className="col-xs-6 col-sm-3 col-md-3">
            <input type="search" className="form-control" placeholder="type here to search.." name="search" autoComplete="off" value={searchstr} onChange={handleSearch}/>
            </div>
        </div>
            <div className="listUser">
            <ListUserCard usertype={usertype} searchstr={searchstr}/>
            </div>
        </div>
);
}
export default ClinicDashboard;