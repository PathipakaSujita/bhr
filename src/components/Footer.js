import React, { Component } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {
    return (
      <div className="brainhr-footer-block">
        <Navbar>
          <Container>
            <Row>
              <Col>
                <Nav className="footer-link">
                  <Nav.Link className="footer-options" href="#services">
                    SERVICES
                  </Nav.Link>
                  <Nav.Link className="footer-options" href="#aboutus">
                    COMPANY
                  </Nav.Link>
                  <Nav.Link className="footer-options" href="#careers">
                    CAREERS
                  </Nav.Link>
                  <Nav.Link className="footer-options" href="#contactus">
                    CONTACT US
                  </Nav.Link>
                </Nav>
              </Col>
              <Col>
                <Nav className="footer-link-media">
                  <Nav.Link className="footer-media" href="#services">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="icon-padding"
                    />
                  </Nav.Link>

                  <Nav.Link className="footer-media" href="#aboutus">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="icon-padding"
                    />
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Container>
        </Navbar>
        <div>
          <h3 className="footer-note">
            BrainHR IT Solutions © 2017 - All Rights Reserved
          </h3>
        </div>
      </div>
    );
  }
}

export default Footer;
