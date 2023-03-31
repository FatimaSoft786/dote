import React from "react";
import charge from "../images/one_time_charge.png";
import tution from "../images/tution.png";
import discounts from "../images/dicounts.png";
import attandance from "../images/attandance_base.png";
import mobile_payment from "../images/mobile_payment.png";
import subsidy from "../images/subsidy.png";


const Billing = () => {
  return (
    <div className=" w-full h-auto mt-10">
      <div className=" shadow-2xl shadow-rose-300 rounded-lg">
        <div className=" grid grid-cols-3 gap-28">
          <div className=" flex flex-col justify-start ml-28 mt-10">
            <img className=" w-16 h-16" src={tution} alt="" />
            <hi className=" font-semibold font-poppins text-black1 text-base mt-8">
              Tuition collection
            </hi>
            <p className=" font-regular font-poppins  text-black1 mt-3 w-60 h-auto">
              Set up recurring statements once and Dote will automate the rest{" "}
            </p>
          </div>

          <div className=" flex flex-col justify-start ml-28 mt-10">
            <img className=" w-16 h-16" src={charge} alt="" />
            <hi className=" font-semibold font-poppins text-black text-base mt-8">
            One-time charges
            </hi>
            <p className=" font-regular font-poppins text-black1 mt-3 w-60 h-auto">
            Add additional one-time charges to a student’s statement for late pick up, lunches, or field trips
            </p>
          </div>

          <div className=" flex flex-col justify-start ml-28 mt-10">
            <img className=" w-16 h-16" src={discounts} alt="" />
            <hi className=" font-semibold font-poppins text-black text-base mt-8">
            Discounts
            </hi>
            <p className=" font-regular font-poppins text-black1 mt-3 w-60 h-auto">
            Easily apply discounts as a percentage or a dollar amount
            </p>
          </div>

          <div className=" flex flex-col justify-start ml-28 mt-10">
            <img className=" w-16 h-16" src={attandance} alt="" />
            <hi className=" font-semibold font-poppins text-black text-base mt-8">
            Attendance-based billing
            </hi>
            <p className=" font-regular font-poppins text-black1 mt-3 w-60 h-auto">
            Track the hours a student is in school, apply an hourly rate, and seamlessly charge the total amount
            </p>
          </div>

          <div className=" flex flex-col justify-start ml-28 mt-10">
            <img className=" w-16 h-16" src={mobile_payment} alt="" />
            <hi className=" font-semibold font-poppins text-black text-base mt-8">
            Mobile payments & autopay
            </hi>
            <p className=" font-regular text-black1 font-poppins mt-3 w-60 h-auto">
            Allow families to pay while on-the-go and never chase a payment again 
            </p>
          </div>

          <div className=" flex flex-col justify-start ml-28 mt-10">
            <img className=" w-16 h-16" src={subsidy} alt="" />
            <hi className=" font-semibold text-black text-base mt-8">
            Subsidy tracking
            </hi>
            <p className=" font-regular text-black1 font-poppins mt-3 w-60 h-auto">
            Manage and reconcile subsidy funds with ease
            </p>
          </div>
        </div>

        <div className=" flex justify-center items-center w-full h-auto py-10">
          <button className="w-80 h-12 pt-1 font-poppins items-center">
            Request a demo for these features
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-auto py-24">
        <label className=" font-extrabold text-4xl text-black w-1/3 text-center">
          On Dote, join the millions of educators and families.
        </label>
        <label className=" font-medium  font-poppins text-base text-[#141E3E]">
          See tips & tricks for using Dote with at home childcare.
        </label>
        <button className=" font-poppins w-80 h-12 pt-1">Nannies & childcare</button>
      </div>
    </div>
  );
};

export default Billing;
