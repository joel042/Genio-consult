import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ContactUS from "./Components/ContactUs/ContactUS";
import Subscribe from "./Components/Subscribe/Subscribe";
import OurPartners from "./Components/OurPartners/OurPartners";
import AboutUs from "./Components/AboutUs/AboutUs";
import Hero from "./Components/Hero/Hero";


function App() {
  return (
    <>
      <div className=" min-h-screen flex flex-col">
        <NavBar />
        <Hero />

        <AboutUs />
        <OurPartners />
        <Subscribe />
        <ContactUS />
        <Footer />
      </div>
    </>
  );
}

export default App;
