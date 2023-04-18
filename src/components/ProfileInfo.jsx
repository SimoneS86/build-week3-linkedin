import { Button, Card } from "react-bootstrap";

const ProfileInfo = () => {
  return (
    <>
      <Card className="mt-3 bg-dark text-white position-relative border-0 mb-3">
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
            src={"https://via.placeholder.com/20x20.png?text=Placeholder"}
            alt="avatar"
            width={150}
            height={150}
          />
          <Button style={{ right: "10px", top: "0px" }} variant="outline-secondary border-0 py-2 position-absolute">
            Modifica
          </Button>
          <Card.Title className="fs-4 mb-0">Nome Cognome</Card.Title>
          <Card.Text className="fs-5 mb-0">Titolo</Card.Text>
          <Card.Text className="text-light mb-0 text-decoration-none">
            Luogo &middot; Informazioni di contatto
          </Card.Text>
          <Card.Text className=" mb-0 text-decoration-none">33 collegamenti</Card.Text>
          <div className="d-flex pt-1 gap-2">
            <Button style={{ backgroundColor: "#70b5f9" }} className="rounded-pill text-dark border-0">
              Disponibile per
            </Button>
            <Button style={{ color: "#70b5f9", border: "1px solid #70b5f9" }} variant="outline-primary rounded-pill">
              Aggiungi sezione del profilo
            </Button>
            <Button variant="outline-light rounded-pill">Altro</Button>
          </div>
          <div>
            <Card style={{ backgroundColor: "hsl(211.3deg 17.04% 26.47%)" }} className="mt-3">
              <Card.Body className="position-relative">
                <Button
                  style={{ right: "0px", top: "0px" }}
                  variant="outline-secondary border-0 py-1 px-2  position-absolute"
                >
                  modifica
                </Button>
                <Card.Subtitle className="mb-0">Disponibile a lavorare</Card.Subtitle>
                <Card.Text className="mb-0">Web developer JS- React</Card.Text>
                <Button className="text-decoration-none">Mostra dettagli</Button>
              </Card.Body>
            </Card>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProfileInfo;
