import React from "react";
import img4 from "../../assets/images/icon/foter-top-img/img4 Small.jpeg";
import img3 from "../../assets/images/icon/foter-top-img/img3 Small.jpeg";
import img2 from "../../assets/images/icon/foter-top-img/img2 Small.jpeg";
import img1 from "../../assets/images/icon/foter-top-img/img1 Small.jpeg";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const BrandInfo = () => {
  return (
    <div className="bg-white py-10">
      <motion.div
        className="container grid grid-cols-1 md:grid-cols-4 gap-5"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* ITEM 1 */}
        <motion.div className="w-4/6 lg:w-full mx-auto lg:mx-0 flex flex-col lg:flex-row text-center lg:text-left items-center gap-3"
          variants={item}
        >
          <img src={img4} alt="" />
          <div>
            <h2 className="font-bold hover:text-primary transition-all duration-300 ease-in mb-1">
              Assured Purchase
            </h2>
            <p className="text-[15px] font-sans text-[#848484] pr-1">
              Provide genuine service & store products
            </p>
          </div>
        </motion.div>

        {/* ITEM 2 */}
        <motion.div className="w-4/6 lg:w-full mx-auto lg:mx-0 flex flex-col lg:flex-row text-center lg:text-left items-center gap-3"
          variants={item}
        >
          <img src={img3} alt="" />
          <div>
            <h2 className="font-bold hover:text-primary transition-all duration-300 ease-in mb-1">
              Easy To Buy & Return
            </h2>
            <p className="text-[15px] font-sans text-[#848484]">
              Single click to buy & return products
            </p>
          </div>
        </motion.div>

        {/* ITEM 3 */}
        <motion.div className="w-4/6 lg:w-full mx-auto lg:mx-0 flex flex-col lg:flex-row text-center lg:text-left items-center gap-3"
          variants={item}
        >
          <img src={img2} alt="" />
          <div>
            <h2 className="font-bold hover:text-primary transition-all duration-300 ease-in mb-1">
              Secure Payments
            </h2>
            <p className="text-[15px] font-sans text-[#848484]">
              Accepts all credit & debit cards
            </p>
          </div>
        </motion.div>

        {/* ITEM 4 */}
        <motion.div className="w-4/6 lg:w-full mx-auto lg:mx-0 flex flex-col lg:flex-row text-center lg:text-left items-center gap-3"
          variants={item}
        >
          <img src={img1} alt="" />
          <div>
            <h2 className="font-bold hover:text-primary transition-all duration-300 ease-in mb-1">
              Download Center
            </h2>
            <p className="text-[15px] font-sans text-[#848484]">
              Use mobile app & get biggest discounts
            </p>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default BrandInfo;