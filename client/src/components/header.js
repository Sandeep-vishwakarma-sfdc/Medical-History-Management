import { useEffect, useState } from "react";
import {  Navbar, Nav, Form, Button } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import {CgLogIn,CgLogOut} from 'react-icons/cg';

function Header(){
const [loggedin,setLoggedIn] = useState(false);
let history = useHistory();
useEffect(()=>{
  let loggedinuser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  console.log('login status',loggedinuser)
    loggedinuser?setLoggedIn(true):setLoggedIn(false);
})

let handleLogout =e =>{
  sessionStorage.removeItem("loggedInUser");
  setLoggedIn(false);
  history.push('/');
}

return (<Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Project Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="/contact#contact">Contact Us</Nav.Link>
            <Nav.Link href="/home#services">Services</Nav.Link>
          </Nav>
          <Form inline>
            <Link to="/adminlogin" className="btn btn-primary" hidden={loggedin}>Admin Login<CgLogIn size="20"/></Link>
            <Link to="/login" className="btn btn-primary" hidden={loggedin} style={{marginLeft:"10px"}}>Login<CgLogIn size="20"/></Link>
            <Button className="btn btn-primary" hidden={!loggedin} style={{marginLeft:"10px"}} onClick={handleLogout}>Logout<CgLogOut size="20" style={{paddingLeft:"5px"}}/></Button>
          </Form>
        </Navbar.Collapse>
</Navbar>);
}
export default Header;
