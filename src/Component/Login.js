import React from 'react'
import { PropTypes } from 'prop-types'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'


export const Login = ({handleOnChange , handleOnSubmit, fromSwitcher, email,pass}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-info text-center'>Client Login</h1>
                    <hr />
                    <Form autoComplete='off' onSubmit={handleOnSubmit}>
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
                        < Form.Group>
                            Password
                            <Form.Control
                                type="password"
                                name="password"
                                value={pass}
                                onChange={handleOnChange}
                                placeholder="Password"
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
                <a href='#!' onClick={()=>fromSwitcher('reset')}>Forget Password?</a>
                </Col>
            </Row>
        </Container>
    )
}

Login.PropTypes = {
    handleOnChange : PropTypes.func.isRequired,
    handleOnSubmit : PropTypes.func.isRequired,
    fromSwitcher : PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    pass:PropTypes.string.isRequired
}

