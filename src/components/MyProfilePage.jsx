import { Card, Button, Row, Col, Container, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../redux/actions";
import Sidebar from "./SideBar";
import JobExperiences from "./JobExperiences";
import { useParams } from "react-router-dom";
import UploadImage from "./UploadImage";

const MyProfilePage = () => {
  const [showImg, setShowImg] = useState(false);
  const handleCloseImg = () => setShowImg(false);
  const handleShowImg = () => setShowImg(true);

  const profile = useSelector(state => state.profile.content);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params.userId) {
      dispatch(getProfileAction(params.userId));
    } else {
      dispatch(getProfileAction());
    }
  }, []);

  return (
    <>
      <Container className="px-5">
        <Row>
          <Col md={8}>
            <Card className="mt-3 bg-white text-dark position-relative border-3 mb-3">
              <UploadImage
                handleCloseImg={handleCloseImg}
                showImg={showImg}
                endpoint={`https://striveschool-api.herokuapp.com/api/profile/${profile._id}/picture`}
                data={"profile"}
                username={profile.username}
              />
              <Button
                style={{ right: "10px", top: "10px" }}
                variant="outline-secondary border-0 py-1 px-2  position-absolute"
              >
                modifica
              </Button>
              <Card.Img variant="top" src="https://picsum.photos/900/300" width={800} height={200} />
              <Card.Body className="position-relative mt-4">
                <img
                  style={{ bottom: "340px" }}
                  className="border border-dark border-5 rounded-circle position-absolute"
                  src={profile.image}
                  alt="avatar"
                  width={150}
                  height={150}
                />
                <Button
                  style={{ right: "10px", top: "0px" }}
                  variant="outline-secondary border-0 py-2 position-absolute"
                  onClick={handleShowImg}
                >
                  Modifica
                </Button>
                <Card.Title className="fs-4 mb-0">
                  {profile.name}&nbsp;{profile.surname}
                </Card.Title>
                <Card.Text className="fs-5 mb-0">{profile.title}</Card.Text>
                <Card.Text className="text-dark mb-0 text-decoration-none">
                  {profile.area} &nbsp;&middot; &nbsp;{profile.email}
                </Card.Text>
                <Card.Text className=" mb-0 text-decoration-none">33 collegamenti</Card.Text>
                <div className="d-flex pt-1 gap-2">
                  <Button style={{ backgroundColor: "#70b5f9" }} className="rounded-pill text-dark border-0">
                    Disponibile per
                  </Button>
                  <Button
                    style={{ color: "#70b5f9", border: "1px solid #70b5f9" }}
                    variant="outline-primary rounded-pill"
                  >
                    Aggiungi sezione del profilo
                  </Button>
                  <Button variant="outline-light rounded-pill">Altro</Button>
                </div>
                <div>
                  <Card style={{ backgroundColor: "hsl(211.3deg 17.04% 26.47%)" }} className="mt-3 bg-white border-0">
                    <Card.Body className="position-relative">
                      <Button
                        style={{ right: "0px", top: "0px" }}
                        variant="outline-secondary border-0 py-1 px-2  position-absolute"
                      >
                        modifica
                      </Button>
                      <Alert variant="primary" style={{ width: 400 }}>
                        <Card.Subtitle className="mb-0 text-dark">Disponibile a lavorare</Card.Subtitle>
                        <Card.Text className="mb-0 text-dark">Web developer JS- React</Card.Text>
                        <Button className="text-decoration-none">Mostra dettagli</Button>
                      </Alert>
                    </Card.Body>
                  </Card>
                </div>
              </Card.Body>
            </Card>
            <Card className="mt-3 mb-3 bg-white text-dark ">
              <Card.Body className="position-relative">
                <Button
                  style={{ right: "0px", top: "0px" }}
                  variant="outline-secondary border-0 py-1 px-2 position-absolute"
                >
                  Modifica
                </Button>
                <Card.Title className="mb-2 fs-4">Informazioni</Card.Title>
                <Card.Text className="mb-0">{profile.bio}</Card.Text>
              </Card.Body>
            </Card>
            <JobExperiences prop="643d132022a6ab00141a8567" />
          </Col>
          <Col md={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyProfilePage;
