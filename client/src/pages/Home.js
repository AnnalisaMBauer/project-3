import games from "../components/gamesList";
import GamesCard from "../components/gamesCard";
import Heading from "../components/heading";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Body({ currentPage, handlePageChange }) {
  const Style={
    marginTop: '10px',
    height: '40px',
  }
  const ImgStyle={
    height: '550px',
    width: '700px',
  }

  return (
    <div >
  
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-indicators" style={Style}>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Link to="/rock-paper-scissors" className="p-2 text-white">
      <img src="./img/rps.png" class="d-block w-100" style={ImgStyle} alt="..."/>
      </Link>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
    <Link to="/tic-tac-toe" className="p-2 text-white">
      <img src="./img/tictac.png" className="d-block w-100" style={ImgStyle} alt="..." />
      </Link>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
    <Link to="/connect-four" className="p-2 text-white">
      <img src="./img/tictac.png" className="d-block w-100" style={ImgStyle} alt="..." />
      </Link>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  );
}

export default Body;
