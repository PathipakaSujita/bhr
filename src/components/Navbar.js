import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function NavComponent() {
  return (
    <Container>
      <Navbar bg="light" sticky="bottom">
        <Navbar.Brand href="">
          <img
            src="/src/logo.png"
            width="30"
            height="30"
            ClassName="d-inline-block align-top"
            alt="BrainHR IT Solutions Inc"
          />
        </Navbar.Brand>
        <Navbar.Brand href=""> brainhr IT SOLUTIONS</Navbar.Brand>
        <Nav>
          <Nav.Link href="">SERVICES </Nav.Link>
          <Nav.Link href="">COMPANY </Nav.Link>
          <Nav.Link href="">CAREERS </Nav.Link>
          <Nav.Link href="">CONTACT US </Nav.Link>
          <Nav.Link href="">SIGNUP </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default NavComponent;
