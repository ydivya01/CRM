import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export const Headercomp = () => {
    return <Navbar
    collapseOnSelect
    bg='info' variant='dark' expand='md'>
    <Navbar.Brand>
        CRM LOGO

    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id = "basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link href='/dashboard'>Dasboard</Nav.Link>
            <Nav.Link href='/dashboard'>Tickets</Nav.Link>
            <Nav.Link href='/dashboard'>Sign out</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>

    

}
