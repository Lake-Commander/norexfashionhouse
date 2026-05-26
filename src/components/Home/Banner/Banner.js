import React from "react";

// banner image
import clothings from "../../../assets/images/banner/banner2.webp";
import fashion from "../../../assets/images/banner/banner1.webp";
import accesories from "../../../assets/images/banner/banner3.webp";
// swiper js code
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";

// import required modules
import { Navigation } from "swiper";

import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="h-[260px] w-full mb-10">
      {/* hello */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-[260px] mb-10"
      >
        {" "}
        {/* <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${accesories})`, backgroundSize: '100%' }}
            className="bg-no-repeat h-full w-full bg-center"
          >
            <div className="pl-0 md:pl-16 w-full md:w-1/2 md:bg-transparent bg-[#e0e2ebad] flex items-center md:items-start justify-center h-full flex-col ">
              <Fade top>
              <h1
                className="text-md md:text-xl text-gray-700"
              >
                Top Trending
              </h1>
              </Fade>
              <h1
                className="text-3xl md:text-2xl my-2 md:my-3 font-bold text-[#1B3C7A]"
              >
                <span className="md:hidden">Men's Clothes</span>
                <span className="hidden md:block">Clothings</span>
              </h1>
              <p
                className="text-gray-600 hidden md:block"
              >
                What you wear is how you present yourself to the world, especially today, when human contacts are so quick.{" "}
              </p>
              <button
                className="bg-[#789bdf] btn-sm  hover:bg-primary transition-all duration-500 ease-in-out font-semibold text-sm md:mt-5 mt-2 text-black "
              >
                Shop Now
              </button>
            </div>
          </div>{" "}
        </SwiperSlide> */}
        <SwiperSlide>

          <div
            style={{ backgroundImage: `url(${fashion})`, backgroundSize: '100%' }}
            className="bg-no-repeat bg-cover bg-center w-full   h-full"
          >
            <div className="flex h-full ">
              <div className="w-1/2 hidden md:block"></div>
              <div className="w-full md:w-1/2 md:bg-transparent bg-[#ffffff8e]  flex md:items-start items-center justify-center h-[100%] flex-col ">
                <Fade top>
                  <h1
                    className="text-md md:text-xl text-gray-700 "
                  >
                    New Collections
                  </h1>
                </Fade>
                <Fade top>
                  <div className="text-3xl md:text-2xl flex flex-row lg:flex-col gap-3 my-1 md:my-4  font-bold text-[#983441]">
                    <p>
                      Women's{" "}
                      Fashion</p>
                  </div>
                </Fade>
                <Fade top>
                  <p
                    className="text-gray-600 hidden md:block pr-5"
                  >
                    Fashion has the ability to change and shape lives through its personal connection to us all.{" "}
                  </p>
                </Fade>
                <Fade top>
                  <button
                    className="bg-[#983441] btn-sm hover:bg-primary transition-all duration-500 ease-in-out text-sm font-semibold mt-2 md:mt-5 text-white"
                  >
                    Shop Now
                  </button>
                </Fade>
              </div>
            </div>
          </div>{" "}

        </SwiperSlide>
        <SwiperSlide>
  <div
    style={{ backgroundImage: `url(${clothings})`, backgroundSize: "100%" }}
    className="bg-no-repeat bg-center bg-origin-padding w-full h-full"
  >
    <div className="pl-0 md:pl-16 w-full md:w-1/2 md:bg-transparent bg-[#e0e2ebad] flex items-center md:items-start justify-center h-full flex-col">
      
      <Fade top>
        <h1 className="text-md md:text-xl text-gray-700">
          New Arrivals
        </h1>
      </Fade>

      <Fade top>
        <h1 className="text-3xl md:text-2xl my-2 md:my-3 font-bold text-[#BC5525]">
          <span className="md:hidden">Latest Products</span>
          <span className="hidden md:block">Accessories</span>
        </h1>
      </Fade>

      <Fade top>
        <p className="text-gray-600 hidden md:block">
          Hey There! Checkout our new arrivals or latest products and try them out.
        </p>
      </Fade>

      <Fade top>
        <button
          className="bg-[#F0E5D2] text-sm btn-sm hover:bg-primary transition-all duration-500 ease-in-out font-semibold md:mt-5 mt-2 text-black"
        >
          Shop Now
        </button>
      </Fade>

    </div>
  </div>
</SwiperSlide>
 

      </Swiper>
    </div>
  );
};

export default Banner;