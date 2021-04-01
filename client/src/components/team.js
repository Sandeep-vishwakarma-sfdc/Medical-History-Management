import { Container,Col,Image,Row } from "react-bootstrap";

function Team() {
return (
    <div className="container mt-5">
    <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-4">
            <img
                width={360}
                height={550}
                className="mr-3"
                style={{borderRadius:"5px"}}
                src="https://media.istockphoto.com/illustrations/doctor-clip-art-design-illustration-id657286402"
                alt="Generic placeholder"
            />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-8">
       
        <h1>Why do we use it?</h1>
        <p className="para">we visit the doctor, they start asking us questions on the basis of the condition of the patient he/she can also ask about the clinical history of the patient. Like patients have some sort of allergy but he / she forgot to mention the medications they were taking 2 years ago. Electronic medical record design for this purpose so the data can be easily accessed by  the doctor and even if a patient misses the details we can have a backup to know all the information the doctor needs to treat the patient. It will really helpful to patients as well as doctors.
.</p>
        <p className="para">
            Using Digital method we can store and able to access the data which stored in past as well as we are going to store in future.
            Clinical  Information is important for doctors to treat effectivly patients.
        </p>
        </div>
    </div>
    <div className="row mt-4">
    <div className="col-xs-6 col-sm-6 col-md-4"></div>
    <div className="col-xs-6 col-sm-6 col-md-6">
    
    <Container>
            <Row>
            <Col xs={6} md={4}>
                <Image src="https://cdn1.iconfinder.com/data/icons/donate-glyph-silhouettes/300/191224534Untitled-3-512.png" roundedCircle height="150px" width="150px"/>
            </Col>
            <Col>
            <h1>Our Team</h1>
            <p className="para mt-2"> 
             ❑ Unnati Jain<br/>
             ❑ Sandeep Vishwakarma<br/>
             ❑ Akshay Pati
            </p>
            </Col>
            </Row>
        </Container>
    </div>
    </div>
    </div>
);    
}
export default Team;