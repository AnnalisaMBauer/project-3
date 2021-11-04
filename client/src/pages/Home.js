import React, { useState } from "react";
import { Link } from "react-router-dom";

function Body({ currentPage, handlePageChange }) {
  const Style = {
    marginTop: "10px",
    height: "40px",
  };
  const ImgStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: "550px",
    width: "700px",
    borderRadius: '30px',
  };

  const BntStyle = {
    height: '50px',
    width: '100px',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '10%',
    marginRight: '10%',
    borderRadius: '30px',
  };

  const BtmBtn = {
    marginLeft: '10px',
    borderRadius: '10px',
  }

  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators" style={Style}>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
            style={BtmBtn}
          >RPS</button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={BtmBtn}
          >TTT</button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            style={BtmBtn}
          >SNK</button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div style={ImgStyle}>
            <Link to="/rock-paper-scissors" className="p-2 text-white">
              <img
                src="./img/rps1.png"
                class="d-block w-100 rounded"
                alt="..."
              />
            </Link>
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Rock | Paper | Scissors </h5>
              <p>
                How many times can you beat Quixote?
              </p>
            </div>
          </div>
          <div className="carousel-item">
          <div style={ImgStyle}>
            <Link to="/tic-tac-toe" className="p-2 text-white">
              <img
                src="./img/tictac.png"
                className="d-block w-100"
                alt="..."
              />
            </Link>
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Tic-Tac-Toe</h5>
              <p>
                Good ol Xs and Os. PvP.
              </p>
            </div>
          </div>
          <div className="carousel-item">
          <div style={ImgStyle}>
            <Link to="/snake" className="p-2 text-white">
              <img
                src="./img/tictac.png"
                className="d-block w-100"
                alt="..."
              />
            </Link>
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Snake Game</h5>
              <p>
                Eat the apples, don't touch the walls... Stay alive.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
          style={BntStyle}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
          style={BntStyle}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden"></span>
        </button>
      </div>
    </div>
  );
}

export default Body;
