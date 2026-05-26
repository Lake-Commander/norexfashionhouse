import React, { Fragment } from "react";
import "../../../styles/components/Categories.css";

const Categories = () => {
  return (
    <Fragment>
      <section className="bg-white  pt-3 pl-3">
        <h1 className="text-xl font-bold"> Categories</h1>
        <div className="w-20 h-[2px] bg-black"></div>

        <div className="box mt-5">
          <ul className="divide-y divide-dashed">
            <li className="py-3 font-semibold">
              {" "}
              <span>&#8226;</span> Hand Bags
            </li>
            <li className="py-3 font-semibold">
              {" "}
              <span>&#8226;</span> Clothing
            </li>
            <li className="py-3 font-semibold">
              {" "}
              <span>&#8226;</span> Sandals
            </li>
            <li className="py-3 font-semibold">
              {" "}
              <span>&#8226;</span> Handkerchief
            </li>
            <li className="py-3 font-semibold">
              {" "}
              <span>&#8226;</span> High Heels
            </li>
            <li className="py-3 font-semibold">
              {" "}
              <span>&#8226;</span> Makeup
            </li>
            <li className="py-3 font-semibold">
              {" "}
              <span>&#8226;</span> Slippers
            </li>
            <li className="py-3 font-semibold">
              {" "}
              <span>&#8226;</span> Rain Coat
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Categories;
