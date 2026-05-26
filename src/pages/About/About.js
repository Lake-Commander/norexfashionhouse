import React, { Fragment } from "react";
import values from "../../assets/images/aboutus/values.jpg";
import promised from "../../assets/images/aboutus/promised.png";
import countires from "../../assets/images/aboutus/countires.webp";

const About = () => {
  return (
    <Fragment>
      <section className="py-5 max-w-[1200px] mx-auto">
       
        <div className="py-10">
          <div className="mb-10">
            <h1 className="lg:text-5xl text-3xl  text-center font-bold">
              Our Story
            </h1>
            <div className="flex mt-4 justify-center">
              <div className=" w-32 h-1 rounded-full bg-primary"></div>
            </div>
          </div>
          <div className="flex flex-col-reverse items-center xl:flex-row-reverse gap-x-16 pt-8">
            <div className="flex-1">
              <img
                className="object-cover h-full w-[500px] md:mx-auto lg:mx-0 rounded-2xl"
                src={values}
                alt=""
              />
            </div>
            <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex flex-col">
                <h2 className="text-2xl lg:text-3xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block font-sans">
                  100 By 30 Strategy
                </h2>
                <hr className="mb-8 opacity-5" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, excepturi dolore corporis laudantium totam et
                  temporibus illo odio optio placeat est consequatur magnam
                  facilis nobis voluptate quam eos repellat animi eum. Provident
                  aut delectus nisi autem nemo enim
                </p>
                <p className="py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur tenetur nisi inventore aliquid perferendis, aut
                  voluptatum aliquam itaque. Adipisci voluptatibus obcaecati
                  libero perspiciatis, exercitationem rerum!
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  perspiciatis consequuntur unde similique beatae aspernatur
                  corrupti hic ipsam natus nobis!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="py-10 my-10">
          <div className="mb-10">
            <h1 className="lg:text-5xl text-3xl  text-center font-bold">
              Our Values
            </h1>
            <div className="flex mt-4 justify-center">
              <div className=" w-32 h-1 rounded-full bg-primary"></div>
            </div>
          </div>
          
          <div className="flex flex-col items-center xl:flex-row  pt-8">
            <div className="flex-1">
              <img
                className="object-cover h-full w-[500px] md:mx-auto lg:mx-0 rounded-2xl"
                src={values}
                alt=""
              />
            </div>
            <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex flex-col">
                <h2 className="text-2xl lg:text-3xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block font-sans">
                  100 By 30 Strategy
                </h2>
                <hr className="mb-8 opacity-5" />
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, excepturi dolore corporis laudantium totam et
                  temporibus illo odio optio placeat est consequatur magnam
                  facilis nobis voluptate quam eos repellat animi eum. Provident
                  aut delectus nisi autem nemo enim
                </p>
                <p className="py-5 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur tenetur nisi inventore aliquid perferendis, aut
                  voluptatum aliquam itaque. Adipisci voluptatibus obcaecati
                  libero perspiciatis, exercitationem rerum!
                </p>
                <p className="text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  perspiciatis consequuntur unde similique beatae aspernatur
                  corrupti hic ipsam natus nobis!
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="py-10 my-10">
          <div className="mb-10">
            <h1 className="lg:text-5xl text-3xl  text-center font-bold">
              Who We Are
            </h1>
            <div className="flex mt-4 justify-center">
              <div className=" w-32 h-1 rounded-full bg-primary"></div>
            </div>
          </div>
          <div className="flex flex-col items-center xl:flex-row  pt-8">
            <div className="flex-1">
              <h1 className="font-bold lg:text-[55px] text-3xl lg:leading-normal ">
                Empowering Sellers on Fashion House
              </h1>
            </div>
            <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                  minima illo molestias iure, fugiat tenetur rem consectetur
                  iusto odio sequi. Assumenda vero doloribus asperiores
                  possimus, iste est neque tenetur ipsam.
                </p>
                <p className="py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae minima corporis accusamus, ex dolorem voluptate
                  earum explicabo. Minus porro nostrum quia vitae tempora fugiat
                  asperiores adipisci soluta repellat autem tempore magnam fuga
                  mollitia, iste nihil.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Adipisci corrupti, laboriosam possimus cum omnis esse
                  temporibus? Veritatis dignissimos debitis ipsam?
                </p>
              </div>
            </div>
          </div>
        </div>

      
        {/* Countires */}
        <div className="py-[20px] ">
          <img src={countires} className="block w-full" alt="" />
        </div>
      </section>
    </Fragment>
  );
};

export default About;
