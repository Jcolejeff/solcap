import TextFormat from "lib/helpers/TextFormat";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import HeroSlide from "./TextSlide";
import { url } from "lib/utils";

import { cn } from "lib/utils";
interface IProps {}

const LandingPageHero = () => {
   const [index, setIndex] = useState(0);

   return (
      <section className="container relative w-full   max-w-[1700px] px-container-base pt-[3rem] md:-mb-[16rem] lg:px-container-lg lg:pb-[5rem] lg:pt-[0.5rem] xl:px-container-xl  xxl:py-[5rem] xxl:pb-[8rem]">
         <div className="relative flex w-full flex-col justify-center gap-[0.5rem]   md:gap-[2.75rem] ">
            <div className=" flex flex-col items-center justify-center  gap-6 2xl:gap-8">
               <div>
                  <h1 className="max-w-[80rem] text-center text-[2rem]    font-[700] leading-[130%] tracking-[0.02rem] text-secondary-2 transition-all duration-500 ease-in-out md:tracking-[0.0225rem] lg:ml-[-0.2rem] lg:text-[3.4rem] xxl:text-[5rem] xxl:leading-[5rem]">
                     <TextFormat
                        text={`Solar Solution Built for`}
                        keyword={"The solcap"}
                        keywordClassName="text-primary-1 transition-all duration-500 ease-in-out"
                     />
                  </h1>
                  <h1 className="max-w-[80rem] text-center text-[2rem]    font-[700] leading-[130%] tracking-[0.02rem] text-secondary-2 transition-all duration-500 ease-in-out md:tracking-[0.0225rem] lg:ml-[-0.2rem] lg:text-[3.4rem] xxl:text-[5rem] xxl:leading-[5rem]">
                     <TextFormat
                        text={`Nigeria`}
                        keyword={"Nigeria"}
                        keywordClassName="text-primary-1 transition-all duration-500 ease-in-out"
                     />
                  </h1>
                  {/* <HeroSlide /> */}
               </div>

               <Fade bottom>
                  <h2 className="max-w-[38.875rem] text-center text-[1.18rem] font-[500] leading-[2.2rem] text-secondary-2 md:leading-[2.01rem] lg:text-[1.2rem] xxl:max-w-[45.875rem] xxl:text-[1.5rem]">
                     We provide solar power financing for businesses and homes.
                  </h2>
               </Fade>

               <div className="mb-5 flex   items-center gap-4 transition-all duration-500 ease-in-out">
                  <a href="#contact" className="">
                     <div className="flex items-center justify-center rounded-lg bg-primary-1 px-4 py-3  xxl:px-4 xxl:py-4">
                        <p className="text-sm  font-bold tracking-wider text-white lg:text-[0.9rem] xxl:text-[1.1rem]">
                           Get Started
                        </p>
                     </div>
                  </a>
               </div>
            </div>

            <section>
               <div className="relative mx-auto flex h-full  w-full flex-col items-center justify-center rounded-lg md:w-10/12 md:items-end md:justify-end  ">
                  <img
                     src="/images/landing-page/landing.jpg"
                     className="z-20 h-full  w-full rounded-xl sm:object-contain xxl:object-cover   "
                  />
                  <div className="absolute  left-[20%]   top-[70%] z-50 flex items-center gap-4 rounded-md bg-white  px-4 py-2  shadow-1 md:relative md:left-[4%] md:top-[-30%] md:shadow-2 lg:left-[-1%] lg:top-[-20%] xxl:left-[-8%] xxl:top-[-6%]">
                     <h4 className="text-[0.7rem] font-[600] leading-[2.25rem] tracking-[0.02875rem] lg:text-[0.9rem] xxl:text-[1.2rem]  ">
                        Green Energy all the way!
                     </h4>

                     <img src={url("/images/products/Success.svg")} alt="" className="" />
                  </div>
               </div>
            </section>
         </div>
      </section>
   );
};

export default LandingPageHero;
