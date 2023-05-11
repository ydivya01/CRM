import React from 'react'
import { PropTypes } from 'prop-types'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'


export const PasswordReset = ({handleOnChange , handleOnResetSubmit,fromSwitcher ,email}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-info text-center'>Reset Password</h1>
                    <hr />
                    <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                        <Form.Group>
                            Email Address
                            <Form.Control
                                type="Email"
                                name="email"
                                value={email}
                                onChange={handleOnChange}
                                placeholder="Enter Email"
                                required
                            />
                        </Form.Group>
                        
                        <Button type="submit">Login</Button>
                    </Form>
                    <hr />
    
                </Col>
            </Row>
            <Row>
                <Col>
                <a href='#!' onClick={()=>fromSwitcher('login')}>Login Now</a>
                </Col>
            </Row>
        </Container>
    )
}

PasswordReset.PropTypes = {
    handleOnChange : PropTypes.func.isRequired,
    handleOnResetSubmit : PropTypes.func.isRequired,
    fromSwitcher : PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    
}

