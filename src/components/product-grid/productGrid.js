import React from "react";
import "./productGrid.css";

const productGrid = () => {
  return (
    <>
      <div className="grid_container">
        <div className="first_grid">
          <div className="product_1">
            <div className="product_name">
              <p>NARCOTICS BUKET</p>
            </div>
          </div>
          <div className="product_2">
            <div className="product_name">
              <p>PURPLE MOON</p>
            </div>
          </div>
          <div className="product_3">
            <div className="product_name">
              <p>PERFUME OIL</p>
            </div>
          </div>
          <div className="product_4">
            <div className="product_name">
              <p>PERFUME OIL</p>
            </div>
          </div>
        </div>
        <div className="second_grid"></div>
      </div>
    </>
  );
};

export default productGrid;
