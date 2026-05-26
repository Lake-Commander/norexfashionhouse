import React, { Fragment } from "react";
import sale1 from "../../../assets/images/flashSale/sale1.jpg";
import sale3 from "../../../assets/images/flashSale/sale2.webp";
import sale2 from "../../../assets/images/flashSale/sale3.jpg";

const FlashSale = () => {
  return (
    <Fragment>
      <section className="grid  md:grid-cols-2 lg:grid-cols-3 gap-3 bg-white p-3">
        <div className="w-full h-full cursor-pointer">
          <img src={sale1} className='block mx-auto' alt="sale" />
        </div>
        <div className="w-full h-full cursor-pointer">
          <img src={sale3} className='block mx-auto' alt="sale" />
        </div>
        <div className="w-full h-full cursor-pointer">
          <img src={sale2} className='block mx-auto' alt="sale" />
        </div>
      </section>
    </Fragment>
  );
};

export default FlashSale;
