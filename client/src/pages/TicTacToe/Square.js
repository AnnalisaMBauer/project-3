import React from "react";

const style = {
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ value, onClick }) => (
  <button className="m-1" style={style} onClick={onClick}>
    {value}
  </button>
);
export default Square;
