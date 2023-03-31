import React from "react";
import left from "../images/right.png";
import Count from "../images/count.png";
import Reading from "../images/reading.png";
import Writing from "../images/writing.png";

const Overview = () => {
  return (
    <div className="h-auto w-2/3 flex flex-col ml-10 ">
      <div className="flex flex-row">
        <div className="relative h-96 w-40 ml-0 py-16">
          <div className="w-40 h-86">
            <img className="h-full w-full" src={left} alt="left" />
          </div>
          <div className="absolute -left-20 top-80 w-40 h-20 bg-white z-10 rounded-lg drop-shadow-lg">
            <div className="flex flex-row">
              <div className=" w-1/3 items-center justify-start leading-none">
                <img className="w-9 h-9 ml-6 mt-5" src={Count} alt="count" />
              </div>

              <div className=" w-2/3 py-4 flex flex-col items-center justify-center">
                <span className=" text-xs text-[#111231] font-medium font-poppins">Counting</span>
                <span className=" font-poppins font-semibold text-xl text-[#111231]">10,0000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-56 h-96 my-16 ml-10 flex flex-col justify-start">
          <img className=" w-36 h-44" src={Writing} alt="writing"></img>
          <img className=" w-56 h-64 pt-8" src={Reading} alt="reading"></img>
        </div>

        <div className=" w-1/2 h-auto ml-20 my-28 flex flex-col justify-start">
          <span className="text-black1/75 font-poppins font-medium text-xl flex justify-start">Testimonial</span>
          <span className=" text-black1 font-poppins font-semibold text-4xl">
            Everything you need is in one integrated app.
          </span>
          <span className=" text-black1/75 font-poppins font-medium text-base">
            When we were comparing tools, we settled on dote since it combines
            billing, admissions, and a fantastic visual experience for families.
          </span>
          <button className=" w-40 h-10 mt-1 font-poppins font-medium text-base px-4">Learn More</button>
        </div>
      </div>
      




    </div>
  );
};

export default Overview;
