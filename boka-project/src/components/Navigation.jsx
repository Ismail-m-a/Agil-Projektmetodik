import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/Navigation.css';
import { isLoggedIn } from './Auth'; 


function Navigation() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="/">StädaFint AB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          
            <HashLink className='nav-link' smooth to="/#" scroll={scrollWithOffset}>Home</HashLink>
            <HashLink className='nav-link' smooth to="/#services" scroll={scrollWithOffset}>Våra tjänster</HashLink>
            <HashLink className='nav-link' smooth to="/boka#boka" scroll={scrollWithOffset}>Boka Städtjänst</HashLink>
            <HashLink className='nav-link' smooth to="/kontakt#kontakt-header" scroll={scrollWithOffset}>Kontakta oss</HashLink>
            {isLoggedIn() ? (
              <HashLink className='nav-link' smooth to="/Logout" scroll={scrollWithOffset}>Logout</HashLink>
            ) : (
              <HashLink className='nav-link' smooth to="/login" scroll={scrollWithOffset}>Login</HashLink>
            )}
            <NavDropdown title="Om oss" id="basic-nav-dropdown">
              <NavDropdown.Item className='drop' href="/about">Om oss</NavDropdown.Item>
              <NavDropdown.Item className='drop' href="/job">Jobba hos oss</NavDropdown.Item>
              <NavDropdown.Item className='drop' href="/faq">FAQ</NavDropdown.Item>
              <NavDropdown.Item className='drop' href="#action/3.3">Miljöpolicy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='drop' href="#action/3.4">Separated link</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
