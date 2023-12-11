"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineMenu, MdNotifications } from "react-icons/md";
import Notification from "../navbar/notification";
import AdminProfile from "./adminprofile";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const Navbar = ({ toggleSidebar }: any) => {
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className=" flex items-center justify-between p-2">
        <div className="flex gap-3 items-center" onClick={toggleSidebar}>
          <MdOutlineMenu className="text-lg md:text-2xl cursor-pointer" />
          <span className="self-center text-[24px] font-semibold  dark:text-white">
            Car-Trendz
          </span>
        </div>

        <div className="flex md:order-2 gap-[10px] items-center">
          <MdNotifications
            className="text-lg md:text-[24px] cursor-pointer"
            onClick={toggleNotification}
          />
          <IoPersonCircleOutline
            className="text-lg md:text-[24px] cursor-pointer"
            onClick={toggleProfile}
          />
        </div>

        {/* Responsive Search */}
        <div className="items-center w-full md:w-auto md:order-1 md:flex hidden">
          <label className="sr-only">Search</label>
          <div className="relative">
            <input
              type="text"
              className="block p-2 ps-10 text-sm text-gray-900 border rounded-lg w-48 md:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
            <FaSearch className="text-gray-700 absolute left-3 top-[50%] transform -translate-y-[50%]" />
          </div>
        </div>
      </div>

      {/* Notifications and Profile sections */}
      {showNotification && <Notification />}
      {showProfile && <AdminProfile />}
    </nav>
  );
};

export default Navbar;


{
  /* <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link href={"/"}>
              <li className="block py-2 px-3 text-white  rounded md:text-orange-500 md:p-0 ">
                Home
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="block py-2 px-3 text-white  rounded md:text-orange-500 md:p-0">
                About
              </li>
            </Link>
            <Link href={"/service"}>
              <li className="block py-2 px-3 text-white  rounded md:text-orange-500 md:p-0">
                Service
              </li>
            </Link>
            <Link href={"/contact"}>
              <li className="block py-2 px-3 text-white  rounded md:text-orange-500 md:p-0">
                Contact
              </li>
            </Link>
          </ul> */
}
