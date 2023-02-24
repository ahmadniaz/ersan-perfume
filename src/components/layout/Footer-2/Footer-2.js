import React from "react";
import Amex from "../../../assets/svg/amex-svgrepo-com.svg";
import Gpay from "../../../assets/svg/google-pay-svgrepo-com.svg";
import Apay from "../../../assets/svg/apple-pay-payment-mark-logo-svgrepo-com.svg";
import Klarna from "../../../assets/svg/klarna-pay-logo-svgrepo-com.svg";
import mastercard from "../../../assets/svg/mastercard-svgrepo-com.svg";
import paypal from "../../../assets/svg/paypal-color-svgrepo-com.svg";
import Visa from "../../../assets/svg/visa-pay-logo-svgrepo-com.svg";
import "./Footer-2.css";

const secondFooter = () => {
  return (
    <>
      <div className="second_footer_container">
        <div className="second_footer_left_container">
          <div className="second_footer_left">
            <p>© 2023 Aromas Artesenales . Powered by Pragma-tech</p>
          </div>
        </div>
        <div className="second_footer_middle"></div>
        <div className="second_footer_right_container">
          <div className="second_footer_right">
            <div className="payment_icons">
              <ul>
                <li>
                  <img src={Amex} alt="" />
                </li>
                <li>
                  <img src={Gpay} alt="" />
                </li>
                <li>
                  <img src={Apay} alt="" />
                </li>
                <li>
                  <img src={Klarna} alt="" />
                </li>
                <li>
                  <img src={mastercard} alt="" />
                </li>
                <li>
                  <img src={paypal} alt="" />
                </li>
                <li>
                  <img src={Visa} alt="" />
                </li>
              </ul>
            </div>
            <div className="second_footer_menu">
              <ul>
                <li>Payment</li>
                <li> Conditions</li>
                <li>Right of Withdrawal</li>
                <li>Data Protection</li>
                <li>Imprint</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default secondFooter;
