import React from "react";
import Left from "../../components/Home/Left";
import Middle from "../../components/Home/Middle";
import Right from "../../components/Home/Right";

const Home = () => {
  return (
    <main className="bg-[#F7F7F7] ">
      <div className="bg-[#F7F7F7] container py-10">
        <div className="flex justify-center items-start gap-5">
          <section className=" w-1/6 h-full hidden lg:block">
            <Left />
          </section>
          <section className=" w-full h-full lg:w-4/6 ">
            <Middle />
          </section>
          <section className=" w-1/6  h-full hidden lg:block">
            <Right />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
