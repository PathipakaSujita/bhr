import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ResponsiveEmbed
} from 'react-bootstrap';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faFax,
  faEnvelope,
  faGlobeAmericas
} from '@fortawesome/free-solid-svg-icons';

class ContactUs extends Component {
  render() {
    return (
      <div className="brainhr-block" id="contactus">
        <Container className="container-aboutus">
          <h2 className="headline">Get in Touch </h2>
          <Row xs={1} sm={1} md={2}>
            <Col className="contact-us-col">
              <ul className="list-style">
                <li className="list-values">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="icon-padding"
                  />
                  Our offices are at <br /> USA: 33 Wood Avenue South, Suite
                  455,<br />
                  Iselin NJ-08830, USA <br />India: 44, Floor 1, Methanagar, M.M
                  Colony,<br /> Chennai TN-600051, India
                </li>
                <li className="list-values">
                  <FontAwesomeIcon icon={faPhoneAlt} className="icon-padding" />
                  Call us at <br />USA: +1 (201) 203-5406 <br />India: +91
                  44-25555850
                </li>
                <li className="list-values">
                  <FontAwesomeIcon icon={faFax} className="icon-padding" />
                  +1 (201) 203-5402
                </li>
                <li className="list-values">
                  <FontAwesomeIcon icon={faEnvelope} className="icon-padding" />
                  info@brainhritsolutions.com
                </li>
                <li className="list-values">
                  <FontAwesomeIcon
                    icon={faGlobeAmericas}
                    className="icon-padding"
                  />www.brainwavesolutions.com
                </li>
              </ul>
            </Col>
            <Col className="contact-us-col">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Row className="form-row">
                    <Col className="form-col">
                      <Form.Control placeholder="First Name" />
                    </Col>
                    <Col className="form-col">
                      <Form.Control placeholder="Last Name" />
                    </Col>
                  </Row>
                  <Row className="form-row">
                    <Form.Control placeholder="Contact No" />
                  </Row>
                  <Row className="form-row">
                    <Form.Control type="email" placeholder="Email Address" />
                  </Row>
                  <Row className="form-row">
                    <Form.Control type="textarea" placeholder="Your Message" />
                  </Row>

                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
        <ResponsiveEmbed className="brainhr-map-block" aspectRatio="21by9">
          <embed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.939319255831!2d-74.33099744897399!3d40.56501725442996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b662198e7da7%3A0xd8e151beaac19386!2sBrainHR+IT+Solutions!5e0!3m2!1sen!2sus!4v1511831902926" />
        </ResponsiveEmbed>
      </div>
    );
  }
}

export default ContactUs;
