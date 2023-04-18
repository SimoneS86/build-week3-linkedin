import { Button, Card } from "react-bootstrap";

const Biografia = () => {
  return (
    <>
      <Card className="mt-3 mb-3 bg-dark text-light">
        <Card.Body className="position-relative">
          <Button style={{ right: "0px", top: "0px" }} variant="outline-secondary border-0 py-1 px-2 position-absolute">
            Modifica
          </Button>
          <Card.Title className="mb-2 fs-4">Informazioni</Card.Title>
          <Card.Text className="mb-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero similique hic quo itaque quasi provident
            optio deserunt omnis aut. Voluptates quasi tenetur provident illo neque nisi veritatis magnam consequatur
            quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate reiciendis natus iure quisquam
            beatae. Totam quia ratione sapiente ex, sequi velit cupiditate explicabo assumenda eius quos et itaque.
            Veniam, aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus perferendis eaque quo aut
            ipsum et doloremque iusto in nulla voluptate provident eos, esse, amet accusamus suscipit. Labore, sit
            distinctio. Incidunt?
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Biografia;
