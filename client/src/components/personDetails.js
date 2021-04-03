import { useEffect } from "react";

function PersonDetails(){

useEffect(()=>{
    console.log('location ',window.location);
})    

return(<h1>Hello</h1>);
}

export default PersonDetails;