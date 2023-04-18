import { Col, Container, Row } from "react-bootstrap";
import ProfileInfo from "./ProfileInfo";
import Biografia from "./Biografia";
import Sidebar from "./SideBar";

const Profile = () => {
  return (
    <>
      <Container className="px-5">
        <Row>
          <Col md={8}>
            <ProfileInfo />
            <Biografia />
          </Col>
          <Col md={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
