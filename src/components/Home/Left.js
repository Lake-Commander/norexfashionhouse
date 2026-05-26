import React, { Fragment } from "react";
import Categories from "./Categories/Categories";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import SummerSale from "./SummerSale/SummerSale";
import Testimonials from "./Testimonials/Testimonials";
import FeaturedPosts from "./FeaturedPosts/FeaturedPosts";

const Left = () => {
  return (
    <Fragment>
      <div className="">
        <Categories />
        <FeaturedProduct />
        <FeaturedPosts/>
        <SummerSale />
        <Testimonials />
      </div>
    </Fragment>
  );
};

export default Left;
