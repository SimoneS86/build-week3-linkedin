import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const JobExperiences = (userId) => {
  const [experiences, setExperiences] = useState(null);
  const endpoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
  const fetchOpt = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDFjMTE4NmE4NzAwMTQzODY3YzciLCJpYXQiOjE2ODE3MTk3NDUsImV4cCI6MTY4MjkyOTM0NX0.1Tn5npc1g9BA27ycQpbJRwnJsC-4qnA5lcoubLF6Br0",
    },
  };

  useEffect(() => {
    getExperiences();
  }, []);

  const getExperiences = async () => {
    try {
      const resp = await fetch(endpoint, fetchOpt);
      if (resp.ok) {
        const dataExperiences = await resp.json();
        console.log(dataExperiences);
        setExperiences(dataExperiences);
      } else {
        alert("Errore qualcosa è andato storto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setExperience = async () => {
    try {
      const resp = await fetch(endpoint, {
        method: "put",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDFjMTE4NmE4NzAwMTQzODY3YzciLCJpYXQiOjE2ODE3MTk3NDUsImV4cCI6MTY4MjkyOTM0NX0.1Tn5npc1g9BA27ycQpbJRwnJsC-4qnA5lcoubLF6Br0",
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <div>
        <Card.Title>Esperienza</Card.Title>
        <div>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus"
              viewBox="0 0 16 16"
              onClick=""
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </Link>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-fill"
              viewBox="0 0 16 16"
              onclick=""
            >
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg>
          </Link>
        </div>
      </div>
      {experiences.map((experience, i) =>
      <Card.Body key={i}>
        <div className="d-flex">
          <Card.Img src={experience.image} style={{ width: 10, heigth: 10 }} />
          <div>
            <h6>{experience.company}</h6>
            <p>2 anni</p>
          </div>
        </div>
        <ul>
            <li>
                <h5>{experience.role}</h5>
                <p>{experience.startDate}-{experience.endDate} x anni</p>
                <p>{experience.description}</p>
            </li>
        </ul>
      </Card.Body>
      )}
    </Card>
  )
}

export default JobExperiences
