import React from 'react';
import logo from '../images/logo-crop-transparent.png';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
    <div>
        <Navbar bg="light" sticky="top" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/"><img src={logo} width="50" height="50" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
                </Nav>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/production">Production</Nav.Link>
                </Nav>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    )
}

export default Header;
