import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <div style={style1}>
      <header className="blog-header ">
        <a style={logo} href="/">
          GG
        </a>
        <div className="col-4 d-flex justify-content-end align-items-center"></div>
      </header>
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
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
