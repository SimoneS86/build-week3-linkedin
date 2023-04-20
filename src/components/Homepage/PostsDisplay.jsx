import like from "../../assets/icons/like.svg";
import comment from "../../assets/icons/chat.svg";
import repost from "../../assets/icons/share.svg";
import share from "../../assets/icons/Send 2.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostsAction } from "../../redux/actions";

const PostsDisplay = () => {
  const posts = useSelector(state => state.posts.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  return (
    <div>
      {posts &&
        posts.map((post, i) => (
          <div key={i} className="mainContainerPost mb-3">
            <div className="d-flex align-items-center p-3">
              <div>
                <img
                  className="userPicturePost "
                  src="https://via.placeholder.com/50x50.png?text=Placeholder"
                  alt="profile-name"
                />
              </div>
              <div>
                <span className="fs-4 fw-bold " style={{ marginLeft: 13 }}>
                  {post.username}
                </span>
                <span className="fs-4 fw-bold " style={{ marginLeft: 13 }}></span>
                <div className="fs-5  " style={{ marginLeft: 13 }}>
                  Titolo
                </div>
              </div>
            </div>

            <div className="post-content p-3 fs-5">
              <p>{post.text}</p>
            </div>

            <div style={{ height: "500px" }}>
              <img
                src="https://picsum.photos/200"
                alt="random-pic"
                className="w-100"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

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
          </div>
        ))}
    </div>
  );
};

export default PostsDisplay;
