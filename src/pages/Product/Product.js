import React from "react";
import SingleProduct from "../../components/single-product/Single-Product";
import FirstHeader from "../../components/layout/Header-1/Header-1";
import SecondHeader from "../../components/layout/Header-2/Header-2";
import FirstFooter from "../../components/layout/Footer-1/Footer-1";
import SecondFooter from "../../components/layout/Footer-2/Footer-2";
import "./Product.css";

const Product = () => {
  return (
    <>
      <FirstHeader />
      <SecondHeader />
      <SingleProduct />
      <FirstFooter />
      <SecondFooter />
    </>
  );
};

export default Product;
