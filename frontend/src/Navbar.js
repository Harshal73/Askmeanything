import React, { useState } from "react";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <div className="flex justify-between items-center w-92% mx-auto bg-black">
      <div>
        <h2 className=" font-signature text-2xl text-white px-5 ">ASker</h2>
      </div>
      <div className=" duration-500 md:static absolute  md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5"></div>

      <div className="md:hidden flex items-center">
        <button
          className="text-white md:hidden inline-flex items-center
        justify-center p-2 rounded-md md:text-white hover:text-white
        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={toggleNavbar}
        >
          {isClick ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        {isClick && (
          <div className="md:hidden">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 pt-10 ">
              <li>
                <a
                  className="text-white  hover:text-orange-500 pr-10  "
                  href="#"
                >
                  Forums
                </a>
              </li>
              <li>
                <a className="text-white hover:text-orange-500 pr-10" href="#">
                  Community Standards
                </a>
              </li>
              <li>
                <a className="text-white hover:text-orange-500" href="#">
                  All Activity
                </a>
              </li>
              <li>
                <a className="text-white hover:text-orange-500" href="#">
                  More
                </a>
              </li>
              <li>
                <a className="text-white hover:text-orange-500" href="#">
                  Exsisting User?,Sign In
                </a>
              </li>
              <li>
                <a className="text-white hover:text-orange-500" href="#">
                  Exsisting User?,Sign In
                </a>
              </li>
              <li>
                <a className="text-white hover:text-orange-500" href="#">
                  Sign Up
                </a>
              </li>
              <label className="relative block">
                <span className=" flex flex-row"></span>
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-32 border text-black border-slate-300 rounded-md   shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Search "
                  type="text"
                  name="search"
                />
              </label>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
