import React, { Fragment } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../../styles/components/swiperSlider.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import { BestSellerData } from "../../../StaticData/ProductData";

const BestSellers = () => {
  return (
    <Fragment>
      <section className="my-8 bg-white">
        <div className=" pl-3 py-5">
          <h1 className="text-[18px] font-bold "> Best Sellers</h1>
          <div className="w-20 h-[2px] bg-black"></div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {BestSellerData.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="cursor-pointer text-center">
                <div>
                  <img src={product.img} alt="" />
                </div>
                <div className="py-5">
                  <h1 className="font-semibold text-[20px]">{product.name}</h1>
                  <h2 className="text-[20px] ">€{product.price}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Fragment>
  );
};

export default BestSellers;
