import React from 'react'
import { useState , useEffect} from 'react'
import { NewTicketform } from '../../Component/NewTicketform'
import { Container, Row, Col } from 'react-bootstrap'

const initialFormData = {
    subject :'',
    issueDate :'',
    detail:'',
}

export const  NewTicketPage = () => {
const [formData , setFormData] = useState(initialFormData)
useEffect(()=>{}, [formData])


    const handleOnChange = (e) =>{
        const {name, value} = e.target ;

        

        setFormData({
            ...formData,
            [name]:value
        })
        
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submission requested!!")
    }
  return (
  <Container>
    <Row>
        <Col>
        <NewTicketform 
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        formData={formData}
        />
        </Col>
    </Row>
   </Container>

  )
   
  
}
