import React from 'react';
import Left from '../Home/Left';
import Right from '../Home/Right';
import ClothDetails from '../ProductDetails/ClothDetails';
// import Details from '../ProductDetails/Details';

const LeftRightStyle = () => {
  return (
    <main className="bg-[#F7F7F7] ">
    <div className="bg-[#F7F7F7] container py-10">
      <div className="flex justify-center items-start gap-5">
        <section className=" w-1/6 h-full hidden lg:block">
          <Left />
        </section>
        <section className=" w-full h-full lg:w-4/6 ">
          <ClothDetails />
        </section>
        <section className=" w-1/6  h-full hidden lg:block">
          <Right />
        </section>
      </div>
    </div>
  </main>
  );
};

export default LeftRightStyle;