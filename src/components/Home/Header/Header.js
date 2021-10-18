import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { users, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {
                            users.email ? <div>
                                <button
                                    className="btn btn-info"
                                    onClick={logOut}>Logout
                                </button>
                                <Navbar.Text>
                                    Signed in as: {users.displayName}
                                </Navbar.Text>
                            </div>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;