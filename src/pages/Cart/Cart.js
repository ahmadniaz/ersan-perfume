import React from "react";
import FirstHeader from "../../components/layout/Header-1/Header-1";
import SecondHeader from "../../components/layout/Header-2/Header-2";
import FirstFooter from "../../components/layout/Footer-1/Footer-1";
import SecondFooter from "../../components/layout/Footer-2/Footer-2";

import "./Cart.css";

const Cart = () => {
  return (
    <>
      <FirstHeader />
      <SecondHeader />
      <div className="cart_container">
        <div className="empty_cart_text">
          <div className="empty_cart_heading">
            <h1>Shopping Venture</h1>
          </div>
          <div className="empty_cart_para">
            <p>Your Shopping Cart is currently empty</p>
          </div>
        </div>
      </div>
      <FirstFooter />
      <SecondFooter />
    </>
  );
};

export default Cart;
