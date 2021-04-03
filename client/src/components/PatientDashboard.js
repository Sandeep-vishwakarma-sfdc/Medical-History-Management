import {  Card } from 'react-bootstrap';
import {FaMale,FaFemale} from 'react-icons/fa'
import BarChart from './Barchart';
import {useHistory} from 'react-router-dom';


function PatientD({imagesrc,title,caption}){
   let history = useHistory();
    console.log('image src',imagesrc);
    let handlePerson = e =>{
      console.log("Redirect");
      history.push('/clinicdashboard');
    };
return (
  <div className="container mt-4">
<div className='row'>
<div className="col-xs-6 col-sm-6 col-md-6 iconcmp" onClick={handlePerson}>
<Card className="dashboard-card">
  <Card.Body>
  <div>
   <Card.Img variant="top" className="ml-4" style={{borderRadius:'50px',border:"2px solid",height:'75px',width:'75px'}} src="http://simpleicon.com/wp-content/uploads/user-5.png" height=""/>
   <span style={{fontSize:"52px",paddingLeft:"60px",fontWeight:"600px",color:'green'}}>80</span>
   <span className="ml-5" style={{fontWeight:"400px",fontSize:"42px"}}>
     Patient
    </span> 
   </div><div>
     <span style={{paddingLeft:"160px",fontSize:"32px"}}>Patient in Clinic</span>
   </div>
  </Card.Body>
</Card>
  </div>
  <div className="col-xs-6 col-sm-6 col-md-2"></div>
  <div className="col-xs-6 col-sm-6 col-md-2">
  {/* backgroundImage:"URL('http://localhost:3000/images/malebackground.jpg')", */}
  <Card className="dashboard-card" style={{height:"195px",backgroundSize:"cover"}}>
  <Card.Body>
  <div>
    <FaMale style={{paddingLeft:"40px"}} size="75px"/>
   <span style={{fontSize:"52px",paddingLeft:"35px",fontWeight:"600px",color:'#4AB5EB'}}>40</span>
   </div>
  </Card.Body>
</Card>
  </div>
  <div className="col-xs-6 col-sm-6 col-md-2">
  <Card className="dashboard-card" style={{height:"195px",backgroundSize:"cover"}}>
  <Card.Body>
  <div>
  <FaFemale style={{paddingLeft:"40px"}} size="75px"/>
   <span style={{fontSize:"52px",paddingLeft:"35px",fontWeight:"600px",color:'#FC7B7B'}}>40</span>
   </div>
  </Card.Body>
</Card>
  </div>
</div>
<Card className="mt-4">
    <Card.Body>
      <BarChart/>
    </Card.Body>
  </Card>
 
 </div>
);
}
export default PatientD;