import React from 'react'
import {Row, Container, Col,Button} from 'react-bootstrap'
import { TicketTable } from '../../Component/TicketTable'
import tickets from '../../Asset/Dummyticket.json'

export const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col className='text-center mt-5 mb-2'>
            <Button variant='info' style={{'fontSize':'2rem' , padding:"10px 30px" }}>Add New Ticket</Button>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mt-5 mb-2'>
                <div>Total Ticket : 50</div>
                <div>Pending Ticket:5 </div>
            </Col>
        </Row>
        <Row>
            <Col className='mt-2'>
              Recently Added Ticket
            </Col>
            <hr/>
            <Row>
                <Col className='recent-ticket'><TicketTable tickets={tickets}/></Col>
            </Row>
        </Row>

    </Container>
  )
}
