import {  Card,Badge,CardDeck } from 'react-bootstrap';
import {} from './login';

function PatientD({imagesrc,title,caption}){
    console.log('image src',imagesrc);
return (
  <div className="container mt-4">
<CardDeck>
<Card style={{ width: '35rem',left:-100 ,borderRadius:'50px',padding:'20px',borderColor:"skyblue", borderWidth:"10px" }}>

  <Card.Body style={{borderRadius:'60px'}}>
  <div className='row'><div className="col-xs-6 col-sm-6 col-md-3">
    <Card.Title></Card.Title>
    <Card.Text>
    <Card.Img variant="top" style={{borderRadius:'30px'}} src="http://simpleicon.com/wp-content/uploads/user-5.png" width='100px' height='100px'/>
  </Card.Text></div>
    <div className="col-xs-6 col-sm-6 col-md-6"><h1>80</h1></div>
    <div className="col-xs-6 col-sm-6 col-md-3">
    <Badge pill variant="info">
            Patient Info
             </Badge>{' '}
    </div>
    </div>
 
  </Card.Body>
</Card>

<Card style={{width: '35rem' ,borderRadius:'50px',padding:'20px',borderColor:"skyblue", borderWidth:"10px"}}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
     <h1>data of
</h1>      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{width: '35rem',right:-100 ,borderRadius:'50px',padding:'20px',borderColor:"skyblue", borderWidth:"10px"}}>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>
  </CardDeck>
 </div>
);
}
export default PatientD;