import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const NavBar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className='fw-bold' href="#home"><span className='text-warning fw-bold'>Edu</span> Planner</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto fariha">
                            <Link to='/course'>Course</Link>
                            <Link to='/faq'>FAQ</Link>
                            <Link to='/blog'>Blog</Link>
                            <Link >{user?.displayName}</Link>
                            <Link to='/login'> <Button variant='light'>Log In</Button> </Link>
                        </Nav>



                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavBar;