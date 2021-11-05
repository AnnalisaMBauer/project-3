import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Auth from "../utils/auth";

// import '../App.css';

const style1 = {
  borderRadius: "25px",
  margin: "1.5em 0em 1em 0em",
  display: "flex",
  backgroundColor: "rgb(206 216 223 / 50%)",
  alignItems: "center",
  justifyContent: "space-between",
  fontFamily: 'Orbitron',
};
const logo = {
  color: "white",
  fontSize: "3em",
  paddingLeft: ".5em",
  
};
const nav = {
  paddingRight: "1em",
  display: "flex",
  listStyle: "none",
  margin: "0",
  alignItems: "center",
  fontSize: "1.7em",
};
const Quixote = {
  width: '10%',
  marginRight: '1rem',
  marginBottom: '.5em',
  marginTop: '.5em',
}

function NavBar({ currentPage, handlePageChange }) {
  return (
    <div style={style1}>
      <header className="blog-header ">
        <a style={logo} href="/">
          <img src="./img/quixote.png" style={Quixote} />GG
        </a>
      </header>
        <div className="col-4 d-flex justify-content-end align-items-center">
      <div className="nav-scroller py-1 mb-2">
        <nav>
          <ul style={nav}>
            <li className={currentPage === "Contact" ? "active" : ""}>
              <Link to="/contact" className="m-5 text-white">
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
                <Link to="/login" className="p-2 text-white">
                  Login/Sign Up
                </Link>
              )}
            </Nav>
          </ul>
        </nav>
      </div>
      </div>
    </div>
  );
}

export default NavBar;
