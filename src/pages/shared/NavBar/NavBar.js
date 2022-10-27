import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"
import { faCommentsDollar, faUser } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className='fw-bold' href="#home"><span className='text-warning fw-bold'>Edu</span> Planner</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto fariha">
                            <Link to='/course'>Course</Link>
                            <Link to='/faq'>FAQ</Link>
                            <Link to='/blog'>Blog</Link>

                        </Nav>
                        <Link >
                            {user?.uid ?
                                <>
                                    <span>{user?.displayName}</span>
                                    <Button onClick={handleLogOut} variant='light'>Log Out</Button>


                                </>

                                :
                                <>
                                    <Link to='/login'> <Button variant='light'>Log In</Button> </Link>
                                    <Link to='/register'> <Button variant='light'>Register</Button> </Link>


                                </>

                            }
                        </Link>
                        <Link >{user?.photoURL ?
                            <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image> : <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        }
                        </Link>




                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavBar;