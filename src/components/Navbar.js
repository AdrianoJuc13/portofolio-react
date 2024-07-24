import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <nav className="NavBar">
      <Link className="Link" to="/">
        Home
      </Link>
      <div className="title">Adriano Jucan Portofolio</div>
      <Link className="Link" to="/cv">
        CV
      </Link>
    </nav>
  );
};

export default Navbar;
