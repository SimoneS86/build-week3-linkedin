import { Container, Form, FormControl, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./TopNav.css";
import logo from "../assets/icons/Logo-nav.svg";
import home from "../assets/icons/home.svg";
import mynetwork from "../assets/icons/people.svg";
import jobs from "../assets/icons/work.svg";
import message from "../assets/icons/messages.svg";
import notification from "../assets/icons/notifications.svg";
import more from "../assets/icons/more.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TopNav = () => {
  const profile = useSelector(state => state.profile.content);

  return (
    <Navbar expand="lg" className="navbar-main">
      <Container className="px-0">
        <div className="d-flex justify-content-between" style={{ width: "100%", paddingInline: "15px" }}>
          <div className="logo-on-collapse d-flex align-items-center ">
            <div className="logo-mini">
              <img src={logo} alt="" />
            </div>

            <Form className="search-position">
              <FormControl type="text" placeholder="Search" className="mr-sm-2 search-input" />
            </Form>
          </div>

          <div className="menu-on-collapse">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="elapsed-menu mr-auto d-flex align-items-center">
                <Nav.Item className="p-0">
                  <div
                    className=" d-flex flex-column align-items-center nav-icon menu-size "
                    style={{ marginBottom: 15 }}
                  >
                    <div>
                      <img src={home} alt="" className="nav-menu-icon" />
                    </div>
                    <Link to="/home" className="text-dark text-decoration-none">
                      Home
                    </Link>
                  </div>
                </Nav.Item>
                <Nav.Link className="p-0">
                  <div className=" d-flex flex-column align-items-center nav-icon menu-size mb-0">
                    <div>
                      <img src={mynetwork} alt="" className="nav-menu-icon" />
                    </div>
                    <p className=" nav-text">Rete</p>
                  </div>
                </Nav.Link>
                <Nav className="p-0">
                  <div className=" d-flex flex-column align-items-center nav-icon menu-size">
                    <div>
                      <img src={jobs} alt="" className="nav-menu-icon" />
                    </div>
                    <Link to="/jobs" className=" nav-text text-decoration-none mb-3">
                      Lavoro
                    </Link>
                  </div>
                </Nav>
                <Nav.Link className="p-0">
                  <div className=" d-flex flex-column align-items-center nav-icon menu-size">
                    <div>
                      <img src={message} alt="" className="nav-menu-icon" />
                    </div>
                    <p className=" nav-text">Messagistica</p>
                  </div>
                </Nav.Link>
                <Nav.Link className="p-0">
                  <div className=" d-flex flex-column align-items-center nav-icon menu-size">
                    <div>
                      <img src={notification} alt="" className="nav-menu-icon" />
                    </div>
                    <p className=" nav-text">Notifiche</p>
                  </div>
                </Nav.Link>

                <div className="profile-drop-down menu-size ">
                  <img src={profile && profile.image} alt="" className="profile-icon" />
                  <NavDropdown title="Me" id="basic-nav-dropdown" className="profile-name mt-3">
                    <NavDropdown.Item className="dropdown-main-action d-flex align-items-center ">
                      <spa>
                        <img src={profile && profile.image} alt="" className="profile-icon2 me-3" />
                      </spa>
                      <div style={{ color: "black" }}>
                        <p>{profile && profile.name}</p>
                        <p>{profile && profile.surname}</p>
                      </div>
                    </NavDropdown.Item>
                    <div
                      href="#action/3.1.2"
                      className="dropdown-secondary-action d-flex justify-content-center mt-2 mb-2"
                    >
                      <Link to="/" className="btn nav-view-profile-btn ">
                        View Profile
                      </Link>
                    </div>
                    <NavDropdown.Divider />
                    <div href="#action/3.2" className="dropdown-main-action  fw-bold ms-3">
                      Account
                    </div>
                    <NavDropdown.Item href="#action/3.2.1" className="dropdown-secondary-action ">
                      Try premium for free
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2.2" className="dropdown-secondary-action ">
                      Settings & Privacy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2.3" className="dropdown-secondary-action ">
                      Help
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2.4" className="dropdown-secondary-action ">
                      Language
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <div href="#action/3.3" className="dropdown-main-action  fw-bold ms-3">
                      Manage
                    </div>
                    <NavDropdown.Item href="#action/3.3.1" className="dropdown-secondary-action ">
                      Posts & Activity
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3.2" className="dropdown-secondary-action ">
                      Job Posting Account
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Sign Out</NavDropdown.Item>
                  </NavDropdown>
                </div>

                <div className="profile-drop-down menu-size work">
                  <img src={more} alt="" className="nav-menu-icon" />
                  <NavDropdown title="Work" id="basic-nav-dropdown " className="profile-name mt-3 "></NavDropdown>
                </div>
                <Nav.Link href="#premium" className="text-align-center ">
                  <p className="premium">Network Smarter,</p> <p className="premium">Try premium Free!</p>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default TopNav;
