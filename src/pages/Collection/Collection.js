import React from "react";
import FirstHeader from "../../components/layout/Header-1/Header-1";
import SecondHeader from "../../components/layout/Header-2/Header-2";
import FirstFooter from "../../components/layout/Footer-1/Footer-1";
import SecondFooter from "../../components/layout/Footer-2/Footer-2";
import ProductCard from "../../components/products/Product-Card";

const Collection = () => {
  return (
    <>
      <FirstHeader />
      <SecondHeader />
      <ProductCard />
      <FirstFooter />
      <SecondFooter />
    </>
  );
};

export default Collection;
