import React from 'react';

const Subscribe = () => {
    return (
      <>
        {/* <div className="bg-[#1B7B97] absolute top-40 min-h-16  h-16 w-full">
          <div className="container absolute left-28 bg-[#05232c] h-20 mx-auto">
            <div className="flex absolute left- justify-between">
              <div>
                <h1>Subscribe For Latest News or Blog</h1>
              </div>
              <div>
                <input type="text" placeholder="Your email" />
              </div>
            </div>
          </div>
          
        </div> */}

        <div className="container bg-[#104A5B] px-5 mx-auto">
          <div class="flex md:flex-row flex-col  items-center  justify-around p-4 rounded-lg">
            <p class="text-lg font-semibold text-white">
              Subscribe For Latest News or Blog
            </p>
            <div class="relative">
              <input
                type="email"
                placeholder="Your email"
                className="border border-gray-300 w-full  rounded p-2 pr-24 focus:outline-none focus:ring-2 focus:ring-[#ffffff]"
              />
              <button className="absolute right-0 top-0 bottom-0 bg-[#66B764] text-white  px-4 py-2 focus:outline-none hover:bg-[#246c22]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="h-20 hidden md:block bg-[#0B313C] -mt-14 z-[-1]"></div>
      </>
    );
}

export default Subscribe;
