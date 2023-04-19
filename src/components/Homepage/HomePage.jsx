import MainPostsContainer from "./MainPostsContainer";
import { Col, Container, Row } from "react-bootstrap";
import LeftSidebar from "./LeftSidebar";
import Sidebar from "../SideBar";

const HomePage = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={2}>
            <LeftSidebar />
          </Col>
          <Col xs={6}>
            <MainPostsContainer />
          </Col>
          <Col xs={3}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
