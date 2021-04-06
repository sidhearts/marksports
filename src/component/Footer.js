import React from "react";
import { Container, Col, Row, Nav} from 'react-bootstrap';
import "../stylesheets/home.css";

export default function Footer() {
  return (
      <div className="footer">
        <Container>
          <Row>
            <nav clasName="footer-nav">
            <ul>
              <li>
                 <Nav.Item>
              <Nav.Link
                data-placement="bottom"
                href="https://twitter.com"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </Nav.Link>
            </Nav.Item>
              </li>
              <li>
            <Nav.Item>
              <Nav.Link
                data-placement="bottom"
                href="https://www.facebook.com/"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </Nav.Link>
            </Nav.Item>
              </li>
              <li>
               <Nav.Item>
              <Nav.Link
                data-placement="bottom"
                href="https://www.instagram.com/"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </Nav.Link>
            </Nav.Item>
              </li>
            </ul>
            </nav>
            <Col xs={6} className="texts text-left p-3">
              <small>&copy; 2021 all rights reserved</small>
            </Col>
            <Col xs={5} className="texts p-3">
              <span>Contact us:</span>
            </Col>
          </Row>
        </Container>
      </div>
  );
}
