import { useEffect,useState} from "react";
import React, { Component } from 'react';
import { Button,Accordion,Card,Form} from 'react-bootstrap';
import { GrStatusPlaceholder } from "react-icons/gr";


function PersonDetails(){
    const [open, setOpen] = useState(false);
useEffect(()=>{
    console.log('location ',window.location);
}) 
   
return (

    <Accordion defaultActiveKey="0">
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Patient Deatils!
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
            <form className="container" style={{paddig:"5px"}}>
                
            <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-2">
                        <div className="form-group">
                            <label>First name</label>
                            
                        </div>
                    </div>    
                    <div className="col-xs-6 col-sm-6 col-md-3">
                        <div className="form-group">
                           
                            <input type="text" name="lname" className="form-control" placeholder="First name" />
                        </div>
                    </div><div  className="col-xs-6 col-sm-6 col-md-2"></div>
                    <div className="col-xs-6 col-sm-6 col-md-2">
                        <div className="form-group">
                            <label>Last Name</label>
                           
                        </div>
                    </div> <div className="col-xs-6 col-sm-6 col-md-3">
                        <div className="form-group">
                           
                            <input type="text" name="lname" className="form-control" placeholder="Last Name" />
                        </div>
                    </div>
                </div>
       
            </form>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
          Upload Report!
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body>
            <div>
        
  <div className="mb-3">
  <form>
      <input type="file" id="file" multiple name="file" />
      <button type="submit" className="btn btn-info"> Update File </button>
    </form>

  </div>

            </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
   
  );
}


export default PersonDetails;