import React, { Fragment } from "react";
import { LeftProduct } from "../../../StaticData/LeftProduct";

const FeaturedProduct = () => {
  return (
    <Fragment>
      <section className="bg-white  px-3 pt-3 pb-0 mt-8">
        <h1 className=" text-xl font-bold ">Featured Product</h1>
        <div className="w-20 h-[2px]  bg-black"></div>
        {LeftProduct.map((product) => (
          <div key={product.id}>
            <div className="  flex justify-between items-center py-4 px-0 ">
              <div className="w-[50%]">
                <h1 className="text-md font-semibold  hover:text-primary">{product.name}</h1>
                <h3 className="text-black font-semibold">€{product.price}</h3>
              </div>
              <div className="w-[45%] ">
                <img className="max-w-full" src={product.img} alt="logo" />
              </div>
            </div>
            <hr className="mb-0 pb-0 w-full" />
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default FeaturedProduct;
