import React, { useState } from "react";

import Footer from "./footer";
import NavBar from "./navbar";

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState("Body");

  const handlePageChange = (page) => setCurrentPage(page);
  return <div className="container"></div>;
}
