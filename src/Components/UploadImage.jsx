import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { getProfileAction } from "../redux/actions";
import { useDispatch } from "react-redux";

const UploadImage = ({ showImg, handleCloseImg, data, endpoint, username }) => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const uploadImg = async e => {
    e.preventDefault();

    try {
      if (!image) {
        alert("Please select an image to upload");
        return;
      }

      const formData = new FormData();
      formData.append(data, image);
      formData.append("username", username);

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYjVhNWZjYTEyOTAwMTQ0MGMxMzkiLCJpYXQiOjE2ODE4MzEzMzMsImV4cCI6MTY4MzA0MDkzM30.pvZfvfFjc_HrXl2dCYImrEJra1UTSglnrOIwLpsuPnk",
        },
      });

      if (response.ok) {
        dispatch(getProfileAction());
        handleCloseImg();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Modal show={showImg} onHide={handleCloseImg} className="text-white">
      <Modal.Header className="bg-white text-dark" closeButton>
        <Modal.Title>Aggiungi immagine</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <Form onSubmit={uploadImg}>
          <Form.Group className="mb-3" controlId="upload">
            <Form.Label>Carica immagine</Form.Label>
            <Form.Control type="file" autoFocus required onChange={e => setImage(e.target.files[0])} />
            <Button className="mt-3" variant="primary" type="submit">
              Carica
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default UploadImage;
