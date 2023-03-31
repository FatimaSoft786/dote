import React, { useState } from "react";
import Color1 from "../images/Color1.png";
import Payment from "../Preschool/Billing&Payment";
import Footer from "../HomeSection/Footer";
import Communication from "../Preschool/Communication";
import CenterManagement from "./CenterManagement";

const PreSchool = () => {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className=" w-full h-auto">
      <div className="relative h-auto">
        <img className="w-full h-96" src={Color1} alt="example" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
          <h1 className="text-black text-6xl font-extrabold">
            The day of your child in real time
          </h1>
          <p className="text-black text-lg">
            Easy and intuitive school communication. Invite your school
          </p>

          <div className=" w-auto h-auto flex flex-row">
            <button className="h-12 w-56 mr-5">Request a demo</button>
            <button className="h-12 w-56  bg-transparent text-primary rounded-lg text-xs">
              Watch the video
            </button>
          </div>

          <p className=" text-black font-bold text-4xl mt-8">Dote features</p>
          <p className=" w-96 text-[#141E3E] text-center text-xs">
            The comprehensive preschool and childcare management system
            incorporates real-time communication, automatic billing and
            payments, and much more.
          </p>
        </div>
      </div>

  <div className="flex items-center justify-center w-full mt-3">

  <div>

<button
     className=" mr-20 bg-white text-primary py-2 px-10 rounded-lg border  shadow-sm hover:shadow-lg hover:bg-transparent hover:text-primary hover:border-primary hover:shadow-rose-300  w-30 h-14"
     onClick={() => setActiveButton(1)}
   >
     Billing & payments
   </button>
   <button
     className="mr-20 bg-white text-primary py-2 rounded-lg border  shadow-sm hover:shadow-lg hover:bg-transparent hover:text-primary hover:border-primary hover:shadow-rose-300  w-30 h-14"
     onClick={() => setActiveButton(2)}
   >
     Communication
   </button>
   <button
     className="mr-20 bg-white text-primary py-2 rounded-lg border  shadow-sm hover:shadow-lg  hover:bg-transparent hover:text-primary hover:border-primary hover:shadow-rose-300  w-30 h-14"
     onClick={() => setActiveButton(3)}
   >
     Center management
   </button>
   <button
     className="mr-20 bg-white text-primary py-2 rounded-lg border  shadow-sm hover:shadow-lg  hover:bg-transparent hover:text-primary hover:border-primary hover:shadow-rose-300  w-30 h-14"
     onClick={() => setActiveButton(4)}
   >
     Lesson Plans
   </button>
   <button
     className="mr-20 bg-white text-primary py-2 rounded-lg border  shadow-sm hover:shadow-lg hover:bg-transparent hover:text-primary hover:border-primary hover:shadow-rose-300  w-30 h-14"
     onClick={() => setActiveButton(5)}
   >
     Attandance
   </button>
   <button
     className="mr-20 bg-white text-primary py-2 rounded-lg border  shadow-sm hover:shadow-lg shadow-rose-300 hover:bg-transparent hover:text-primary hover:border-primary hover:shadow-rose-300  w-30 h-14"
     onClick={() => setActiveButton(6)}
   >
     Daily Active Report
   </button>

   {activeButton === 1 && (
 <Payment/>
)}

{
    activeButton === 2 && (
        <Communication/>
    )
}
{
    activeButton === 3 && (
        <CenterManagement/>
    )
}


</div>


  </div>


  <Footer/>

    </div>
  );
};

export default PreSchool;
