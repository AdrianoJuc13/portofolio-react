import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="NavBar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="title">
          <img
            src={`${process.env.PUBLIC_URL}/logo192.png`}
            alt="Adriano Jucan"
          />
          Adriano Jucan Portofolio
        </div>
      </Link>
      <div className="buttons">
        <Link className="Link" to="/">
          Home
        </Link>
        <Link className="Link" to="/cv">
          Resume
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
