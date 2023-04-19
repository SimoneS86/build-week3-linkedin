import { useEffect, useState } from "react";
import { Card, Container, Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {getExperiencesAction} from "../redux/actions"

const JobExperiences = (prop) => {
    const experiences = useSelector((state) => state.experiences.content)
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false)
    const [newExperience, setNewExperience] = useState({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: ""
    });

    const endpoint = `https://striveschool-api.herokuapp.com/api/profile/`+ prop.prop +`/experiences`;

    const openModal = () => {
      setShowModal(true)
    }
  
    const closeModal = () => {
      setShowModal(false)
    }
 
  useEffect(() => {
    dispatch(getExperiencesAction(prop));
  }, []);

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
    <Container>
    <Card>
      <div className="d-flex justify-content-between">
        <Card.Title><Link to="/profile/:userId/experiences">Esperienza</Link></Card.Title>
        <div>
          <button className='border border-0' onClick={openModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
      <Modal show={showModal} onHide={closeModal}>
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
          <Button variant="primary" type='submit' onClick={closeModal}>Add experience</Button>
          </Form>
        </Modal.Body>
      </Modal>
        </div>
      </div>
      {experiences && (
      experiences.map((experience, i) =>
      <Card.Body key={i}>
        <div className="d-flex justify-content-between">
        <div className="d-flex">
          <Card.Img src={experience.image} style={{ width: 10, heigth: 10 }} />
          <div>
            <h6>{experience.company}</h6>
            <p>2 anni</p>
          </div>
        </div>
        <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-pencil-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg>
          </Link>
        </div>
        <ul>
            <li>
                <h5>{experience.role}</h5>
                <p>{experience.startDate}-{experience.endDate} x anni</p>
                <p>{experience.description}</p>
            </li>
        </ul>
        <hr className='border border-dark'/>
      </Card.Body>
      ))}
    </Card>
    
    </Container>
  )
}

export default JobExperiences