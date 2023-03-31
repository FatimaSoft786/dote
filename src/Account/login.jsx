import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const handleLogin = () => {
    // perform login logic here...
    setIsLoggedIn(false);
  };

  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/register");
  };

  const navigateToForgot = () => {
    navigate("/forgot");
  };
  const navigateToDashboard = () => {
    navigate("/sidebar");
    handleLogin();
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className=" lg:w-1/3 sm:w-full md:w-1/2 h-auto rounded-xl shadow-md shadow-primary items-center mt-60">
        <h2 className="mt-5 text-center text-3xl font-bold text-primary">
          Login
        </h2>

        <form
          className="mt-8 space-y-3 lg:mx-20 sm:mx-4"
          action="#"
          method="POST"
        >
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded relative bg-white block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-primary focus:bg-white focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
          </div>

          <div className=" rounded-md shadow-sm">
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-primary focus:bg-white focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
        </form>

        <div className=" flex flex-row items-end justify-end lg:mx-20 sm:mx-4 mt-2">
          <div className="text-sm items-end">
            <span
              className="font-medium text-primary hover:text-primary cursor-pointer"
              onClick={navigateToForgot}
            >
              Forgot your password?
            </span>
          </div>
        </div>

        <div className=" flex justify-center items-center lg:mx-20 sm:mx-4 mt-4 bg-primary border text-white mb-3 rounded hover:bg-transparent hover:text-primary hover:border-primary cursor-pointer">
          <span
            className=" items-center text-lg leading-none font-medium py-3.5"
            onClick={() => {
              navigateToDashboard();
              
            }}
          >
            Login
          </span>
        </div>

        <div className=" flex justify-center flex-row lg:mx-20 sm:mx-4 mt-2 mb-5">
          <span className=" font-regular text-black text-sm items-center">
            Don't have an account?
          </span>
          <span
            className=" text-primary font-medium text-lg leading-none cursor-pointer"
            onClick={navigateToRegister}
          >
            SignUp
          </span>
        </div>
      </div>
    </div>
  );
};
export default Login;
