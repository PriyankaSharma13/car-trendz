"use client";
import Image from "next/image";
import React from "react";
import avatar from "../../../../../assets/avata.png"
import Link from "next/link";
const AdminProfile = () => {

  
  return (
    <>
      {/* --- Dropdown menu ---- */}
      <div className="z-10 absolute right-0  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
        <div className="flex p-2">
        <Image
            className="rounded-full w-11 h-11"
            src={avatar}
            alt="Jese image"
          />
         
          <div className=" px-2 py-3 text-sm text-gray-900 dark:text-white">
          <div className="font-medium text-red-500">Bonnie Green</div>
          <div className="font-medium truncate">name@gmail.com</div>
        </div>
        </div>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <Link
              href="/admin/dashboard"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/admin/setting"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              href="/admin/brands"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Brands
            </Link>
          </li>
        </ul>
        <div className="py-2">
          <Link
            href="/admin/sign-out"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
