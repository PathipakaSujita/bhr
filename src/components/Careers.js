import React, { useState } from 'react';
import { Container, Modal, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap.min.js';

function Careers() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="careers-div" id="careers">
      <h2 className="headline"> Careers </h2>
      <Container>
        <Row xs={1} sm={1} md={2}>
          <Col>
            <div className="career-div" onClick={handleShow}>
              Quality Assurance Analyst<br /> Iselin, NJ<br /> Date: 31/11/2020
            </div>
          </Col>
          <Col>
            <div className="career-div" onClick={handleShow}>
              Sr Quality Assurance Analyst <br /> Iselin, NJ<br /> Date:
              31/11/2020
            </div>
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Job Requirements</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Modal.Title>Quality Assurance Analyst </Modal.Title>
            Iselin, New Jersey, United States
            <br />
            Brain HR IT Solutions is looking for a talented QA Analyst. The QA
            Analyst is responsible for performing testing activities based on
            business specifications
            <Modal.Title>Experience</Modal.Title>
            <ul>
              <li>
                Bachelor’s Degree or Foreign Equivalent in Computer Science or
                Engineering
              </li>
              <li>
                6+ months of experience in the job offered or related field
              </li>
              <li>
                Job requires travel and/or relocation to various unanticipated
                client sites in the U.S
              </li>
            </ul>
            <Modal.Title>Responsibilities</Modal.Title>
            <ul>
              <li>
                Design, develop and create test requirements and test scenarios
                based on business specifications
              </li>
              <li>
                Analyze functional requirements and prepare UI, Integration and
                Automation test plans
              </li>
              <li>
                Engage in functional and regression testing and all phases of
                Software Development Life Cycle (SDLC)
              </li>
              <li>
                Develop automation test scripts and engage in enhancement of
                customized test automation framework using Java, Selenium,
                JavaScript and Jest for applications
              </li>
              <li>Identify test requirements from specifications</li>
              <li>
                Develop, document and maintain test case and other test
                artifacts such as test data, data validation and automated test
                scripts
              </li>
              <li>
                Execute automated test scripts and document and resolve defects
              </li>
              <li>
                Execute Unit test Scripts and generate Test Coverage summary.
              </li>
            </ul>
            <b>
              Send resume to Brain HR IT Solutions Inc., Attn: HR Department, 33
              Wood Avenue South, Suite 455, Iselin, NJ – 08830.
            </b>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <b className="career-subtext">
          Excited to work with us... but don’t see your position listed? Let us
          know how you stand out from the crowd
        </b>
      </Container>
    </div>
  );
}

export default Careers;
