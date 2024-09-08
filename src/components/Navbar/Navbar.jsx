import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css'; // Custom CSS for additional styling

const DiscordNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="discord-navbar">
      <Container>
        {/* Adding pr-5 to create space between the logo and the navigation */}
        <Navbar.Brand href="#home" className="d-flex align-items-center pr-5">
          <img
            src="https://www.svgrepo.com/show/353655/discord-icon.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Discord Logo"
          />
          Discord
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"> {/* mx-auto centers the navigation links */}
            <Nav.Link href="#download" className="mx-3">Download</Nav.Link>
            <Nav.Link href="#nitro" className="mx-3">Nitro</Nav.Link>
            <Nav.Link href="#discover" className="mx-3">Discover</Nav.Link>
            <Nav.Link href="#safety" className="mx-3">Safety</Nav.Link>
            <Nav.Link href="#support" className="mx-3">Support</Nav.Link>
            <Nav.Link href="#blog" className="mx-3">Blog</Nav.Link>
            <Nav.Link href="#careers" className="mx-3">Careers</Nav.Link>
          </Nav>
          {/* Adding ml-auto to the login container for space between links and the login button */}
          <div className="ml-auto login-container">
            <a href="#login" className="rounded-pill login-link">
              Login
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DiscordNavbar;