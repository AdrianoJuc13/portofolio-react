import React from "react";
import "../App.scss";

const CvPreview = () => {
  return (
    <div className="cv-preview">
      <h2>My CV</h2>
      <iframe
        src={`${process.env.PUBLIC_URL}/cv.pdf`}
        width="100%"
        height="500px"
        title="CV Preview"
        className="cv-iframe"
      ></iframe>
      <a
        href="/cv.pdf"
        download="Adriano Jucan CV .pdf"
        className="download-button"
      >
        Download CV
      </a>
    </div>
  );
};

export default CvPreview;
