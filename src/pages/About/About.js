import React from "react";
import FirstHeader from "../../components/layout/Header-1/Header-1";
import SecondHeader from "../../components/layout/Header-2/Header-2";
import FirstFooter from "../../components/layout/Footer-1/Footer-1";
import SecondFooter from "../../components/layout/Footer-2/Footer-2";

import "./About.css";

const About = () => {
  return (
    <>
      <FirstHeader />
      <SecondHeader />
      <div className="about_container">
        <div className="about_text">
          <div className="about_heading">
            <h1>About Aromas</h1>
          </div>
          <div>&nbsp;</div>
          <div className="about_para">
            <p>
              {" "}
              Vestibulum elementum malesuada ex. Praesent aliquet ligula sit
              amet diam molestie convallis. Aenean vestibulum euismod est sed
              suscipit. Phasellus tempor finibus lorem, non pharetra odio
              imperdiet id. Cras ultricies, lacus vitae tempor volutpat, metus
              nibh convallis erat, vitae viverra neque massa id urna. Sed
              finibus leo tellus, quis volutpat nisl auctor eget
            </p>
          </div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div className="about_para">
            <p>
              {" "}
              Vestibulum elementum malesuada ex. Praesent aliquet ligula sit
              amet diam molestie convallis. Aenean vestibulum euismod est sed
              suscipit. Phasellus tempor finibus lorem, non pharetra odio
              imperdiet id. Cras ultricies, lacus vitae tempor volutpat, metus
              nibh convallis erat, vitae viverra neque massa id urna. Sed
              finibus leo tellus, quis volutpat nisl auctor eget
            </p>
          </div>
          <div>&nbsp;</div>
          <div className="about_para">
            <p>
              {" "}
              Vestibulum elementum malesuada ex. Praesent aliquet ligula sit
              amet diam molestie convallis. Aenean vestibulum euismod est sed
              suscipit. Phasellus tempor finibus lorem, non pharetra odio
              imperdiet id. Cras ultricies, lacus vitae tempor volutpat, metus
              nibh convallis erat, vitae viverra neque massa id urna. Sed
              finibus leo tellus, quis volutpat nisl auctor eget
            </p>
          </div>
        </div>
      </div>
      <FirstFooter />
      <SecondFooter />
    </>
  );
};

export default About;
