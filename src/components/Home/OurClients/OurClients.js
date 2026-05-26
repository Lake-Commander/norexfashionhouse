import React, { Fragment } from "react";
import client1 from "../../../assets/images/ourClients/client1.webp";
import client2 from "../../../assets/images/ourClients/client2.webp";
import client3 from "../../../assets/images/ourClients/client3.webp";
import client4 from "../../../assets/images/ourClients/client4.webp";
import client5 from "../../../assets/images/ourClients/client5.webp";
import client6 from "../../../assets/images/ourClients/client6.webp";

const OurClients = () => {
  return (
    <Fragment>
      <section className="bg-white">
        <div className=" w-[119px] pl-3 py-5">
          <h1 className="text-xl font-bold "> Our Clients</h1>
          <div className="w-20 h-[2px] bg-black"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 p-5 lg:grid-cols-3">
          <img className="border hover:border-primary transform duration-1000 cursor-pointer " src={client1} alt="" />
          <img className="border hover:border-primary transform duration-1000 cursor-pointer " src={client2} alt="" />
          <img className="border hover:border-primary transform duration-1000 cursor-pointer " src={client3} alt="" />
          <img className="border hover:border-primary transform duration-1000 cursor-pointer " src={client4} alt="" />
          <img className="border hover:border-primary transform duration-1000 cursor-pointer " src={client5} alt="" />
          <img className="border hover:border-primary transform duration-1000 cursor-pointer " src={client6} alt="" />
        </div>
      </section>
    </Fragment>
  );
};

export default OurClients;
