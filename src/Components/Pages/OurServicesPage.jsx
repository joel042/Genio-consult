import React from "react";
import Accordion from "../Accordion/Accordion";

import StrategicImg from "./cover.png";
import financialImg from "./cover (1).png"
// import marketingImg from "./cover (2).png";
// import TechnologyImg from "./cover (3).png";
import operationsImg from "./cover (4).png";
import inovationImg from "./cover (5).png";
import riskImg from "./cover (6).png";


const OurServicesPage = () => {
  return (
    <div className=" mt-24 min-h-screen">
      {/* strategic palnning */}
      <div className="container mx-auto">
        <div className="shadow-sm ">
          <div className=" ">
            <div className="flex md:grid-cols-2  md:grid flex-col-reverse">
              <div className="bg-white  p-4">
                <h1 class="text-3xl text font-bold px-5">Strategic Planning</h1>
                <ul className=" leading-9  p-5">
                  <li className=" border">Business Strategy Development</li>
                  <li className=" border">
                    {" "}
                    Market Analysis and Competitive Research
                  </li>
                  <li className=" border">Growth and Expansion Strategies</li>
                  <li className=" border">
                    Organizational Design and Restructuring
                  </li>
                  <div className="p-4 bg-[#E0F1E0] ">
                    <Accordion
                      description={
                        " Description: Helping organizations define their strategic direction, set goals, and develop actionable plans, Optimizing processes and improving operational efficiency to drive productivity."
                      }
                      benefits={
                        " strategic: Clear strategic vision, improved decision-making, and enhanced competitive advantage,educed costs, streamlined operations, and increased operational agility."
                      }
                      title={"STRATEGY & Operations:"}
                    ></Accordion>
                  </div>
                </ul>
              </div>
              <div className="bg-white flex items-center p-2  ">
                <img
                  src={StrategicImg}
                  className="w-full h-40 sm:h-48 object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Consulting */}

      <div className="container mx-auto">
        <div className="shadow-sm ">
          <div className=" ">
            <div className="flex md:grid-cols-2  md:grid flex-col">
              <div className="bg-white flex items-center p-2  ">
                <img
                  src={financialImg}
                  className="w-full h-40 sm:h-48 object-cover"
                  alt=""
                />
              </div>
              <div className="bg-white  p-4">
                <h1 class="text-3xl text font-bold px-5">
                  Financial Consulting
                </h1>
                <ul className=" leading-9  p-5">
                  <li className=" border">Financial Planning and Analysis</li>
                  <li className=" border">Budgeting and Forecasting</li>
                  <li className=" border">Risk Management</li>
                  <li className=" border">Mergers and Acquisitions Support </li>
                  <div className="p-4 bg-[#E0F1E0] ">
                    <Accordion
                      description={
                        " Description: Our Financial Planning and Analysis (FP&A) services help you create detailed financial plans and conduct thorough analyses to support strategic decision-making."
                      }
                      benefits={
                        " Benefits: Gain insights into your financial performance to develop realistic budgets, achieve accurate forecasts, and continuously monitor performance, ensuring informed decisions and optimal resource allocation."
                      }
                      title={"Financial Planning & Analysis:"}
                    ></Accordion>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing and Sales */}
{/* 
      <div className="container mx-auto">
        <div className="shadow-sm ">
          <div className=" ">
            <div className="flex md:grid-cols-2  md:grid flex-col-reverse">
              <div className="bg-white  p-4">
                <h1 className="text-3xl text font-bold px-5">
                  Marketing and Sales
                </h1>
                <ul className=" leading-9  p-5">
                  <li className=" border">Market Entry Strategiest</li>
                  <li className=" border">Brand Development and Positioning</li>
                  <li className=" border">Sales Force Effectiveness</li>
                  <li className=" border">Customer Relationship Management </li>
                  <div className="p-4 bg-[#E0F1E0]">
                    <Accordion
                      description={
                        " Description: Our market entry strategy services help you successfully penetrate new markets. We conduct comprehensive market research, assess competitive landscapes, and identify opportunities to create a tailored market entry plan."
                      }
                      benefits={
                        " Benefits: Make informed decisions, minimize risks, gain a competitive edge, and ensure success with in-depth market analysis and strategic planning."
                      }
                      title={"Market Entry Strategies"}
                    ></Accordion>
                  </div>
                </ul>
              </div>
              <div className="bg-white flex items-center p-2 ">
                <img
                  src={marketingImg}
                  className="w-full h-40 sm:h-48 object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Technology Consulting */}
{/*       
      <div className="container mx-auto">
        <div className="shadow-sm ">
          <div className=" ">
            <div className="flex md:grid-cols-2  md:grid flex-col">
              <div className="bg-white flex items-center p-2  ">
                <img
                  src={TechnologyImg}
                  className="w-full h-40 sm:h-48 object-cover"
                  alt=""
                />
              </div>
              <div className="bg-white  p-4">
                <h1 class="text-3xl text font-bold px-5">
                  Technology Consulting
                </h1>
                <ul className=" leading-9  p-5">
                  <li className=" border">IT Strategy and Planning</li>
                  <li className=" border">Digital Transformation</li>
                  <li className=" border">Cybersecurity Solutions</li>
                  <li className=" border">
                    System Implementation and Integration{" "}
                  </li>
                  <div className="p-4 bg-[#E0F1E0]">
                    <Accordion
                      description={
                        "DDescription: Implementing innovative technology solutions to support business objectives and digital  transformation."
                      }
                      benefits={
                        " Benefits: Enhanced IT infrastructure, improved cybersecurity, and greater technological agility."
                      }
                      title={"Technology Consulting"}
                    ></Accordion>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Operations Improvement */}
      <div className="container mx-auto">
        <div className="shadow-sm ">
          <div className=" ">
            <div className="flex md:grid-cols-2  md:grid flex-col-reverse">
              <div className="bg-white  p-4">
                <h1 class="text-3xl text font-bold px-5">
                  Process Optimization
                </h1>
                <ul className=" leading-9  p-5">
                  <li className=" border">Market Entry Strategiest</li>
                  <li className=" border"> Supply Chain Management</li>
                  <li className=" border">Sales Force Effectiveness</li>
                  <li className=" border">Quality Management</li>
                  <div className="p-4 bg-[#E0F1E0]">
                    <Accordion
                      description={
                        " Description: Our process optimization services aim to enhance the efficiency and effectiveness of your business operations. We analyze existing processes, identify inefficiencies, and implement improvements to streamline workflows.."
                      }
                      benefits={
                        " Benefits: Streamlined processes increase efficiency, reduce costs, enhance quality, and support scalable growth."
                      }
                      title={"Process Optimization:"}
                    ></Accordion>
                  </div>
                </ul>
              </div>
              <div className="bg-white flex items-center p-2 ">
                <img
                  src={operationsImg}
                  className="w-full h-40 sm:h-48 object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation and Product Development */}
      <div className="container mx-auto">
        <div className="shadow-sm ">
          <div className=" ">
            <div className="flex md:grid-cols-2  md:grid flex-col">
              <div className="bg-white flex items-center p-2 ">
                <img
                  src={inovationImg}
                  className="w-full h-40 sm:h-48 object-cover"
                  alt=""
                />
              </div>
              <div className="bg-white  p-4">
                <h1 class="text-3xl text font-bold px-5">
                  Innovation and Product Development
                </h1>
                <ul className=" leading-9  p-5">
                  <li className=" border">Innovation Strategy</li>
                  <li className=" border">Product Lifecycle Management</li>
                  <li className=" border">Research and Development (R&D)</li>
                  <li className=" border">Go-to-Market Strategies </li>
                  <div className="p-4bg-[#E0F1E0]">
                    <Accordion
                      description={
                        "Description: Our innovation strategy services help you cultivate a culture of innovation and develop a strategic framework for driving continuous improvement and growth. We work with you to identify opportunities, foster creativity, and implement processes that support innovation across your organization."
                      }
                      benefits={
                        " Benefits: Gain a competitive edge and drive sustainable growth by fostering creativity, aligning innovation with business strategy, and consistently introducing new products and services."
                      }
                      title={"Innovation Strategy: "}
                    ></Accordion>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Operations Improvement */}
      <div className="container mx-auto">
        <div className="shadow-sm ">
          <div className=" ">
            <div className="flex md:grid-cols-2  md:grid flex-col-reverse">
              <div className="bg-white  p-4">
                <h1 class="text-3xl  font-bold px-5">Risk Management</h1>
                <ul className=" leading-9  p-5">
                  <li className=" border">Regulatory Compliance</li>
                  <li className=" border">Risk Assessment and Mitigation</li>
                  <li className=" border">Corporate Governances</li>
                  <li className=" border">QContract Management</li>
                  <div className="p-4 bg-[#E0F1E0]">
                    <Accordion
                      description={
                        "Description: Our risk management services involve identifying, assessing, and prioritizing risks that could potentially impact your business operations. We conduct comprehensive risk assessments tailored to your industry and business environment, followed by the development and implementation of risk mitigation strategies."
                      }
                      benefits={
                        "Benefits: Identify, prioritize, and mitigate risks to enhance resilience and safeguard business objectives with effective strategies."
                      }
                      title={"Risk Assessment & Mitigation:"}
                    ></Accordion>
                  </div>
                </ul>
              </div>
              <div className="bg-white flex items-center p-2 ">
                <img
                  src={riskImg}
                  className="w-full h-40 sm:h-48 object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesPage;
