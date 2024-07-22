import React from 'react';

const ContactUS = () => {
    return (
      <div className="bg-gray-100 flex flex-col items-center">
        <div>
          <h1 className="text-4xl mt-10 text-[#1B7B97]  font-semibold mb-2 ">
            Contact Us
          </h1>
        </div>
        <div class="  pb-10 flex items-center justify-center ">
          <div class="grid   grid-cols-1 md:grid-cols-3  p-5 max-w-6xl">
            {/* contactBox */}
            <div class="bg-white flex flex-col h-72 items-center p-6  shadow-lg">
              <div className="text-[100px] animate-pulse ">
                <ion-icon name="call"></ion-icon>
              </div>
              <div>
                <p className="font-semibold">+234 (8) 067 446 121 </p>
                <button className="border mt-5 hover:bg-[#1B7B97]  hover:border-none border-[#1B7B97]   text-[#1B7B97] hover:text-white w-[165px] h-12 font-bold rounded-lg">
                  <a href="tel:+2348067446121" className="">
                    Contact Us
                  </a>
                </button>
              </div>
            </div>

            {/* loctaionBox*/}
            <div class=" p-6  bg-[#1B7B97]  shadow-lg">
              <div className="flex flex-col  items-center">
                <div className="text-[110px]  animate-bounce -mb-3  text-white  pt-3  ">
                  <ion-icon name="pin"></ion-icon>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-white font-bold">
                    33 Kofo Abayomi, Victoria Island, Lagos State.
                  </p>
                  <button
                    href="https://maps.app.goo.gl/J4buE7k2rXzVb1KA6"
                    className="border mt-10 border-white w-[165px] h-12 text-white font-bold rounded-lg hover:bg-white hover:text-[#1B7B97] hover:border-none
                  "
                  >
                    {" "}
                    <a
                      href="https://maps.app.goo.gl/J4buE7k2rXzVb1KA6"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Locate Us
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* mailBox */}
            <div class="bg-white flex flex-col h-72 items-center p-6  shadow-lg">
              <div className="text-[100px]  animate-pulse ms-10 z-[1] -rotate-45 ">
                <ion-icon name="send"></ion-icon>
              </div>
              <div>
                <p className="font-semibold ">genio.incorporated@gmail.com </p>
                <button
                  href="mailto:genio.incorporated@gmail.com"
                  className="border ms-11 mt-5 border-[#1B7B97]  text-[#1B7B97] hover:text-white w-[165px] h-12 hover:bg-[#1B7B97]  hover:border-none
                    font-bold rounded-lg"
                >
                  <a href="mailto:genio.incorporated@gmail.com" className="">
                    Mail Us
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ContactUS;
