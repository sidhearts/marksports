import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../stylesheets/home.css";

export default function NavbarExt() {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="lg"
        className="landing-navbar active mb-5"
      >
        <Navbar.Brand href="/home" className="brand ml-md-5">
          <img src="/images/logo.png" style={{ width: "25vh" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-md-5">
            <Nav.Link href="/home" className="links">
              <b>HOME</b>
            </Nav.Link>
            <Nav.Link
              href="https://themarksports.online/"
              target="_blank"
              className="links"
            >
              <b>NEWS </b>
              <sup className="badge badge-pill badge-danger pulse">&#9678;</sup>
            </Nav.Link>
            <Nav.Link href="/service" className="links">
              <b>SERVICES</b>
            </Nav.Link>
            <Nav.Link href="/talent#main" className="links">
              <b>TALENT</b>
            </Nav.Link>
            <Nav.Link href="/brands#main" className="links">
              <b>BRANDS</b>
            </Nav.Link>
            <Nav.Link href="/home#career" className="links">
              <b>CAREER</b>
            </Nav.Link>
            <Nav.Link href="/home#about" className="links">
              <b>ABOUT</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
