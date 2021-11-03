import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Modal, Tab } from "react-bootstrap";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Auth from "../utils/auth";

// import "../styles/navbar.css";
// import '../App.css';

const style1 = {
  borderRadius: "25px",
  margin: "1.5em 0em 2em 0em",
  display: "flex",
  backgroundColor: "rgb(206 216 223 / 50%)",
  alignItems: "center",
  justifyContent: "space-between",
};
const logo = {
  color: "white",
  fontSize: "2.5em",
  paddingLeft: "1.5em",
  marginBottom: ".5rem",
  fontWeight: "500",
  lineHeight: "1.2",
};
const nav = {
  paddingRight: "4em",
  display: "flex",
  listStyle: "none",
  margin: "0",
};

function NavBar({ currentPage, handlePageChange }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div style={style1}>
      <header className="blog-header ">
        <a style={logo} href="/">
          GG
        </a>
        <div className="col-4 d-flex justify-content-end align-items-center"></div>
      </header>
      <div className="nav-scroller py-1 mb-2">
        <nav>
          <ul style={nav}>
            <li className={currentPage === "Projects" ? "active" : ""}>
              <Link to="/rock-paper-scissors" className="p-2 text-white">
                Rock Paper Scissors
              </Link>
            </li>
            <li className={currentPage === "Resume" ? "active" : ""}>
              <Link to="/tic-tac-toe" className="p-2 text-white">
                Tic Tac Toe
              </Link>
            </li>
            <li className={currentPage === "Artwork" ? "active" : ""}>
              <Link to="/connect-four" className="p-2 text-white">
                Connect Four
              </Link>
            </li>
            <li className={currentPage === "Contact" ? "active" : ""}>
              <Link to="/contact" className="p-2 text-white">
                Contact
              </Link>
            </li>
            <Nav className="ml-auto">
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>
                  Login/Sign Up
                </Nav.Link>
              )}
            </Nav>
          </ul>
          <Modal
            size="lg"
            show={showModal}
            onHide={() => setShowModal(false)}
            aria-labelledby="signup-modal"
          >
            {/* tab container to do either signup or login component */}
            <Tab.Container defaultActiveKey="login">
              <Modal.Header closeButton>
                <Modal.Title id="signup-modal">
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Tab.Content>
                  <Tab.Pane eventKey="login">
                    <LoginForm handleModalClose={() => setShowModal(false)} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="signup">
                    <SignUpForm handleModalClose={() => setShowModal(false)} />
                  </Tab.Pane>
                </Tab.Content>
              </Modal.Body>
            </Tab.Container>
          </Modal>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
