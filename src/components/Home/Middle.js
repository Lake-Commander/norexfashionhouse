import React, { Fragment } from "react";
import Banner from "./Banner/Banner";
import FlashSale from "./FlashSale/FlashSale";
import LookStyle from "./LookStyle/LookStyle";
import ModernFashion from "./ModernFashion/ModernFashion";
import Products from "./Products/Products";
import SingleLIneProducts from "./Products/SingleLIneProducts";

const Middle = () => {
  return (
    <Fragment>
      <div>
        <Banner />
        <FlashSale />
        <Products />
        <LookStyle />
        <SingleLIneProducts />
        <ModernFashion />
      </div>
    </Fragment>
  );
};

export default Middle;
