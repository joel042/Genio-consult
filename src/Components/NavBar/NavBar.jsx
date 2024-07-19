import React, { useState } from "react";
import genioLogo from "./genioLogo.png";
<script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>;




function NavBar() {
  let Links = [
    { name: "Home", link: "./" },
    { name: "About us", link: "./" },
    { name: "Careers", link: "./" },
    { name: "Service", link: "./" },
    { name: "Contact Us", link: "./" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <>
      <div className=" ">
        <div className="shadow-md bg-[#156379]  fixed top-0 left-0 w-full">
          <div className="md:flex items-center justify-between  py-4 md:px-10 ">
            <div>
              <img src={genioLogo} alt="" />
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="text-4xl text-white absolute right-8 top-6 cursor-pointer md:hidden"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#156379] md:z-auto z-[-1] left-0
                     transition-all duration-500 ease-in w-full md:w-auto md:pl-0 ${
                       open ? "top-20" : "top-[-490px]"
                     } `}
            >
              {Links.map((link) => (
                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
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
