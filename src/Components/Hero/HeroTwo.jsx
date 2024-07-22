import React from 'react';
import shop from "./Vector.png";
import notebook from "./carbon_notebook (1).png";
import toolsbox from "./carbon_tool-box.png";


const HeroTwo = () => {
    return (
      <div className="">
        <div className=" container mt-10 mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-white p-6   shadow">
              <div className="size-14 ">
                <img src={notebook} alt="" />
              </div>
              <h2 class="text-3xl font-bold">Strategy</h2>
              <p className="leading-7 pe-3 ">
                Helping organizations define their strategic direction, set
                goals, and develop actionable plans
              </p>
            </div>
            <div class="bg-[#104a5b] p-6 shadow">
              <div className="size-14">
                <img src={toolsbox} alt="" />
              </div>

              <h2 class="text-3xl font-bold text-white">Technology</h2>
              <p className="text-white leading-7">
                TImplementing innovative technology solutions to support
                business objectives and digital transformation
              </p>
            </div>
            <div class="bg-white p-6  shadow">
              <div className="size-14">
                <img src={shop} alt="" />
              </div>
              <h2 class="text-3xl font-bold ">Risk Management</h2>
              <p className="leading-7">
                 Identifying, assessing, and mitigating risks to protect assets
                and ensure business continuity.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HeroTwo;
