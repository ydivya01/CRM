import React from 'react'
import { Navbar, Nav , Container } from 'react-bootstrap'


export const Headercomp = () => {
    return <Container><Navbar
    collapseOnSelect
    bg='dark' variant='dark' expand='md'>
    <Navbar.Brand>
        CRM LOGO

    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id = "basic-navbar-nav">
        <Nav className="ml-auto">
      
            <Nav.Link href='/dashboard'>Dasboard</Nav.Link>
            <Nav.Link href='/Tickets'>Tickets</Nav.Link>
            <Nav.Link href=''>Sign out</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
  </Container>

    

}
