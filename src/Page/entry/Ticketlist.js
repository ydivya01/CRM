import  React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { Breadcrumpdata } from "../../Component/Breadcrumpdata";
import { SearchForm } from '../../Component/SearchForm';
import { useState, useEffect } from 'react';
import tickets from '../../Asset/Dummyticket.json'

import {TicketTable} from '../../Component/TicketTable';


export const Ticketlist = () => {
    const [str,setStr] = useState('')

    useEffect(() => {}, [str]);

    const handleOnChange = e => {
        setStr(e.target.value)
        console.log(e.target)
    }
  return (
    <Container>
    <Row>
      <Col>
        <Breadcrumpdata page="Ticket Lists" />
      </Col>
    </Row>
    <Row className="mt-4">
      <Col>
        
          <Button variant="info">Add New Ticket</Button>
        
      </Col>
      <Col className="text-right">
        <SearchForm handleOnChange={handleOnChange} str={str}/>
      </Col>
    </Row>
    <hr />
    <Row>
      <Col>
     <TicketTable tickets={tickets}/>
      </Col>
    </Row>
  
  </Container>
);
};
  

