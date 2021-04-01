import { Container,Col,Image,Row } from "react-bootstrap";
function OurServices(){
return(
    <div className="Container mt-4" id="services">
     <h3 className="row justify-content-center subheader p-2">Services &#38; Technology</h3>
    <div className="mt-5">
    <Container>
    <Row>
    <Col xs={6} md={3}>
        <Image src="https://thumbs.dreamstime.com/z/can-help-concept-made-human-hand-holding-marker-transparent-wipe-board-51624014.jpg" roundedCircle height="300px" width="300px"/>
    </Col>
    <Col>
    </Col>
    </Row>
    </Container>
    </div>
    <div className="container mt-4">
        <h1>How can we help you</h1>
        <p className="para">This web app will manage the user’s medical history.The user can maintain his medical history by entering the details and uploading the prescription or file.And this web app will use the user’s aadhar card number and his number to get the Otp for security and can get his entire medical history.
 
 These medical details can also be viewed by the current doctor to get the details about the patient and the diseases he had and the medicines he took and or the process of the treatment by entering the aadhar card number of the employee and getting the Otp from the user.
 
  </p>
    </div>
    </div>
);
}
export default OurServices;