import React from "react";
import { Link } from "react-router-dom";
// import "../App.scss";

const Navbar = () => {
  return (
    <nav className="NavBar">
      <div className="title">Adriano Jucan Portofolio</div>
      <div className="buttons">
        <Link className="Link" to="/">
          Home
        </Link>
        <Link className="Link" to="/cv">
          CV
        </Link>
        <Link className="Link" to="/projects">
          Projects
        </Link>
        <Link className="Link" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
