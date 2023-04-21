/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { FaRegBookmark } from "react-icons/fa";
import foto from "../assets/image/sidebar.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getJobsAction } from "../redux/actions";

const JobsList = () => {
  const jobs = useSelector(state => state.job.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(jobs);
  }, []);
  return (
    <Card className="bg-white text-dark mt-3 position-relative">
      <CardHeader>
        <Card.Title className="mb-0">Consigliato per te</Card.Title>
        <Card.Text className="text-muted">Sulla base del tuo profilo e della cronologia e delle ricerche</Card.Text>
      </CardHeader>
      {jobs.length > 0 &&
        jobs.slice(0, 20).map(job => (
          <Card.Body className="pb-0">
            <div className="border-bottom border-secondary d-flex justify-content-between align-items-start pb-2">
              <div className="d-flex">
                <img style={{ cursor: "pointer" }} src={foto} alt="Jobs" width={48} height={48} className="me-3" />
                <div>
                  <Card.Title style={{ fontSize: "16px", color: "#81B4F5" }}>{job.title}</Card.Title>
                  <Card.Subtitle className="text-secondary" style={{ fontSize: "14px" }}>
                    {job.company_name}
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: "14px" }} className="text-muted mb-0">
                    {job.candidate_required_location}
                  </Card.Text>
                  <Card.Text style={{ fontSize: "12px" }} className="text-muted mb-0">
                    Pubblicato il: {job.publication_date}
                  </Card.Text>
                </div>
              </div>
              <Button style={{ right: "0px", top: "20px" }} variant="transparent border-0 py-1 px-2 rounded-circle">
                <FaRegBookmark className="text-white fs-5" />
              </Button>
            </div>
          </Card.Body>
        ))}
    </Card>
  );
};
export default JobsList;
