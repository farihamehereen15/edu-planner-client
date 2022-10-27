import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    return (

        <div className='container w-50 my-5'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Submit
                </Button> <br />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> <br />
                <Button variant="outline-primary" type="submit" className='my-1' >
                    Log In with Google
                </Button> <br />
                <Button variant="outline-primary" type="submit" >
                    Log In with Github
                </Button>
            </Form>

        </div>

    );
}



export default Login;