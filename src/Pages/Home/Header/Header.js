import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
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
          <Navbar.Brand href="#home">HEALTH CARE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={HashLink} to="/home#home">
                HOME
              </Nav.Link>
              <Nav.Link as={HashLink} to="/about#about">
                ABOUT US
              </Nav.Link>
              <Nav.Link as={HashLink} to="/doctors#doctors">
                DOCTORS
              </Nav.Link>
              <Nav.Link as={HashLink} to="/contact#contact">
                CONTACT US
              </Nav.Link>
              <Nav.Link as={HashLink} to="/appointment#appointment">
                APPOINTMENT
              </Nav.Link>

              {user.displayName ? (
                <Button onClick={userSignOut} variant="info" type="submit">
                  LOGOUT
                </Button>
              ) : (
                <Nav.Link as={HashLink} to="/login">
                  LOGIN
                </Nav.Link>
              )}

              <Navbar.Text className="text-white mx-5">
                Signed in as: {user.displayName}
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
