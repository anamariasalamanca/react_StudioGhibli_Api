import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <span className="japanese">家</span>
          <span>Home</span>
        </Link>
        <Link to="/films">
          <span className="japanese">映画</span>
          <span>Films</span>
        </Link>
      </ul>
      <img src="/logo.svg" alt="Studio Ghibli Logo" />
    </nav>
  );
};

export default Navbar;