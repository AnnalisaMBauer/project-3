import React from 'react';
// import "../styles/navbar.css";
// import '../App.css';

function NavBar({ currentPage, handlePageChange }) {
    return(
       <div>
        <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            {/* <a className="" href="#subscribe" onClick={() => handlePageChange("Subscribe")}>Subscribe</a> */}
          </div>
          <div className="col-4 text-center">
            <a className="h1 blog-header-logo text-dark" href="/">Geek Games</a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            {/* <a className="" href="#search" aria-label="Search" onClick={() => handlePageChange("Search")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
            </a>
            <a className="btn btn-sm btn-outline-secondary" href="#signUp" onClick={() => handlePageChange("SignUp")}>Sign up</a> */}
          </div>
        </div>
        </header>
        <div className="nav-scroller py-1 mb-2">
        
            <nav>
            <ul className="nav d-flex justify-content-between">
                <li className={currentPage === "Projects" ? "active" : ""}>
                    <a href="#rockPaperScissors" onClick={() => handlePageChange("RockPaperScissors")} className="p-2 ">Rock Paper Scissors</a>
                </li>
                <li className={currentPage === "Resume" ? "active" : ""}>
                    <a href="#ticTacToe" onClick={() => handlePageChange("TicTacToe")} className="p-2 ">Tic Tac Toe</a>
                </li>
                <li className={currentPage === "Artwork" ? "active" : ""}>
                    <a href="#connectFour" onClick={() => handlePageChange("ConnectFour")}className="p-2 ">Connect Four</a>
                </li>
                <li className={currentPage === "Contact" ? "active" : ""}>
                    <a href="#contact" onClick={() => handlePageChange("Contact")}className="p-2 ">Contact</a>
                </li>
            </ul>
            </nav>
        </div>
    </div>
    )
}

export default NavBar;