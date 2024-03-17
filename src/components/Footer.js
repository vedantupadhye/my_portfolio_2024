import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="mx-auto footer-copywright">
          <h3>Designed and Developed by Vedant Upadhye</h3>
        </Col>
        

      </Row>
    </Container>
  );
}

export default Footer;
