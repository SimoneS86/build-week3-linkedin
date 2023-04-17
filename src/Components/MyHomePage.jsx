
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../redux/actions";

const MyHomePage = (prop) => {
    const profile = useSelector((state) => state.profile.content)
    const dispatch = useDispatch();

    dispatch(getProfileAction(prop));
    
    return (
            <>
            {profile && (
              <Card>
                <Card.Img variant="top" src={profile.image} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              )}
            </>
    );
}
export default MyHomePage;