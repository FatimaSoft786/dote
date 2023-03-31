import React, { useState } from "react";
import Left from "../images/left.png";
import Frame2 from "../images/frame2.png";
import Frame3 from "../images/frame3.png";
import Right from "../images/right.png";
import Overview from "../HomeSection/Overview";
import Reviews from "../HomeSection/Reviews";
import Billing from "../Preschool/Billing&Payment";
import Features from "./Featues";
import Footer from "./Footer";
import Communication from "../HomeSection/Communication";
import CenterManagement from "../HomeSection/CenterManagement";

const Home = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [selectedButton, setSelectedButton] = useState("button1");

  const [showDiv, setShowDiv] = useState(true);

  const handleButtonClick = (check) => {
    setShowDiv(check);
  };

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="flex flex-col h-auto w-auto">
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between flex-col">
          <span className="text-primary pt-12 mt-20 font-bold font-poppins text-xl leading-none">
            #1 Childcare Section
          </span>

          <span className=" text-6xl items-center text-black1 font-extrabold font-poppins leading-none">
            Improve early education
          </span>

          <div className="flex items-center w-2/3 ml-20 my-1">
            <span className="text-center font-poppins font-regular text-black1/75 text-xs pt-2">
              Dote's all-in-one platform is designed to save you and your staff
              time because it is simple to set up and even simpler to use.
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <div className=" w-1/3 h-12  bg-white shadow-md shadow-primary  rounded-lg border border-white">
          <div className="flex items-center h-full">
            <input
              type="text"
              placeholder="Enter a email address"
              className="w-full h-full rounded-lg focus:outline-none leading-none pl-2 font-poppins font-medium text-sm text-black1/75 "
            />
            <button className="bg-primary text-white rounded-lg hover:bg-primary hover:text-primary hover:bg-transparent w-1/4 h-full py-0 ">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="w-32 h-80 ml-32 mt-5">
          <img className="w-full h-full" src={Left} alt="left" />
        </div>

        <div className="w-1/2 h-40 mt-44">
          <img className="w-full h-full" src={Frame2} alt="left" />
        </div>
        <div className=" w-40 h-40 mt-44">
          <img className="w-full h-full" src={Frame3} alt="left" />
        </div>

        <div className="w-190 h-80 mr-32 mt-5">
          <img className="w-full h-full" src={Right} alt="right" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="font-bold font-poppins text-5xl my-20 max-w-4xl text-center">
          Your full software solution for childcare and preschool
        </div>
      </div>

      <div className=" ml-32">
        <div>
          <button
            className={
              selectedButton === "button1"
                ? " mr-20 py-2 px-10 w-30 h-14 bg-transparent text-primary border border-primary shadow-lg shadow-rose-300 font-poppins font-medium text-base"
                : "mr-20 bg-white text-primary py-2 px-10 border-white border w-30 h-14 font-poppins font-medium text-base"
            }
            onClick={() => {
              handleClick("button1");
              setActiveButton(1);
              handleButtonClick(false);
            }}
          >
            Overview
          </button>

          <button
            className={
              selectedButton === "button2"
                ? " mr-20 py-2 px-10 w-30 h-14 bg-transparent text-primary border border-primary shadow-lg shadow-rose-300 font-poppins font-medium text-base"
                : "mr-20 bg-white text-primary py-2 px-10 border-white border w-30 h-14 font-poppins font-medium text-base"
            }
            onClick={() => {
              handleClick("button2");
              setActiveButton(2);
              handleButtonClick(false);
            }}
          >
            Billing & payments
          </button>

          <button
            className={
              selectedButton === "button3"
                ? " mr-20 py-2 px-10 w-30 h-14 bg-transparent text-primary border border-primary shadow-lg shadow-rose-300 font-poppins font-medium text-base"
                : "mr-20 bg-white text-primary py-2 px-10 border-white border w-30 h-14 font-poppins font-medium text-base"
            }
            onClick={() => {
              handleClick("button3");
              setActiveButton(3);
              handleButtonClick(false);
            }}
          >
            Communication
          </button>

          <button
            className={
              selectedButton === "button4"
                ? " mr-20 py-2 px-10 w-30 h-14 bg-transparent text-primary border border-primary shadow-lg shadow-rose-300 font-poppins font-medium text-base"
                : "mr-20 bg-white text-primary py-2 px-10 border-white border w-30 h-14 font-poppins font-medium text-base"
            }
            onClick={() => {
              handleClick("button4");
              setActiveButton(4);
              handleButtonClick(false);
            }}
          >
            Childcare management
          </button>
          {showDiv && (
            <div className="ml-0">
              <Overview />
              <Features />
            </div>
          )}

          {activeButton === 1 && (
            <>
              <Overview />
              <Features />
            </>
          )}
          {activeButton === 2 && (
            <div className=" ml-10 mr-32">
              <Billing />
            </div>
          )}
          {activeButton === 3 && (
            <div className=" ml-10 mr-32">
              <Communication />
            </div>
          )}

          {activeButton === 4 && (
            <div className=" ml-10 mr-32">
              <CenterManagement />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
