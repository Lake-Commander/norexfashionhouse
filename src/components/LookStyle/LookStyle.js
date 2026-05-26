import React, { Fragment } from "react";
import lookstyle from "../../assets/images/flashSale/lookStyle.webp";

const LookStyle = () => {
  return (
    <section className="h-[128px] md:h-[333px] mt-10">
      <div
        style={{ backgroundImage: `url(${lookstyle})` }}
        className="bg-no-repeat bg-contain lg:bg-cover bg-center w-full   h-full"
      >
        <div className="flex h-full">
          <div className="w-1/2 "></div>
          <div className="pl-5 md:pl-20 w-1/2   flex items-start  justify-center h-[100%] flex-col ">
            <h1 className=" text-[15px] md:text-2xl font-semibold text-white italic">
              New
            </h1>
            <div className="text-lg flex flex-row lg:flex-col gap-3 md:text-4xl 2xl:text-5xl my-0 md:my-4 font-sans font-bold text-white italic">
              LOOK & STYLE
            </div>
            <p className="text-white hidden md:block pr-5">
              Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
              Cras.
            </p>
            <button className="bg-[#058d82] hover:bg-primary transition-all duration-500 ease-in-out text-[14px] md:text-lg font-semibold mt-1 md:mt-5 text-white py-[3px] md:py-3 px-[8px] md:px-8">
              Shop Now
            </button>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default LookStyle;
