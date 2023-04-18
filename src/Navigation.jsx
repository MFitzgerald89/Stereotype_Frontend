import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navigation">
      <Navbar.Brand href="#home" className="brand">
        Stereotype
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" className="link">
            Home
          </Nav.Link>
          <Nav.Link href="#search" className="link">
            Search
          </Nav.Link>
          <Nav.Link href="#profile" className="link">
            Profile
          </Nav.Link>
          <Nav.Link href="#messages" className="link">
            Messages
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
