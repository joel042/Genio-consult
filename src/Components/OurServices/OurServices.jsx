import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Link } from "react-router-dom"; 

// import StrategicImg from "../Pages/cover.png";
import financialImg from "../Pages/cover (1).png";
// import StrategicImg from "../Pages/cover (4).png";
import TechnologyImg from "../Pages/cover (3).png";
import operationsImg from "../Pages/cover (4).png";
import inovationImg from "../Pages/cover (5).png";
import riskImg from "../Pages/cover (6).png";

const OurServices = () => {

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll:1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

  return (
    <>
      <div className="w-3/4 m-auto">
        <div className="mt-20  pt-2">
          <div>
            <h1 className="text-3xl flex justify-center text-[#1B7B97]   font-semibold mb-7">
              Services
            </h1>
          </div>
          <Slider {...settings}>
            {services.map((service) => (
              <div
                key={service.id}
                className=" bg-white border h-[500px]  text-black rounded  "
              >
                <div className="rounded-t-xl h-56 bg-blue-50 flex justify-center items-center">
                  <img
                    src={service.Img}
                    alt=""
                    className="w-full  h-full object-cover"
                  />
                </div>
                <div className="flex flex-col  gap-2 leading-7  ps-2">
                  <h3 className="font-bold text-xl ">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <div className=" absolute bottom-3 ">
                <Link to={service.href}>

                     <button  className=" bg-[#E0F1E0]   text-green-700 font-semibold tex-lg px-6 py-1   ">
                    Read More
                  </button>
                </Link>
                 
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

const services = [
  {
    id: 1,
    title: "Strategic Planning",
    description:
      "  Helping organizations define their strategic direction, set goals, and develop actionable plans.",

    Img: TechnologyImg,
    href: "/OurServicesPage#StrategicPlanning"
  },
  {
    id: 2,
    title: "Financial Consulting",
    description:
      " Our Financial Planning and Analysis (FP&A) services help you create detailed financial plans and conduct thorough analyses to support strategic decision-making.",
    Img: financialImg,
  href: "/OurServicesPage#Financial",
    
  },
  {
    id: 3,
    title: "Operations Improvement",
    description:
      "Our process optimization services aim to enhance the efficiency and effectiveness of your business operations.",
    Img: operationsImg,
    href: "/OurServicesPage#Operations",
  },
  {
    id: 4,
    title: "Innovation and Product Development",
    description:
      "Our innovation strategy services help you cultivate a culture of innovation and develop a strategic framework for driving continuous improvement and growth. ",
    Img: inovationImg,
    href: "/OurServicesPage#innovation",
  },
  {
    id: 5,
    title: "Risk Management",
    description:
      "Our risk management services involve identifying, assessing, and prioritizing risks that could potentially impact your business operations.",
    Img: riskImg,
    href: "/OurServicesPage#risk",
  },
];

export default OurServices;
