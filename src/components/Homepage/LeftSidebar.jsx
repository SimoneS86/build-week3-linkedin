import premium from "../../assets/icons/Premium.svg";
import items from "../../assets/icons/items.svg";
import hashtag from "../../assets/icons/hashtag.svg";
import { Col } from "react-bootstrap";

const LeftSidebar = props => {
  return (
    <>
      <Col className="left-side-col">
        <div className="left-profile-mini">
          <div className="profile-cover-mini">
            <img
              src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png"
              alt="profile_cover"
            />
            <div className="profile-picture-mini">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="ciao"
              />
            </div>
          </div>
          <div className="profile-text-area-mini">
            <div className="profile-text-mini">
              <p className="username-mini  fw-bold margin-0">Nome Cognome</p>
              <p className="user-role-mini ">Titolo</p>
            </div>
            <div className="profile-text-mini collapse-hide mt-1 align-items-start pl-2">
              <p className="username-mini  fw-bold margin-0 ">Fatti assumere più velocemente</p>
              <p className="user-role-mini  fw-bold d-flex align-items-center mt-1">
                <img src={premium} alt="" style={{ width: "20px" }} /> Upgrade your plan
              </p>
            </div>
          </div>
        </div>
        <div className="profile-text-mini2 collapse-hide  align-items-start pl-2 mt-5">
          <p className="user-role-mini  fw-bold d-flex align-items-center mt-1">
            <img src={items} alt="" style={{ width: "13px" }} /> I miei elementi
          </p>
        </div>

        <div className=" secondary-side-nav collapse-hide mt-3">
          <p className="mb-2  ">Recent</p>
          <div className="  fw-bold">
            <p className="mb-2 d-flex">
              <img src={hashtag} alt="" style={{ width: "12px" }} /> Recent
            </p>
            <p className="mb-2 d-flex">
              <img src={hashtag} alt="" style={{ width: "12px" }} /> Recent
            </p>
            <p className="mb-2 d-flex">
              <img src={hashtag} alt="" style={{ width: "12px" }} /> Recent
            </p>
            <p className="mb-2 d-flex">
              <img src={hashtag} alt="" style={{ width: "12px" }} /> Recent
            </p>
          </div>
        </div>
        <div className="profile-text-mini2 collapse-hide align-items-center">
          <p className="user-role-mini  fw-bold d-flex align-items-center mt-1">Discover more</p>
        </div>
      </Col>
    </>
  );
};

export default LeftSidebar;
