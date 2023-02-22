import React from "react";
import { Link } from "react-router-dom";
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
                <Link to="/collection" className="anchor-links">
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/about" className="anchor-links">
                  {" "}
                  About Ersan
                </Link>
              </li>
              <li>
                <Link to="/blog" className="anchor-links">
                  {" "}
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="second_header_middle">
            <Link to="/">
              <img src={Logo} alt="Logo" width="150px" />
            </Link>
          </div>
          <div className="second_header_right">
            <ul className="second_header_icons">
              <li>
                <a href="/" className="anchor-links">
                  Seek{" "}
                  <FiSearch
                    size="25px"
                    style={{ verticalAlign: "text-bottom" }}
                  />
                </a>
              </li>
              <li>
                <a href="/" className="anchor-links">
                  Shopping Cart{" "}
                  <BsCart
                    size="25px"
                    style={{ verticalAlign: "text-bottom" }}
                  />
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
