import React from "react";
import "./Hero.css";
import arrowIcon from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with
          theknowledge, skills, and experiences needed to excel in dynamic field
          of education.
        </p>
        <button className="btn">
          Explore more <img src={arrowIcon} alt="dark-arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
