import logo from '../assets/logo.png'
//import Container from 'react-bootstrap/Containe
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
import '../components/NavbarMain.css'
import {Container, Navbar,Nav} from "react-bootstrap"
function NavbarMain() {
  return (
    <div>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <img src={logo} width="175" height="40"/>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMain;