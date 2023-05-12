import React from 'react'
import { Form, Row, Col } from "react-bootstrap";
import { propTypes } from 'prop-types';

export const SearchForm = ({handleOnChange,str}) => {
    console.log(str)
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Search:
          </Form.Label>
          <Col sm="6">
            <Form.Control
              name="searchStr"
              onChange={handleOnChange}
              placeholder="Search ..."
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

// SearchForm.propTypes = {
//     handleOnChange: propTypes.func.isRequired,
//     str:propTypes.string.isRequired
// }

