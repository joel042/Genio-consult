import React from 'react';
// import NavBar from '../NavBar/NavBar';
import ContactUS from "../ContactUs/ContactUS";
import Subscribe from "../Subscribe/Subscribe";
import OurPartners from "../OurPartners/OurPartners";
import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import HeroTwo from "../Hero/HeroTwo";
import OurServices from '../OurServices/OurServices';

const Home = () => {
    return (
      <div>
        <Hero />
        <HeroTwo />
        <OurServices />
        <AboutUs />
        <OurPartners />
        <Subscribe />
        <ContactUS />
      </div>
    );
}

export default Home;
