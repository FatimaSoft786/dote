import { NavLink, useLocation } from "react-router-dom";
import {AiOutlineDown} from "react-icons/ai";
import Hamburger from "./Hamburger";
import React, { useState, useEffect } from "react";

const Nav = () => {
  const location = useLocation();

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (location.pathname === "/sidebar") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "block";
    }
  }, [location.pathname]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
   <div className=" w-full h-16 bg-white shadow-lg  fixed top-0 z-50">
   <div className="navbar container w-auto relative h-full">
        <div className="flex flex-row mx-10 justify-between h-full w-full">

          <div className="cursor-pointer w-10 flex items-center flex-row space-x-1">
            <img
              className=" w-5 h-5"
              src="https://cdn-icons-png.flaticon.com/512/565/565665.png"
              alt="logo"
            />
            <span className="font-poppins font-semibold text-2xl text-black1 leading-none">
              Dote
            </span>
          </div>

          <div className="md:flex space-x-6 hidden items-center">
            <NavLink className="nav-links" to="/">
              <span className=" font-poppins font-medium text-base">
                Solution
              </span>
            </NavLink>
            <NavLink className="nav-links" to="/resources">
              <span className=" font-poppins font-medium text-base leading-none">
                Resources
              </span>
            </NavLink>
            <NavLink className="nav-links" to="/pricing">
              <span className=" font-poppins font-medium text-base leading-none">
                Pricing
              </span>
            </NavLink>
            <NavLink className="nav-links" to="/login">
              <span className=" font-poppins font-medium text-base leading-none">
                Login
              </span>
            </NavLink>

            <div className=" w-0.5 h-auto bg-slate-200 py-5"></div>
            <button className="flex items-center px-4 py-3 bg-blue-500 text-primary bg-primary/10 font-poppins font-medium text-base rounded-md leading-none">
            ENGLISH
      <AiOutlineDown className="ml-2" />
    </button>
            <button className=" font-poppins font-medium text-base leading-none py-3 px-4">Get a Demo</button>
          </div>

          <button
            id="menu-btn"
            className="block md:hidden"
            onClick={handleOpen}
          >
            <Hamburger />
          </button>
        </div>
        {open && (
          <div>
            <div className="absolute bg-red-100 flex flex-col w-full font-bold py-8 space-y-3 self-end drop-shadow-2xl pl-3 lg:hidden">
              <NavLink className="nav-links" to="/">
                Solution
              </NavLink>
              <NavLink className="nav-links" to="/">
                Resources
              </NavLink>
              <NavLink className="nav-links" to="/">
                Pricing
              </NavLink>
              <NavLink className="nav-links" to="/">
                Login
              </NavLink>
              <button>English</button>
              <button>Get Demo</button>
            </div>
          </div>
        )}
      </div>
   </div>

      
    </>
  );
};

export default Nav;

// import React, { Fragment } from 'react';
// import { Menu, Transition } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/solid';

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ');
//   }

// const Nav = () => {

//     return (
//         <div className='w-full h-20 flex justify-between items-center px-8 text-white'>
//           <h1 className='text-2xl font-bold text-[#00df9a]'>REACT.</h1>
//           <ul className='flex items-center'>
//             <li className='p-4'>
//               <Menu as='div' className='relative inline-block text-left'>
//                 <Menu.Button>Services</Menu.Button>
//                 <Transition
//                   as={Fragment}
//                   enter='transition ease-out duration-100'
//                   enterFrom='transform opacity-0 scale-95'
//                   enterTo='transform opacity-100 scale-100'
//                   leave='transition ease-in duration-100'
//                   leaveFrom='transform opacity-100 scale-100'
//                   leaveTo='transform opacity-0 scale-95'
//                 >
//                   <Menu.Items className='origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
//                     <div className='py-1'>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href='#'
//                             className={classNames(
//                               active
//                                 ? 'bg-gray-100 text-gray-900'
//                                 : 'text-gray-700',
//                               'block px-4 py-2 text-sm'
//                             )}
//                           >
//                             For Companies
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href='#'
//                             className={classNames(
//                               active
//                                 ? 'bg-gray-100 text-gray-900'
//                                 : 'text-gray-700',
//                               'block px-4 py-2 text-sm'
//                             )}
//                           >
//                             For Investors
//                           </a>
//                         )}
//                       </Menu.Item>
//                     </div>
//                   </Menu.Items>
//                 </Transition>
//               </Menu>
//             </li>
//             <li className='p-4 text-black'>Banking</li>
//             <li className='p-4'>Company</li>
//             <li className='p-4'>Resources</li>
//             <li className='p-4'>
//               <Menu as='div' className='relative inline-block text-left'>
//                 <div>
//                   <Menu.Button className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
//                     Account
//                     <ChevronDownIcon
//                       className='-mr-1 ml-2 h-5 w-5'
//                       aria-hidden='true'
//                     />
//                   </Menu.Button>
//                 </div>

//                 <Transition
//                   as={Fragment}
//                   enter='transition ease-out duration-100'
//                   enterFrom='transform opacity-0 scale-95'
//                   enterTo='transform opacity-100 scale-100'
//                   leave='transition ease-in duration-75'
//                   leaveFrom='transform opacity-100 scale-100'
//                   leaveTo='transform opacity-0 scale-95'
//                 >
//                   <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none'>
//                     <div className='py-1'>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href='#'
//                             className={classNames(
//                               active
//                                 ? 'bg-gray-100 text-gray-900'
//                                 : 'text-gray-700',
//                               'block px-4 py-2 text-sm'
//                             )}
//                           >
//                             Edit
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href='#'
//                             className={classNames(
//                               active
//                                 ? 'bg-gray-100 text-gray-900'
//                                 : 'text-gray-700',
//                               'block px-4 py-2 text-sm'
//                             )}
//                           >
//                             Duplicate
//                           </a>
//                         )}
//                       </Menu.Item>
//                     </div>
//                     <div className='py-1'>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href='#'
//                             className={classNames(
//                               active
//                                 ? 'bg-gray-100 text-gray-900'
//                                 : 'text-gray-700',
//                               'block px-4 py-2 text-sm'
//                             )}
//                           >
//                             Archive
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href='#'
//                             className={classNames(
//                               active
//                                 ? 'bg-gray-100 text-gray-900'
//                                 : 'text-gray-700',
//                               'block px-4 py-2 text-sm'
//                             )}
//                           >
//                             Move
//                           </a>
//                         )}
//                       </Menu.Item>
//                     </div>
//                     <div className='py-1'>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href='#'
//                             className={classNames(
//                               active
//                                 ? 'bg-gray-100 text-gray-900'
//                                 : 'text-gray-700',
//                               'block px-4 py-2 text-sm'
//                             )}
//                           >
//                             Share
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href='#'
//                             className={classNames(
//                               active
//                                 ? 'bg-gray-100 text-gray-900'
//                                 : 'text-gray-700',
//                               'block px-4 py-2 text-sm'
//                             )}
//                           >
//                             Add to favorites
//                           </a>
//                         )}
//                       </Menu.Item>
//                     </div>
//                     <div className='py-1'>
//                       <Menu.Item disabled>
//                         {({ active }) => (
//                           <a
//                             href='#'
//                             className={classNames(
//                               active
//                                 ? 'bg-gray-100 text-gray-900'
//                                 : 'text-gray-700',
//                               'block px-4 py-2 text-sm'
//                             )}
//                           >
//                             Delete
//                           </a>
//                         )}
//                       </Menu.Item>
//                     </div>
//                   </Menu.Items>
//                 </Transition>
//               </Menu>
//             </li>
//           </ul>
//         </div>
//       );

// };

// export default Nav
