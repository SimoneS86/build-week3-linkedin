import { Button, Modal, Form } from "react-bootstrap"
import { useState } from 'react'

const AddExperience = (prop) => {
  const endpoint = `https://striveschool-api.herokuapp.com/api/profile/`+ prop.prop +`/experiences`

  const [newExperience, setNewExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: ""
  });
  const handleChange = (propertyName, propertyValue) => {
    setNewExperience({
      ...newExperience,
      [propertyName]: propertyValue,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const resp = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMTMyMDIyYTZhYjAwMTQxYTg1NjciLCJpYXQiOjE2ODE3MjQxOTIsImV4cCI6MTY4MjkzMzc5Mn0.x8dPST_iOah2_5aT7ZuitZWbm0q-dOuBjsrQ8N4_VJI"
        },
        body: JSON.stringify(newExperience)
      });
      if (resp.ok) {
        setNewExperience({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: ""
        });
      } else {
        console.log(newExperience)
        alert("Something has gone wrong");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ display: "block", position: "initial" }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi esperienza</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Qualifica*</Form.Label>
              <Form.Control type='text' value={newExperience.role} placeholder="Es.: Sales Manager" onChange={e => {
                  handleChange("role", e.target.value);
                }}></Form.Control>
              <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Descrizione</Form.Label>
              <Form.Control as='textarea' rows={5} value={newExperience.description} onChange={e => {
                  handleChange("description", e.target.value);
                }}></Form.Control>
              <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Nome azienda*</Form.Label>
              <Form.Control type='text' value={newExperience.company} placeholder="Es.: Reliance Industries" onChange={e => {
                  handleChange("company", e.target.value);
                }}></Form.Control>
              <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Località</Form.Label>
              <Form.Control type='text' value={newExperience.area} placeholder="Es.: Bangalore, India" onChange={e => {
                  handleChange("area", e.target.value);
                }}></Form.Control>
              <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Data di inizio</Form.Label>
              <Form.Control type="datetime-local" value={newExperience.startDate} onChange={e => {
                  handleChange("startDate", e.target.value);
                }}></Form.Control>
              <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Data di fine</Form.Label>
              <Form.Control type="datetime-local" value={newExperience.endDate} onChange={e => {
                  handleChange("endDate", e.target.value);
                }}></Form.Control>
              <Form.Text></Form.Text>
            </Form.Group>
          <Button variant="primary" type='submit'>Add experience</Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default AddExperience;