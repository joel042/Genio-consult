import React from "react";
import AboutUSImg from "./col-md-8.png";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-[#E0F1E0] mt-10 p-10">
        <div>
          <h1 className="text-3xl flex justify-center text-[#000000]  font-semibold mb-7">
            About Us
          </h1>
        </div>
        <div className="container  flex   mx-auto">
          <div className="grid grid-cols-1  md:w-[800px] mx-auto w-full md:grid-cols-2 ">
            <div className="  relative  h-[300px] w-auto text-white p-4">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/zIhu0DP3riY?si=gbocbHYA8XKnJhWM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              {/* <img src={AboutUSImg} alt="" />  */}
            </div>
            <div className="bg-white  bg-opacity-[0.9]  md:ms-8 w-full  ms-0 flex flex-col  justify-center text-black p-5">
              <div>
                <h1 className="font-semibold text-3xl pb-5">
                  We are the best at what we do
                </h1>
                <p className="font-semibold   leading-[2]">
                  <span className="text-2xl font-semibold text-[#156379]">
                    Genio Inc.
                  </span>{" "}
                  <span></span>
                  is a fast-growing accounting and management consulting firm
                  dedicated to solving a plethora of financial and C-suite
                  related management challenges.
                </p>
              </div>

              {/* <div className="md:me-[220px] me-[200px] 2xl:me-[270px] mt-8">
                <button className="bg-[#1B7B97] rounded-2xl  text-white w-[100px] h-[40px]">
                  More
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
