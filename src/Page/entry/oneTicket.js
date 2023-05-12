import React from 'react'
import { Container,Col,Row ,Button} from 'react-bootstrap'
import { Breadcrumpdata } from '../../Component/Breadcrumpdata'
import tickets from '../../Asset/Dummyticket.json'
import { MessageHistory } from '../../Component/MessageHistory'

const ticket = tickets[0]

export const OneTicket = () => {
  return (
    <Container>
        <Row>
            <Col>
            <Breadcrumpdata page='Ticket' />
            </Col>
        </Row>
        <Row>
            <Col>
            <div className='subject'>Subject : {ticket.subject}</div>
            <div className='date'>sddvfvdsg</div>
            <div className='status'>sddvfvdsg</div>
            </Col>
            <Col>
            <Button variant="outline-info">Close Ticket</Button>
            </Col>
        </Row>
        <Row>
          <Col>
          <MessageHistory messa/>
          </Col>
        </Row>
    </Container>
  )
}
