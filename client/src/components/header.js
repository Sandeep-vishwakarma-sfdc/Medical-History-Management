
import {  Navbar, Nav, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Header(){
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
            <Link to="/login" className="btn btn-primary">Login</Link>
          </Form>
        </Navbar.Collapse>
</Navbar>);
}
export default Header;
