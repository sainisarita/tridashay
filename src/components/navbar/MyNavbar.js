import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React from 'react'

const MyNavbar = () => {
    return (
        <div className="myNavbar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Taste of Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#pricing">Lunch</Nav.Link>
                <Nav.Link href="#pricing">Breakfast</Nav.Link>
                <Nav.Link href="#pricing">Breakfast</Nav.Link>
                <Nav.Link href="#pricing">Fast Food</Nav.Link>
              </Nav>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
      );
}



export default MyNavbar;