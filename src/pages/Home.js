import React from "react";
import About from "../components/About";

const Home = () => {
  return (
    <div className="Home">
      {/* <img
        alt="background"
        src={`${process.env.PUBLIC_URL}/background_stars.jpg`}
        className="background"
      /> */}
      <About />
    </div>
  );
};

export default Home;
