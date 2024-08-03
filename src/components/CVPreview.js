import React from "react";
import "../App.scss";

const CvPreview = () => {
  return (
    <div className="cv-preview">
      <h2>Resume</h2>
      <iframe
        src={`${process.env.PUBLIC_URL}/cv.pdf`}
        title="CV Preview"
        className="cv-iframe"
      ></iframe>
      <div
        href={`${process.env.PUBLIC_URL}/cv.pdf`}
        download="Adriano Jucan CV .pdf"
        className="download-button"
      >
        Download
      </div>
    </div>
  );
};

export default CvPreview;
