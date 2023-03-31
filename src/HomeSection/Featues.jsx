import React from "react";
import Bulb from "../images/bulb.png";
import Admin from "../images/administration.png";

const Features = () => {
  return (
    <div className=" w-full h-auto">
      <img className=" w-36 h-36 ml-20" src={Bulb} alt="bulb"></img>
      <span className=" font-bold font-poppins max-w-3xl ml-80 text-5xl leading-none">
        Designed with your needs in mind
      </span>

      <div className=" grid grid-cols-3 gap-1 mx-32">
        <div className="bg-white shadow-lg shadow-rose-300 border border-white rounded-lg w-96 h-80  mt-5 ml-5 flex flex-col pb-5">
          <div className="flex justify-center items-center  w-full h-16">
            <img
              className=" w-16 h-full items-center mt-10"
              src={Admin}
              alt="admin"
            />
          </div>
          <div className="mt-10 font-semibold font-poppins text-2xl flex justify-center">
            Administrators & Directors
          </div>
          <div className=" mt-2 font-poppins font-regular text-base flex items-center mx-4">
            Efficiently run your program, from in-home to center-based,
            single-site and multi-site. Efficiently run your program, from
            in-home to center-based, single-site and multi-site.
          </div>

          <div className=" flex justify-center h-10 bg-primary mx-32 mt-5 rounded-lg">
            <span className=" font-poppins font-medium text-xs text-white items-center text-center mt-2.5">
              Learn more
            </span>
          </div>
        </div>

        <div className=" bg-white shadow-lg shadow-red-500/50 border border-white rounded-lg w-96 h-80  mt-5 ml-5 flex flex-col pb-5">
          <div className="flex justify-center items-center  w-full h-16">
            <img
              className=" w-16 h-full items-center mt-10"
              src={Admin}
              alt="admin"
            />
          </div>
          <div className="mt-10 font-bold text-xl flex justify-center">
            Administrators & Directors
          </div>
          <div className=" mt-2 font-regular flex items-center mx-4">
            Efficiently run your program, from in-home to center-based,
            single-site and multi-site. Efficiently run your program, from
            in-home to center-based, single-site and multi-site.
          </div>

          <div className=" flex justify-center h-10 bg-primary mx-32 mt-5 rounded-lg">
            <span className=" font-poppins font-medium text-xs text-white items-center text-center mt-2.5">
              Learn more
            </span>
          </div>
        </div>

        <div className="bg-white shadow-lg shadow-red-500/50 border border-white rounded-lg w-96 h-80  mt-5 ml-5 flex flex-col pb-5">
          <div className="flex justify-center items-center  w-full h-16">
            <img
              className=" w-16 h-full items-center mt-10"
              src={Admin}
              alt="admin"
            />
          </div>
          <div className="mt-10 font-bold text-xl flex justify-center">
            Administrators & Directors
          </div>
          <div className=" mt-2 font-regular flex items-center mx-4">
            Efficiently run your program, from in-home to center-based,
            single-site and multi-site. Efficiently run your program, from
            in-home to center-based, single-site and multi-site.
          </div>

          <div className=" flex justify-center h-10 bg-primary mx-32 mt-5 rounded-lg">
            <span className=" font-poppins font-medium text-xs text-white items-center text-center mt-2.5">
              Learn more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
