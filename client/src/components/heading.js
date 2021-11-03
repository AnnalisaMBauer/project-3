import React from "react";
// import '../App.css';

const bigText = { fontSize: "5rem", fontWeight: "400", lineHeight: "1.2" };

const lilText = {
  marginRight: "17.5em",
  marginLeft: "1.5em",
  fontSize: "1.5rem",
  fontWeight: "300",
};

function Heading() {
  return (
    <div className="p-4 p-md-5 mb-4 ml-4 text-white rounded">
      <h1 style={bigText} className="fst-italic">
        Geek Games
      </h1>
      <p style={lilText} className="lead my-3">
        Current collection of games is listed below. New games in development!
      </p>
    </div>
  );
}

export default Heading;
