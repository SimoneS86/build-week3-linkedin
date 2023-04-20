import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction } from "../../redux/actions";

const AddPostModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.content);
  const [post, setPost] = useState({
    text: "",
    image: "",
  });

  const addPost = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYjVhNWZjYTEyOTAwMTQ0MGMxMzkiLCJpYXQiOjE2ODE4MzEzMzMsImV4cCI6MTY4MzA0MDkzM30.pvZfvfFjc_HrXl2dCYImrEJra1UTSglnrOIwLpsuPnk",
        },
      });
      if (response.ok) {
        dispatch(getPostsAction());
        setPost({
          text: "",
        });
        handleClose();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} className="text-white">
      <Modal.Header className="bg-white text-dark" closeButton>
        <Modal.Title>Crea un post</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        {profile && (
          <div className="d-flex gap-2 align-items-center mb-2">
            <img
              className="border border-dark border-2 rounded-circle "
              src={profile.image}
              alt="avatar"
              width={48}
              height={48}
            />
            <p>
              {profile.name} {profile.surname}
            </p>
          </div>
        )}
        <Form onSubmit={addPost}>
          <Form.Group className="mb-3" controlId="description">
            <Form.Control
              as="textarea"
              className="bg-white border-0 p-0 text-dark"
              placeholder="Di che cosa vuoi parlare?"
              rows={3}
              required
              value={post.text}
              onChange={e => setPost({ ...post, text: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Control
              type="text"
              className="bg-white border-0 p-0 text-dark"
              placeholder="Inserisci un url di un immagine"
              value={post.image}
              onChange={e => setPost({ ...post, image: e.target.value })}
            />
          </Form.Group>
          <Button className="rounded-pill" variant="secondary" type="submit">
            Pubblica
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddPostModal;
