import WritePost from "./WritePost";
import PostsDisplay from "./PostsDisplay";

const MainPostsContainer = () => {
  return (
    <>
      <WritePost />
      <div className="d-flex align-items-center justify-content-between">
        <hr className="w-75"></hr>
        <span className="mx-2">
          Sort by: <span className="fw-bold">Main</span>
        </span>
      </div>
      <PostsDisplay />
    </>
  );
};

export default MainPostsContainer;
