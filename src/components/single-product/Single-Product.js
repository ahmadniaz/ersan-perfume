import React, { useContext } from "react";
import ProductContext from "../../context/products-context/productContext";
import Plus from "../../assets/svg/plus.svg";
import Minus from "../../assets/svg/minus.svg";
import Paypal from "../../assets/svg/paypal-seeklogo.com.svg";
import "./Single-Product.css";

const SingleProduct = () => {
  const productContext = useContext(ProductContext);
  const { clickedProduct } = productContext;
  console.log(clickedProduct);
  const { image, weight, price, name } = clickedProduct;
  return (
    <>
      <div className="single_product_container">
        <div className="single_product_left">
          <div className="breadcrumbs"></div>
          <div
            style={{
              height: "550px",
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>
        </div>

        <div className="single_product_details">
          <div className="breadcrumbs"></div>
          <div className="single_product_text">
            <h1 className="prod_quantity">{weight}</h1>
            <h4 className="prod_price">&euro;{price}.00</h4>
            <p className="prod_seller">
              Seller <span>Ersan Perfumery</span>
            </p>
          </div>

          <div className="single_product_buttons">
            <p className="quant_title">{name}</p>
            <div className="quant_button">
              <button className="minus">
                <img src={Minus} alt="plus" width="24px" />
              </button>
              <button className="num">1</button>
              <button className="plus">
                <img src={Plus} alt="plus" width="24px" />
              </button>
            </div>

            <div className="payment_buttons">
              <div className="add_to_cart">
                <button>ADD TO CART</button>
              </div>
              <div className="paypal">
                <button>
                  Pay with <img src={Paypal} alt="paypal" width="70px" />
                </button>
              </div>
              <div className="other_options">
                <button>MORE PAYMENT OPTIONS</button>
              </div>
            </div>
          </div>
          <div className="single_product_description"></div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
