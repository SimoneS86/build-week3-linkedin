
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

const MyHomePage = () => {
    const [profile, setProfile] = useState(null)
    const endpoint = "https://striveschool-api.herokuapp.com/api/profile/5fc4af0bb708c200175de88e"
    const fetchOpt = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMTMyMDIyYTZhYjAwMTQxYTg1NjciLCJpYXQiOjE2ODE3MjQxOTIsImV4cCI6MTY4MjkzMzc5Mn0.x8dPST_iOah2_5aT7ZuitZWbm0q-dOuBjsrQ8N4_VJI",

        },
      };

    useEffect(() => {
        getProfile()
    },[] );
    

    const getProfile = async () => {
          try {
            const resp = await fetch(endpoint, fetchOpt);
            if (resp.ok) {
              const dataProfile = await resp.json();
              console.log(dataProfile)
              setProfile(dataProfile);
            } else {
              alert("Errore qualcosa è andato storto");
            }
          } catch (error) {
            console.log(error);
          }
        };

    return (
            <>
            {profile && (
              <Card>
                <Card.Img variant="top" src={profile.image} />
                <Card.Body>
                  <Card.Text>
                    {profile.name}.
                  </Card.Text>
                  <Card.Text>
                    {profile.surname}
                  </Card.Text>
                  <Card.Text>
                    {profile.title}
                  </Card.Text>
                  <Card.Text>
                    {profile.bio}
                  </Card.Text>
                </Card.Body>
              </Card>
              )}
            </>
    );
}
export default MyHomePage;