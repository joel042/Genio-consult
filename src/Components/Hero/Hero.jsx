import React from "react";
import "../../";
import groupImg from "./Group 3.png";
// import HeroImg2 from "./Focused developers testing vr software.png"


const Hero = () => {
  return (
    <>
      <div className="hidden xl:block hero-section mt-14">
        <div className="container mx-auto">
          <div className="gradient-text">
            <h1 className="gradient-text">
              Driving Growth With Precision and Insights
            </h1>
            {/* <h1>Driving Growth with Precision and Insight</h1> */}

            <p>
              The secret of change is to focus all of your energy not on
              fighting the old, but on building the new.
            </p>
          </div>

          <div className="hero-section-btn">
            <button>Contact Us</button>
            <button>Learn More</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center xl:hidden items-center">
        <div className="mt-20 ">
          <img
            src={groupImg}
            className=" w-full h-auto max-h-[600px] md:h-[600px] "
            alt=""
          />
        </div>
        <div className="flex flex-col text-center gap-3 mt-3">
          <h1 className="text-5xl sm:text-6xl md:text-7xl text-[#0B313C] font-extrabold p-3 leading-[55px]">
            Driving Growth with Precision and Insight
          </h1>
          <p className="font-[500] text-xl sm:text-2xl md:text-3xl text-[#3C3535] px-3">
            The secret of change is to focus all of your energy not on fighting
            the old, but on building the new
          </p>
        </div>
        <div className="hero-section-btn flex flex-col md:flex-row gap-1 items-center justify-center">
          <button className="mx-5">Contact Us</button>
          <button>Learn More</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
