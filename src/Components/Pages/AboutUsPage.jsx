import React from 'react';
import aboutUsImg from "./image 1.png"
import ellipse from "./Ellipse 10.png"
import visionImg from "./image 31.png";
import valueImg from "./image 32.png";
import respectImg from "./Frame 2610703.png";
import innovationImg from "./Frame 2610703 (1).png";
import excellenceImg from "./Frame 2610703 (2).png";
import intergrityImg from "./Frame 2610703 (3).png";
import serviceImg from "./Frame 2610703 (4).png";
import qualityImg from "./Frame 2610703 (5).png";
import Accordion from '../Accordion/Accordion';
import ratingArrowRight from "./Vector 3.png"
import ratingArrowLeft from "./Vector 2.png"
import OurTeamImg from "./Rectangle 730.png"

const AboutUsPage = () => {
    return (
      <div className="mt-24  min-h-screen">
        <div className="">
          <div className="container w-auto md:w-[1100px] mx-auto">
            <div className="flex justify-center">
              <img src={aboutUsImg} alt="" className="h-[50px] md:h-[100px]" />
            </div>
            <div>
              <h1 className="p-5 md:text-2xl">
                <span className="text-xl font-semibold  md:text-3xl">
                  Genio Inc.
                </span>{" "}
                is a fast-growing accounting and management consulting firmd
                edicated to solving a plethora of financial and C-suite related
                management challenges.
              </h1>
            </div>
            <div className="flex justify-center relative items-center">
              <div className="p-5">
                <h1 className="font-semibold text-xl md:text-3xl">
                  Mission Statements
                </h1>
                <p className="pe-5  md:text-2xl">
                  To assist small and medium-sized businesses achieve
                  sustainable profitability and cost control through top-notch
                  strategic management consulting offering, and overall business
                  transformation.
                </p>
              </div>
              <div>
                <img src={ellipse} alt="" className="" />
              </div>
            </div>
            <div className="flex justify-center p-5 items-center">
              <div>
                <img src={visionImg} alt="" />
              </div>
              <div className="">
                <h1 className="font-semibold text-xl md:text-3xl">
                  Our Vision
                </h1>
                <p className=" md:text-2xl">
                  To be a leading accounting and management consulting firm
                  embedding modern technology
                </p>
              </div>
            </div>
          </div>

          {/* value */}
          <div className="w-full mx-auto p-5 bg-[#D2EAF0]">
            <div className=" container mx-auto ">
              <div className="flex  justify-center p-5 mb-2">
                <img src={valueImg} alt="value-img" />
              </div>
              <div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-7 mb-2 mt-4">
                  <div class=" bg-white rounded-[24px] gap-3 text-black text-center p-5 flex items-center flex-col ">
                    <div className="">
                      <img src={respectImg} alt="" />
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold text-[#104A5B]">
                        Respect
                      </h1>
                      <p>
                        Upholding a culture of mutual respect in all
                        interactions. 
                      </p>
                    </div>
                  </div>

                  {/* inovation */}
                  <div class=" bg-white rounded-[24px] gap-3 text-black text-center p-5 flex items-center flex-col ">
                    <div className="">
                      <img src={innovationImg} alt="" />
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold text-[#104A5B]">
                        Innovation
                      </h1>
                      <p>
                        Embracing creativity to drive progress and solutions.
                      </p>
                    </div>
                  </div>
                  {/* excellence */}
                  <div class=" bg-white rounded-[24px] gap-3 text-black text-center p-5 flex items-center flex-col ">
                    <div className="">
                      <img src={excellenceImg} alt="" />
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold text-[#104A5B]">
                        Excellence
                      </h1>
                      <p>Striving for excellence in all aspects of our work.</p>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-7 mb-2 mt-5">
                  {/* intergrity */}
                  <div class=" bg-white rounded-[24px] gap-3 text-black text-center p-5 flex items-center flex-col ">
                    <div className="">
                      <img src={intergrityImg} alt="" />
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold text-[#104A5B]">
                        Integrity
                      </h1>
                      <p>
                        Maintaining the highest standards of professional
                        ethics. .
                      </p>
                    </div>
                  </div>
                  {/* sevice */}
                  <div class=" bg-white rounded-[24px] gap-3 text-black text-center p-5 flex items-center flex-col ">
                    <div className="">
                      <img src={serviceImg} alt="" />
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold text-[#104A5B]">
                        Service Delivery
                      </h1>
                      <p>
                        Commitment to delivering exceptional services to our
                        clients. 
                      </p>
                    </div>
                  </div>

                  {/* quality */}
                  <div class=" bg-white rounded-[24px] gap-3 text-black text-center p-5 flex items-center flex-col ">
                    <div className="">
                      <img src={qualityImg} alt="" />
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold text-[#104A5B]">
                        Quality
                      </h1>
                      <p>Ensuring the highest quality in our deliverables.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* history */}
          <div className="container mx-auto">
            <div className="flex justify-center text-2xl text-[#2094B5] font-semibold">
              <h1 className="mt-5 font-semibold text-2xl md:text-3xl p-3">
                History and Milestones of the Company
              </h1>
            </div>
            <div>
              <p className="text-xl p-3 py-2">
                Founding Year: Established in 2005.
              </p>
            </div>
            <div className="bg-green-300 p-2">
              <Accordion
                description={
                  " Description: Helping organizations define their strategic direction, set goals, and develop actionable plans, Optimizing processes and improving operational efficiency to drive productivity."
                }
                benefits={
                  " strategic: Clear strategic vision, improved decision-making, and enhanced competitive advantage,educed costs, streamlined operations, and increased operational agility."
                }
                title={"Key Milestones:"}
              ></Accordion>
            </div>
          </div>

          {/* Our Team  */}
          <div className="container mx-auto max-w-[1000px] px-4">
            <div className="flex  justify-center items-center py-3">
              <div>
                <img src={ratingArrowRight} alt="" />
              </div>
              <div>
                <h1 className="font-semibold  w-[115px] px-2 md:w-auto f md:text-3xl">
                
                  OUR TEAM
                </h1>
              </div>
              <div>
                <img src={ratingArrowLeft} alt="" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-7 mb-2 mt-4">
              {/* intergrity */}
              <div class=" bg-white rounded-[24px] gap-3 text-black text-start  flex  flex-col ">
                <div className="">
                  <img src={OurTeamImg} alt="" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-[#104A5B]">
                    Akindayomi Segun
                  </h1>
                  <p className="text-xs">
                    Managing Director/Product Designer .
                  </p>
                </div>
              </div>
              <div class=" bg-white rounded-[24px] gap-3 text-black text-start  flex  flex-col ">
                <div className="">
                  <img src={OurTeamImg} alt="" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-[#104A5B]">
                    Akindayomi Segun
                  </h1>
                  <p className="text-xs">
                    Managing Director/Product Designer .
                  </p>
                </div>
              </div>
              <div class=" bg-white rounded-[24px] gap-3 text-black text-start  flex  flex-col ">
                <div className="">
                  <img src={OurTeamImg} alt="" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-[#104A5B]">
                    Akindayomi Segun
                  </h1>
                  <p className="text-xs">
                    Managing Director/Product Designer .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutUsPage;
