import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate()


    const { providerLogin, signIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                form.reset();
                setError('')
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })

    }
    return (

        <div className='container w-50 my-5'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Submit
                </Button> <br />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text> <br />
                <Button onClick={handleGoogleSignIn} variant="outline-primary" type="submit" className='my-1' >
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