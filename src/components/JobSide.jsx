import { Card, Button } from "react-bootstrap";
import bel from "../assets/icons/notifications.svg";
import item from "../assets/icons/items.svg";

function JobSide() {
  return (
    <>
      <Card className="mt-3">
        <Card.Body>
          <Card.Text className="text-secondary fw-bold">
            {" "}
            <img src={item} alt="" className="nav-menu-icon me-1" />
            Le mie offerte di lavoro{" "}
          </Card.Text>
          <Card.Text className="text-secondary fw-bold">
            {" "}
            <img src={bel} alt="" className="nav-menu-icon  " /> Avvisi Offerte di lavoro
          </Card.Text>
          <Card.Text className="d-flex align-items-center ms-3">Indicazioni per chi cerca lavoro</Card.Text>
          <Card.Text className="d-flex align-items-center ms-3">Impostazioni candidatura</Card.Text>
        </Card.Body>
      </Card>
      <Button variant="outline-primary" className="text-primary w-100">
        {" "}
        Pubblica offerta gratuita
      </Button>
    </>
  );
}

export default JobSide;
