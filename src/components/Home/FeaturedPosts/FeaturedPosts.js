import React, { Fragment } from "react";
import { FeaturedPost } from "../../../StaticData/LeftProduct";

const FeaturedPosts = () => {
  return (
    <Fragment>
      <section className="bg-white px-3 pb-0 pt-3 mt-8">
        <h1 className=" text-xl font-bold ">Featured Posts</h1>
        <div className="w-20 h-[2px] bg-black"></div>
        {FeaturedPost.map((product) => (
          <div key={product.id}>
            <div className="  flex justify-center items-center gap-x-1 py-4 ">
              <div className="w-[35%]">
                <img src={product.img} alt="logo" />
              </div>
              <div className="w-[65%]">
                <h3 className=" font-sans	text-slate-500"> {product.date}</h3>
                <h1 className="text-sm font-bold hover:text-primary">
                  {product.name}
                </h1>

              </div>
            </div>
            <hr className="mb-0 pb-0 w-full" />
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default FeaturedPosts;
