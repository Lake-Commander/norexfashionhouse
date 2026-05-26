import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// banner image
import shoes from "../../../assets/images/flashSale/shoes.jpg";
import bags from "../../../assets/images/flashSale/bags.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../styles/components/swiperSlider.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

const ComboOffer = () => {
  return (
    <Fragment>
      <section className="my-8 bg-white">
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
          <SwiperSlide>
            <div className="cursor-pointer">
              <img src={shoes} alt="" />
              <h1 className="text-center py-6 font-semibold text-[15px]">
                Foot Wear{" "}
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer">
              <img src={bags} alt="" />
              <h1 className="text-center py-6 font-semibold text-[15px]">
                Elegant Bags
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </Fragment>
  );
};

export default ComboOffer;
