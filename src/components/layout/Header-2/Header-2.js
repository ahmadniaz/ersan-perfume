import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import "./Header-2.css";
import Logo from "../../../assets/Logo.png";

const secondHeader = () => {
  return (
    <>
      <div className="second_header_container">
        <div className="second_header_innerContainer">
          <div className="second_header_left">
            <ul className="menu-links">
              <li>
                <a href="#" className="anchor-links">
                  Collection
                </a>
              </li>
              <li>
                <a href="#" className="anchor-links">
                  About Ersan
                </a>
              </li>
              <li>
                <a href="#" className="anchor-links">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="second_header_middle">
            <img src={Logo} alt="Logo" width="150px" />
          </div>
          <div className="second_header_right">
            <ul className="second_header_icons">
              <li>
                <a href="#" className="anchor-links">
                  Seek <FiSearch size="25px" />
                </a>
              </li>
              <li>
                <a href="#" className="anchor-links">
                  Shopping Cart <BsCart size="25px" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default secondHeader;
