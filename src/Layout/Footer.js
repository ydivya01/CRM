import React from 'react'
import {Nav,Navbar , Container} from 'react-bootstrap'

export const Footercomp = () => {
  return  <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home">Contact us</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Twitter</Nav.Link>
      <Nav.Link href="#features">Facebook</Nav.Link>
      <Nav.Link href="#pricing">LinkedIn</Nav.Link>
    </Nav>
  </Container>
</Navbar>
}
