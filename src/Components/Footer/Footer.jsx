import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex items-center z-[10] bg-[#156379]">
      <div className="container mx-auto py-10 px-4 flex justify-around text-white md:flex-row gap-7 flex-col-reverse ">
        {/* copyright */}
        <div className="flex flex-col gap-8 pt-2 justify-center">
          <p className="pt-3">Copyright © 2024 Genio Incorporated Consult</p>

          <div className="socialIcons  flex flex-col gap-1 ">
            <div>
              <p className="">All rights reserved</p>
            </div>
            <div className="space-x-5 text-2xl">
              <ion-icon name="logo-instagram"></ion-icon>
              <ion-icon name="logo-facebook"></ion-icon>
              <ion-icon name="logo-twitter"></ion-icon>
              <ion-icon name="logo-youtube"></ion-icon>
            </div>
          </div>
        </div>
        {/* companyinfo */}
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-xl">Company Info</h1>
          <a href="/about">
            <p>About Us</p>
          </a>
          <a href="/Careers">
            <p>Careers</p>
          </a>
          <a href="/blog">
            <p>Blog</p>
          </a>
        </div>
        {/* features */}
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-xl">Features</h1>
          <a href="/Webiners">
            <p>Webiners</p>
          </a>
          <a href="/Podcast">
            <p>Podcast</p>
          </a>
          <a href="/Video">
            <p>Video Contents</p>
          </a>
        </div>
        {/* getintouch */}
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-xl">Get In Touch</h1>

          <p className="flex">
            <div className="text-2xl ">
              <ion-icon name="call"></ion-icon>
            </div>
            +234 (8) 067 446 121
          </p>

          <p className="flex ">
            <div className="text-2xl  pe-1">
              <ion-icon name="pin"></ion-icon>
            </div>
            33 Kofo Abayomi, Victoria Island, Lagos State.
          </p>
          <a className="flex" href="mailto:genio.incorporated@gmail.com">
            <div className="text-2xl ms-1 z-[1] -rotate-45">
              <ion-icon name="send"></ion-icon>
            </div>
            genio.incorporated@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
