import React from "react";
import { Link } from "react-router-dom";
import "./productGrid.css";

const productGrid = () => {
  return (
    <>
      <div className="grid_container">
        <div className="first_grid">
          <div className="product_1">
            <Link to="/collection">
              <div className="product_name">
                <p>NARCOTICS BUKET</p>
              </div>
            </Link>
          </div>

          <div className="product_2">
            <Link to="/collection">
              <div className="product_name">
                <p>PURPLE MOON</p>
              </div>
            </Link>
          </div>

          <div className="product_3">
            <Link to="/collection">
              <div className="product_name">
                <p>PERFUME OIL</p>
              </div>
            </Link>
          </div>

          <div className="product_4">
            <Link to="/collection">
              <div className="product_name">
                <p>PERFUME OIL</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="second_grid">
          <div className="second_grid_left"></div>

          <div className="second_grid_right">
            <Link to="/collection">
              <div className="product_name">
                <p>PERFUME OIL</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default productGrid;
