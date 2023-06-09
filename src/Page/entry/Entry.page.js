import React from 'react'
import './Entry.style.css'
import { useState } from 'react';
import { Card, Container, Row , CardGroup} from 'react-bootstrap';
import { Login } from '../../Component/Login';
import { PasswordReset } from '../../Component/Passwordreset'


export const Entry = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [formLoad, setformLoad] = useState('login')

    const handleOnChange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'email':
                setemail(value)
                break;

            case 'password':
                setpassword(value)
                break;

            default:
                break;
        }
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            return alert("Fill up all the form!!")
        }

        console.log(email, password)
    };

    const handleOnResetSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            return alert("Please enter correct email!!")
        }

        console.log(email)
    };

    const fromSwitcher = (frmtype) => {
        setformLoad(frmtype)
    };

    return (


       
            <Row className='entry-page bg-info'>
            <Container >
                <Card className='box-style'>
                <h1 className='text-info text-center'>Admin</h1>
                    {formLoad === "login" &&
                        <Login
                            handleOnChange={handleOnChange}
                            handleOnSubmit={handleOnSubmit}
                            fromSwitcher={fromSwitcher}
                            email={email}
                            pass={password} />}
                    {formLoad === "reset" &&
                        <PasswordReset
                            handleOnChange={handleOnChange}
                            handleOnResetSubmit={handleOnResetSubmit}
                            fromSwitcher={fromSwitcher}
                            email={email} />}
                </Card>

               

            

        
        </Container>
        </Row>




    
  );
}







  
