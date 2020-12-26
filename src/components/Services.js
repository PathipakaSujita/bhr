import React, { Component } from 'react';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

class Services extends Component {
  render() {
    return (
      <div id="services">
        <Container fluid="sm">
          <h2 className="headline"> Services </h2>
          <Row>
            <Col lg={true} className="service-col">
              <Image
                className="service-img"
                src="images/service1.png"
                alt="service1"
              />
              <h6 className="service-text"> RESOURCE STRATEGY & STAFFING</h6>
            </Col>
            <Col lg={true} className="service-col">
              <Image
                className="service-img"
                src="images/service2.png"
                alt="service2"
              />
              <h6 className="service-text">
                SOFTWARE PROJECTS – MOBILE AND WEB APPLICATIONS
              </h6>
            </Col>

            <Col lg={true} className="service-col">
              <Image
                className="service-img"
                src="images/service3.png"
                alt="service3"
              />
              <h6 className="service-text">TRAINING</h6>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Services;
