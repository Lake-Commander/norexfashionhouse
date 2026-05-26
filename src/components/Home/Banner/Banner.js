import React from "react";

// banner image
import clothings from "../../../assets/images/banner/banner2.webp";
import fashion from "../../../assets/images/banner/banner1.webp";
/*import accesories from "../../../assets/images/banner/banner3.webp"; */

// swiper js code
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { Navigation } from "swiper";

// framer motion
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Banner = () => {
  return (
    <div className="h-[260px] w-full mb-10">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-[260px] mb-10"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${fashion})`, backgroundSize: "100%" }}
            className="bg-no-repeat bg-cover bg-center w-full h-full"
          >
            <div className="flex h-full">
              <div className="w-1/2 hidden md:block"></div>

              <div className="w-full md:w-1/2 md:bg-transparent bg-[#ffffff8e] flex items-center justify-center md:items-start h-full flex-col">

                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5 }}
                  className="text-md md:text-xl text-gray-700"
                >
                  New Collections
                </motion.h1>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-2xl flex flex-row lg:flex-col gap-3 my-1 md:my-4 font-bold text-[#983441]"
                >
                  <p>Women's Fashion</p>
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.7 }}
                  className="text-gray-600 hidden md:block pr-5"
                >
                  Fashion has the ability to change and shape lives through its personal connection to us all.
                </motion.p>

                <motion.button
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.8 }}
                  className="bg-[#983441] btn-sm hover:bg-primary transition-all duration-500 ease-in-out text-sm font-semibold mt-2 md:mt-5 text-white"
                >
                  Shop Now
                </motion.button>

              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${clothings})`, backgroundSize: "100%" }}
            className="bg-no-repeat bg-center w-full h-full"
          >
            <div className="pl-0 md:pl-16 w-full md:w-1/2 bg-[#e0e2ebad] md:bg-transparent flex items-center md:items-start justify-center h-full flex-col">

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
                className="text-md md:text-xl text-gray-700"
              >
                New Arrivals
              </motion.h1>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-2xl my-2 md:my-3 font-bold text-[#BC5525]"
              >
                <span className="md:hidden">Latest Products</span>
                <span className="hidden md:block">Accessories</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7 }}
                className="text-gray-600 hidden md:block"
              >
                Hey There! Checkout our new arrivals or latest products and try them out.
              </motion.p>

              <motion.button
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8 }}
                className="bg-[#F0E5D2] text-sm btn-sm hover:bg-primary transition-all duration-500 ease-in-out font-semibold md:mt-5 mt-2 text-black"
              >
                Shop Now
              </motion.button>

            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;