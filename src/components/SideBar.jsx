import { Card, Button, Row, Col, Image } from "react-bootstrap";
import sidebarImg from "../assets/image/sidebar.png";
import logo from "../assets/icons/Logo-nav.svg";
import { IoIosHelpCircle } from "react-icons/io";
import { HiUserAdd } from "react-icons/hi";

function Sidebar() {
  return (
    <>
      <Card className="mt-3">
        <Card.Body>
          <Card.Text className="text-secondary ">
            Modifica il tuo profilo pubblico e l'URL{" "}
            <IoIosHelpCircle className="fw-bold fs-3" style={{ marginLeft: 30 }} />
          </Card.Text>
          <hr />
          <Card.Text className="text-secondary ">
            Aggiungi il tuo profilo in un'altra lingua{" "}
            <IoIosHelpCircle className="fw-bold fs-3" style={{ marginLeft: 23.5 }} />
          </Card.Text>
          <Card.Text className="d-flex align-items-center"></Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-2 text-center">
        <img src={sidebarImg} alt="sidebarImg" />
      </Card>

      <Card className="mt-2">
        <Card.Body>
          <Card.Text className="text-dark ">
            {" "}
            <strong> Persone che potresti conoscere </strong> <br />
            Dalla tua scuola o università
          </Card.Text>
          <Row>
            <Col md={3}>
              <Image src="https://via.placeholder.com/50x50.png?text=Placeholder" roundedCircle />
            </Col>
            <Col md={9}>
              <h5>Simone Sensini</h5>
              <p>Junior Full-Stack-Developer</p>
              <Button className="mb-3" variant="outline-secondary  ">
                <HiUserAdd /> Collegati
              </Button>
            </Col>

            <hr />

            <Col md={3} className="mt-3">
              <Image src="https://via.placeholder.com/50x50.png?text=Placeholder" roundedCircle />
            </Col>
            <Col md={9}>
              <h5>Salvatore Mercurio</h5>
              <p>Junior Full-Stack-Developer</p>
              <Button className="mb-3" variant="outline-secondary  ">
                <HiUserAdd /> Collegati
              </Button>
            </Col>
            <Button variant="outline-secondary" className=" fw-bold mt-3 mb-3">
              Viasualizza altro
            </Button>

            <Col md={3} className="mt-3">
              <Image src="https://via.placeholder.com/50x50.png?text=Placeholder" roundedCircle />
            </Col>
            <Col md={9}>
              <h5>Giuseppe Canzoneri</h5>
              <p>Junior Full-Stack-Developer</p>
              <Button className="mb-3" variant="outline-secondary  ">
                <HiUserAdd /> Collegati
              </Button>
            </Col>
            <Button variant="outline-secondary" className=" fw-bold mt-3">
              Viasualizza altro
            </Button>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mt-2">
        <Card.Body>
          <Card.Text className="fw-bold text-secondary">
            {" "}
            <Image src={logo} style={{ height: 30, width: 20 }} />
            IN LEARNING
          </Card.Text>
          <Card.Text className="text-dark "> Aggiungi Nuove competenze con questi corsi, gratuiti per 24 ore</Card.Text>
          <Row>
            <Col md={3}>
              <Image src="https://via.placeholder.com/70x70.png?text=Placeholder" />
            </Col>
            <Col md={9}>
              <h5>Fondamenti di programmazione...</h5>
            </Col>
          </Row>
          <hr />

          <Row>
            <Col md={3}>
              <Image src="https://via.placeholder.com/70x70.png?text=Placeholder" />
            </Col>
            <Col md={9}>
              <h5>Impara Python</h5>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col md={3}>
              <Image src="https://via.placeholder.com/70x70.png?text=Placeholder" />
            </Col>
            <Col md={9}>
              <h5>Python per non programmatori</h5>
            </Col>
            <Button variant="outline-secondary" className=" fw-bold mt-3">
              Viasualizza i miei suggerimenti
            </Button>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default Sidebar;
