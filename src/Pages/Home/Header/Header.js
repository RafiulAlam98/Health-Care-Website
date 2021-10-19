import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/UseAuth/useAuth';

import './Header.css';

const Header = () => {
  const { user, userSignOut } = useAuth();
  return (
    <>
      <Navbar
        sticky="top"
        bg="dark"
        variant="dark"
        expand="lg"
        className="navbar-style"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <span className="text-white">MEDI </span>
            <span className="text-info">PLUS </span>
            <span className="text-white">HEALTH </span>
            <span className="text-info">CARE</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={HashLink} className="text-warning" to="/home#home">
                HOME
              </Nav.Link>
              <Nav.Link as={HashLink} to="/about#about">
                ABOUT US
              </Nav.Link>
              <Nav.Link as={HashLink} to="/doctors#doctors">
                DOCTORS
              </Nav.Link>

              <Nav.Link as={Link} to="/appointment">
                APPOINTMENT
              </Nav.Link>

              <Navbar.Text className="text-white mx-5">
                <span className="text-info">Signed in as: </span>
                {user.displayName}
              </Navbar.Text>

              {user.displayName ? (
                <Button onClick={userSignOut} variant="info" type="submit">
                  LOGOUT
                </Button>
              ) : (
                <Nav.Link as={HashLink} to="/login">
                  LOGIN
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
