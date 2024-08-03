import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const BottomBar = () => {
  return (
    <div className="BottomBar">
      <div className="credits">Developed by Adriano Jucan</div>
      <div className="copyright">Copyright © 2024 AJ</div>
      <div className="social_links">
        <Link to="https://github.com/AdrianoJuc13" className="link">
          <FaGithub />
        </Link>

        <Link to="https://www.linkedin.com/in/adrianojucan" className="link">
          <FaLinkedin />
        </Link>
        <Link to="https://www.instagram.com/adrianojucan" className="link">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
