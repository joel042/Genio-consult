import React from "react";
import ContactUS from "../ContactUs/ContactUS";

const ContactUsPage = () => {
  return (
    <div className="mt-20 min-h-screen">
      {/*Contact-Us Hero Section */}
      <div className="contact-heroSection">
        <div className="about-heroText">
          <h1>Contact us</h1>
          <p>
            Let's talk about the Growth of your Business. Send us a message and
            we will be in touch within one business day
          </p>
        </div>
      </div>

      <ContactUS />

      {/*Contact-Us Hero Section */}
    </div>
  );
};

export default ContactUsPage;
