import React from "react";
import { Container, Col, Row} from 'react-bootstrap';
import "../stylesheets/home.css";

export default function Footer() {
  return (
      <div className="footer">
        <Container>
          <Row>
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
