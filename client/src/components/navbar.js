import React from "react";
import { Link } from "react-router-dom";
// import "../styles/navbar.css";
// import '../App.css';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <div>
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 text-center">
            <a className="h1 blog-header-logo text-dark" href="/">
              GG
            </a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center"></div>
        </div>
      </header>
      <div className="nav-scroller py-1 mb-2">
        <nav>
          <ul className="nav d-flex justify-content-between">
            <li className={currentPage === "Projects" ? "active" : ""}>
              <Link to="/rock-paper-scissors" className="p-2 ">
                Rock Paper Scissors
              </Link>
            </li>
            <li className={currentPage === "Resume" ? "active" : ""}>
              <Link to="/tic-tac-toe" className="p-2 ">
                Tic Tac Toe
              </Link>
            </li>
            <li className={currentPage === "Artwork" ? "active" : ""}>
              <Link to="/connect-four" className="p-2 ">
                Connect Four
              </Link>
            </li>
            <li className={currentPage === "Contact" ? "active" : ""}>
              <Link to="/contact" className="p-2 ">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
