import React from "react";
// import NavBar from '../NavBar/NavBar';
import ContactUS from "../ContactUs/ContactUS";
import Subscribe from "../Subscribe/Subscribe";
import OurPartners from "../OurPartners/OurPartners";
import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
// import HeroTwo from "../Hero/HeroTwo";
import HeroBox from "../Hero/HeroBox";
const Home = () => {
  return (
    <div>
      <Hero />
      <HeroBox />
      {/* <HeroTwo /> */}
      <AboutUs />
      <OurPartners />
      <Subscribe />
      <ContactUS />
    </div>
  );
};

export default Home;
