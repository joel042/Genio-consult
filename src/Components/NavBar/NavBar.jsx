import React, { useState } from "react";
import genioLogo from "./genioLogo.png";
<script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>;




function NavBar() {
  let Links = [
    { name: "Home", link: "./" },
    { name: "About us", link: "./AboutUsPage" },
    { name: "Careers", link: "./" },
    { name: "Service", link: "./OurServicesPage" },
    { name: "Contact Us", link: "./ContactUsPage" },
  ];
  
  let [open, setOpen] = useState(false);

  return (
    <>
      <div className=" ">
        <div className="shadow-md fixed bg-[#2094b5]  z-[10]  top-0 left-0 w-full">
          <div className="md:flex items-center justify-around py-4 md:px-10 ">
            <div className="ms-2">
              <img src={genioLogo} alt="genioLogo" />
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="text-4xl text-white absolute right-8 top-6 cursor-pointer md:hidden"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-1 text-end absolute md:static bg-[#2094b5] rounded z-10 right-0 me-2
                     transition-all duration-500 ease-in  md:w-auto md:pl-0 ${
                       open ? "top-20" : "top-[-490px]"
                     } `}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="md:ml-8 m-5 hover:border-b-2 text-[17px] font-bold md:m-0 "
                >
                  <a
                    href={link.link}
                    className="text-white hover:text-gray-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
