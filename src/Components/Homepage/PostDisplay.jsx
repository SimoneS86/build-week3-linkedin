import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction } from "../../redux/actions";
import img from "../../assets/image/sidebar.png";
import EditPost from "./EditPost";
import like from "../../assets/icons/like.svg";
import comment from "../../assets/icons/chat.svg";
import repost from "../../assets/icons/share.svg";
import share from "../../assets/icons/Send 2.svg";

const PostDisplay = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const profile = useSelector(state => state.profile.content);
  const dispatch = useDispatch();

  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  useEffect(() => {
    dispatch(getPostsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const posts = useSelector(state => state.posts.content);

  console.log(posts);

  return (
    <>
      {selectedPost && (
        <>
          <EditPost selectedPost={selectedPost} showEdit={showEdit} handleCloseEdit={handleCloseEdit} />
        </>
      )}

      {posts.slice(0, 20).map(post => (
        <Card className="bg-white text-dark mt-3 position-relative" key={post._id}>
          {posts.length > 0 && post && post.user && (
            <CardHeader className="d-flex gap-2">
              {profile && post.user._id && post.user._id === profile._id && (
                <Button
                  style={{ right: "10px", top: "10px" }}
                  variant="outline-secondary border-0 py-1 px-2 rounded-circle position-absolute text-dark"
                  onClick={() => {
                    console.log("Post:" + post);
                    setSelectedPost(post);
                    handleShowEdit();
                  }}
                >
                  Modifica
                </Button>
              )}
              <div>
                <img
                  className="border border-dark border-2 rounded-circle"
                  src={post.user.image ? post.user.image : img}
                  alt="avatar"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <Card.Text className="mb-0" style={{ fontSize: "14px" }}>
                  {post.user.name} {post.user.surname}
                </Card.Text>
                <Card.Text className="text-muted mb-0" style={{ fontSize: "12px" }}>
                  {post.user.title}
                </Card.Text>
                <Card.Text className="text-muted mb-0" style={{ fontSize: "12px" }}>
                  {post.createdAt}
                </Card.Text>
              </div>
            </CardHeader>
          )}
          <Card.Body>
            <Card.Text>{post.text}</Card.Text>
            {posts.length > 0 && post && post.image && (
              <img src={post.image} width={"100%"} height={"300px"} alt="postImage" />
            )}
          </Card.Body>
          <div style={{ marginBlockStart: "40px" }}>
            <div className="like-box-feed wrapper my-1  fw-bold mx-3">
              <button
                aria-label="Add a photo"
                className="d-flex align-items-center justify-content-center share-box-btn  py-2 px-1 my-1 width-hover"
              >
                <img src={like} alt="" />
                <span className="share-box-btn-text " style={{ marginLeft: 13 }}>
                  Like
                </span>
              </button>
              <button
                aria-label="Add a video"
                className="d-flex align-items-center justify-content-center share-box-btn py-2 px-1 my-1 width-hover"
              >
                <img src={comment} alt="" />
                <span className="share-box-btn-text " style={{ marginLeft: 13 }}>
                  Comment
                </span>
              </button>
              <button
                aria-label="Create an event"
                className="d-flex align-items-center  justify-content-center share-box-btn py-2 px-1 my-1 width-hover"
              >
                <img src={repost} alt="" />
                <span className="share-box-feed-entry-toolbar__item-text " style={{ marginLeft: 13 }}>
                  Repost
                </span>
              </button>
              <button
                aria-label="Write an article on LinkedIn"
                className="d-flex align-items-center justify-content-center share-box-btn py-2 px-1 my-1 width-hover"
              >
                <img src={share} alt="" />
                <span className="share-box-feed-entry-toolbar__item-text  " style={{ marginLeft: 13 }}>
                  Send
                </span>
              </button>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default PostDisplay;