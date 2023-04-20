import { Col, Container, Row, Button, Card } from "react-bootstrap";

import JobsList from "./JobsList";
import { FaSearch } from "react-icons/fa";
import JobSide from "./JobSide";

const Jobs = () => {
  return (
    <Container className="px-5">
      <Row>
        <Col lg={4}>
          <JobSide />
        </Col>
        <Col lg={8}>
          <Card className="mt-3 text-dark bg-white">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title>Ricerche di offerte di lavoro recenti</Card.Title>
                <Button variant="transparent border-0 py-1 px-2 rounded-circle"></Button>
              </div>
              <div>
                <Button variant="outline-primary rounded-pill mb-2 me-2">
                  <FaSearch className="me-2" />
                  Sviluppatore front-end
                </Button>
                <Button variant="outline-primary rounded-pill mb-2 me-2">
                  <FaSearch className="me-2" />
                  React Developer
                </Button>
                <Button variant="outline-primary rounded-pill mb-2 me-2">
                  <FaSearch className="me-2" />
                  Frontend Angular Engineer
                </Button>
                <Button variant="outline-primary rounded-pill mb-2 me-2">
                  <FaSearch className="me-2" />
                  Addetti macchine cnc
                </Button>
                <Button variant="outline-primary rounded-pill mb-2 me-2">
                  <FaSearch className="me-2" />
                  Test Specialist-Automation
                </Button>
              </div>
            </Card.Body>
          </Card>
          <JobsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Jobs;