import React from 'react'
import { Container , Button, Form } from 'react-bootstrap'
import { propTypes } from 'prop-types'
import  { useState, useEffect } from "react";

export const NewTicketform = ({handleOnChange , handleOnSubmit, formData}) => {

  return (
    <Container className='mt-3 new-ticket bg-light'>
      <h2 className='text-info text-center'>New Ticket</h2>
    <Form autoComplete='off' onSubmit={handleOnSubmit}>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Subject</Form.Label>
      <Form.Control 
      type="text"  
      name="subject"
      // value={formData.subject}
      placeholder="Please enter subject of issue"
      onChange={handleOnChange} 
      required/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Submisson Date</Form.Label>
      <Form.Control 
      type="date"
      name="issueDate"
      // value={formData.issueDate}
      onChange={handleOnChange} 
      required/>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" 
      row = "10" 
      name="detail"
      // value={formData.detail}
      placeholder="Please enter Description"
      onChange={handleOnChange}
      />
    </Form.Group>

    <Button variant="info" type="submit">
      Submit
    </Button>
  </Form>
  </Container>
  )
}

// NewTicketform.propTypes = {
//   handleOnChange: propTypes.func.isRequired,
//   handleOnSubmit:propTypes.func.isRequired,
//   formData: propTypes.isRequired,

// };



