import React, { Fragment } from "react";
import { Fade } from "react-reveal";
import { FeatureData } from "../../../StaticData/ProductData";

const Features = () => {
  return (
    <Fragment>
      <section className="bg-white divide-y divide-dashed">
        {FeatureData.map((feature) => (
          <Fade bottom>
            <div
              key={feature.id}
            >
              <div className="  flex justify-center items-center gap-x-5 py-4 ">
                <div className="hover:translate-x-2 duration-1000 cursor-pointer">
                  <img src={feature.img} alt="logo" />
                </div>
                <div>
                  <h1 className="text-md font-bold hover:text-primary">
                    {feature.name}
                  </h1>
                  <h3 className="text-sm text-gray-500"> {feature.des}</h3>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </section>
    </Fragment>
  );
};

export default Features;
