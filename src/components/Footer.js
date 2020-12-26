import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {
    return (
      <div className="brainhr-footer-block">
        <Navbar>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="footer-link">
              <Nav.Link className="footer-link" href="#services">
                SERVICES
              </Nav.Link>
              <Nav.Link className="footer-link" href="#aboutus">
                COMPANY
              </Nav.Link>
              <Nav.Link className="footer-link" href="#careers">
                CAREERS
              </Nav.Link>
              <Nav.Link className="footer-link" href="#contactus">
                CONTACT US
              </Nav.Link>
              <Nav.Link className="footer-link" href="#contactus">
                LOGIN
              </Nav.Link>
            </Nav>

            <Nav className="footer-social-media">
              <Nav.Link className="footer-link" href="#services">
                <a className="list-values" href="#services">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="icon-padding"
                  />
                </a>
              </Nav.Link>

              <Nav.Link className="footer-link" href="#aboutus">
                linkdin
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
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
