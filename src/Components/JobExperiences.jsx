import { useEffect, useState } from "react";
import { Card, Container, Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {getExperiencesAction} from "../redux/actions"
import { useParams } from "react-router-dom";
import { removeFromExperiencesAction } from "../redux/actions";

const JobExperiences = (prop) => {
    const experiences = useSelector((state) => state.experiences.content)
    const dispatch = useDispatch();
    const params = useParams();
    const [showNewModal, setShowNewModal] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [newExperience, setNewExperience] = useState({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: ""
    });

    const endpoint = 'https://striveschool-api.herokuapp.com/api/profile/643d01c1186a8700143867c7' + prop.prop +'/experiences/';

    const openNewModal = () => {
      setShowNewModal(true)
    }
  
    const closeNewModal = () => {
      setShowNewModal(false)
    }

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


  const handleNewSubmit = async e => {
    e.preventDefault();

    try {
      const resp = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDFjMTE4NmE4NzAwMTQzODY3YzciLCJpYXQiOjE2ODE3MTk3NDUsImV4cCI6MTY4MjkyOTM0NX0.1Tn5npc1g9BA27ycQpbJRwnJsC-4qnA5lcoubLF6Br0"
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

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/643d01c1186a8700143867c7/experiences/" + newExperience._id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDFjMTE4NmE4NzAwMTQzODY3YzciLCJpYXQiOjE2ODE3MTk3NDUsImV4cCI6MTY4MjkyOTM0NX0.1Tn5npc1g9BA27ycQpbJRwnJsC-4qnA5lcoubLF6Br0"
        },
        body: JSON.stringify(newExperience)
      });
      if (resp.ok) {
        const data = resp.json()
        setNewExperience(data)
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
          <button className='border border-0' onClick={openNewModal}>
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
      <Modal show={showNewModal} onHide={closeNewModal}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi esperienza</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleNewSubmit}>
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
          <Button variant="primary" type='submit' onClick={closeNewModal}>Add experience</Button>
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
            <p>{experience.area}</p>
          </div>
        </div>
        <button className='border border-0 bg-white' onClick={() => {openModal(); setNewExperience(experience)}}>
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
          </button>
          
        </div>
        <ul>
            <li>
                <h5>{experience.role}</h5>
                <p>{experience.startDate}-{experience.endDate} x anni</p>
                <p>{experience.description}</p>
            </li>
        </ul>
        <hr className='border border-dark'/>
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
          <Button variant="primary" type='submit' onClick={closeModal}>Modify experience</Button>
          <Button variant="primary" onClick={() =>{ closeModal(); dispatch(removeFromExperiencesAction(newExperience._id))}}>Remove experience</Button>
          </Form>
        </Modal.Body>
      </Modal>
      </Card.Body>
      )
      )}
    </Card>
    
    </Container>
  )
}

export default JobExperiences