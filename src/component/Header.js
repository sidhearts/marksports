import React, { useState} from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../stylesheets/home.css";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className="container">
      <Navbar
        fixed="top"
        variant="dark"
        expand="lg"
        className={
          navbar ? "landing-navbar active mb-5" : "landing-navbar mb-5"
        }
      >
        <Navbar.Brand href="#home" className="brand ml-md-5">
          <img src="/images/logo.png" style={{ width: "25vh" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-md-5">
          <Nav.Link href="/home" className="links">
              HOME
            </Nav.Link>
            <Nav.Link href="/talent" className="links">
              TALENT
            </Nav.Link>
            <Nav.Link href="/brands" className="links">
              BRANDS
            </Nav.Link>
            <Nav.Link href="#career" className="links">
              CAREER
            </Nav.Link>
            <Nav.Link href="#about" className="links">
              ABOUT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
