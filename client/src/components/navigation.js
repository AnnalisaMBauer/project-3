import React, { useState } from "react";

import Footer from "./footer";
import Body from "./body";
import NavBar from "./navbar";

import RockPaperScissors from "./rockPaperScissor";
import Game from "./TicTacToe/game";
import Contact from "../pages/contact";

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState("Body");

  const renderPage = () => {
    if (currentPage === "Body") {
      return <Body />;
    }
    if (currentPage === "RockPaperScissors") {
      return <RockPaperScissors />;
    }
    if (currentPage === "TicTacToe") {
      return <Game />;
    }
    // if (currentPage === "Connect Four") {
    //     return <ConnectFour />
    // }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="container">
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
