import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// banner image
import summer from "../../../assets/images/flashSale/summer.jpg";
import fashion from "../../../assets/images/flashSale/fashion.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../styles/components/swiperSlider.css";

// import required modules
import {Pagination, Autoplay } from "swiper";

const SummerSale = () => {
  return (
    <Fragment>
     <section className="my-8 bg-white" >
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
        modules={[Pagination , Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="cursor-pointer">
            <img src={summer} alt="" />
            <h1 className="text-center py-6 font-semibold text-[15px]" >Comfort Sandals </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <img src={fashion} alt="" />
            <h1 className="text-center py-6 font-semibold text-[15px]">Stylist Clothes</h1>
          </div>
        </SwiperSlide>
      </Swiper>
     </section>
    </Fragment>
  );
};

export default SummerSale;
