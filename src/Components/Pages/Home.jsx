import React from 'react';
// import NavBar from '../NavBar/NavBar';
import ContactUS from "../ContactUs/ContactUS";
import Subscribe from "../Subscribe/Subscribe";
import OurPartners from "../OurPartners/OurPartners";
import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import HeroTwo from "../Hero/HeroTwo";

const Home = () => {
    return (
      <div>
        <Hero />
        <HeroTwo />
        <AboutUs />
        <OurPartners />
        <Subscribe />
        <ContactUS />
      </div>
    );
}

export default Home;
