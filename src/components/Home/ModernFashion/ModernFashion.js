import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { motion } from "framer-motion";

import handbags from "../../../assets/images/flashSale/sale4.jpg";
import clothes from "../../../assets/images/flashSale/sale5.jpg";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ModernFashion = () => {
  return (
    <Fragment>
      <motion.section
        className="py-10 grid md:grid-cols-1 lg:grid-cols-2 gap-2 px-2"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* CARD 1 */}
        <motion.div
          className="flex items-start gap-0 lg:gap-5 bg-white p-3 rounded"
          variants={card}
        >
          <div className="w-[50%] mr-2">
            <img src={handbags} alt="" />
          </div>

          <div>
            <h1 className="text-[15px] font-semibold">Modern Handbags</h1>

            <ul className="text-[13px]">
              <li className="py-[2px] hover:text-primary">
                <FontAwesomeIcon icon={faAngleRight} /> TYPFIY
              </li>
              <li className="py-[2px] hover:text-primary">
                <FontAwesomeIcon icon={faAngleRight} /> GRACETOP
              </li>
              <li className="py-[2px] hover:text-primary">
                <FontAwesomeIcon icon={faAngleRight} /> FANTOSY
              </li>
              <li className="py-[2px] hover:text-primary">
                <FontAwesomeIcon icon={faAngleRight} /> HIGH HEEL
              </li>
              <li className="py-[2px] hover:text-primary">
                <FontAwesomeIcon icon={faAngleRight} /> Lady HEEL
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          className="flex items-start gap-0 lg:gap-5 bg-white p-3 rounded"
          variants={card}
        >
          <div className="w-[50%] mr-2">
            <img src={clothes} alt="" />
          </div>

          <div>
            <h1 className="text-md font-semibold">Fashion Clothes</h1>

            <ul className="text-[13px]">
              <li className="py-[2px] hover:text-primary">
                <FontAwesomeIcon icon={faAngleRight} /> SOBBY
              </li>
              <li className="py-[2px] hover:text-primary">
                <FontAwesomeIcon icon={faAngleRight} /> JABRA
              </li>
              <li className="py-[2px] hover:text-primary">
                <FontAwesomeIcon icon={faAngleRight} /> KUCHIPOO
              </li>
              <li className="py-[2px] hover:text-primary">
                <FontAwesomeIcon icon={faAngleRight} /> LUKE & LILLY
              </li>
              <li className="py-[2px] hover:text-primary">
                <FontAwesomeIcon icon={faAngleRight} /> LIBERTY
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.section>
    </Fragment>
  );
};

export default ModernFashion;