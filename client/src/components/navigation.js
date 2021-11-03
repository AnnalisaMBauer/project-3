import React, { useState } from "react";

import Footer from "./footer";
import NavBar from "./navbar";

const contain = { padding: "0 7em" };
export default function Navigation() {
  const [currentPage, setCurrentPage] = useState("Body");

  const handlePageChange = (page) => setCurrentPage(page);
  return <div style={contain}></div>;
}
