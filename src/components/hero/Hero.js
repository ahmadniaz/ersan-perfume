import React from "react";
import "./Hero.css";
import HeroImage from "../../assets/HeroImage.webp";

const heroSection = () => {
  return (
    <>
      <div
        className="hero_container"
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.5)100%),url(${HeroImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero_heading">
          <h6>ETHICS &amp; ASTHETICS</h6>
          <p>THE ERSAN HOUSE</p>
          <button>SHOP</button>
        </div>
      </div>
    </>
  );
};

export default heroSection;
