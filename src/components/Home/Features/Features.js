import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { FeatureData } from "../../../StaticData/ProductData";

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

const Features = () => {
  return (
    <Fragment>
      <motion.section
        className="bg-white divide-y divide-dashed"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {FeatureData.map((feature) => (
          <motion.div
            key={feature.id}
            variants={item}
          >
            <div className="flex justify-center items-center gap-x-5 py-4">
              
              <div className="hover:translate-x-2 duration-1000 cursor-pointer">
                <img src={feature.img} alt="logo" />
              </div>

              <div>
                <h1 className="text-md font-bold hover:text-primary">
                  {feature.name}
                </h1>
                <h3 className="text-sm text-gray-500">
                  {feature.des}
                </h3>
              </div>

            </div>
          </motion.div>
        ))}
      </motion.section>
    </Fragment>
  );
};

export default Features;