import {  Card,Badge } from 'react-bootstrap';
import {} from './login';

function ClinicD({imagesrc,title,caption}){
    console.log('image src',imagesrc);
return (
  <div className="container mt-4">

  <Card style={{ width: '35rem' ,borderRadius:'50px',padding:'20px',borderBlockColor:'grey' }}>
  <Card.Body style={{borderRadius:'60px'}}>
  <div className='row'><div className="col-xs-6 col-sm-6 col-md-3">
    <Card.Title></Card.Title>
    <Card.Text>
    <Card.Img variant="top" style={{borderRadius:'30px'}} src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-battleship-grey-solid-color-background.jpg" width='100px' height='100px'/>
      Clinic
    </Card.Text></div>
    <div className="col-xs-6 col-sm-6 col-md-6"><h1>80</h1></div>
    <div className="col-xs-6 col-sm-6 col-md-3">
    <Badge pill variant="info">
            Clinic
             </Badge>{' '}
    </div>
    </div>
 
  </Card.Body>
</Card>
</div>
);
}

export default ClinicD;
