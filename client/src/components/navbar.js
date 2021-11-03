import React from "react";
// import "../styles/navbar.css";
// import '../App.css';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <div>
      <header className="">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 text-center">
            <a className="h1 blog-header-logo text-dark" href="/">
              GG
            </a>
          </div>
        </div>
      </header>
      <div className="">
        <nav>
          <ul className="nav d-flex justify-content-between">
            <li className={currentPage === "Projects" ? "active" : ""}>
              <a
                href="#rockPaperScissors"
                onClick={() => handlePageChange("RockPaperScissors")}
                className="p-2 "
              >
                Rock Paper Scissors
              </a>
            </li>
            <li className={currentPage === "Resume" ? "active" : ""}>
              <a
                href="#ticTacToe"
                onClick={() => handlePageChange("TicTacToe")}
                className="p-2 "
              >
                Tic Tac Toe
              </a>
            </li>
            <li className={currentPage === "Artwork" ? "active" : ""}>
              <a
                href="#connectFour"
                onClick={() => handlePageChange("ConnectFour")}
                className="p-2 "
              >
                Connect Four
              </a>
            </li>
            <li className={currentPage === "Contact" ? "active" : ""}>
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className="p-2 "
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
