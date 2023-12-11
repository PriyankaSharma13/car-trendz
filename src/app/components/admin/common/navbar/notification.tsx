"use client"
import Image from "next/image";
import React from "react";
import avatar from "../../../../../assets/avata.png"


const Notification = () => { 
    return(
        <> 
  <div
    className="z-20  w-full max-w-sm bg-white divide-y absolute right-0 divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700"
  >
    <div className="block px-4 py-2 font-medium text-center text-red-500 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
      Notifications
    </div>
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <a
        href="#"
        className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div className="flex-shrink-0">
          <Image
            className="rounded-full w-11 h-11"
            src={avatar}
            alt="Jese image"

          />
          <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
            
          </div>
        </div>
        <div className="w-full ps-3">
          <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
            New message from{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Jese Leos
            </span>
            : "Hey, what's up? All set for the presentation?"
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-500">
            a few moments ago
          </div>
        </div>
      </a>
      <a
        href="#"
        className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div className="flex-shrink-0">
          <Image
            className="rounded-full w-11 h-11"
            src={avatar}
            alt="Joseph image"
          />
          <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800">
           
          </div>
        </div>
        <div className="w-full ps-3">
          <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">
              Joseph Mcfall
            </span>{" "}
            and{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              5 others
            </span>{" "}
            started following you.
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-500">
            10 minutes ago
          </div>
        </div>
      </a>
      <a
        href="#"
        className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div className="flex-shrink-0">
          <Image
            className="rounded-full w-11 h-11"
            src={avatar}
            alt="Bonnie image"
          />
          
        </div>
        <div className="w-full ps-3">
          <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">
              Bonnie Green
            </span>{" "}
            and{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              141 others
            </span>{" "}
            love your story. See it and view more stories.
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-500">
            44 minutes ago
          </div>
        </div>
      </a>
      <a
        href="#"
        className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div className="flex-shrink-0">
          <Image
            className="rounded-full w-11 h-11"
            src={avatar}
            alt="Leslie image"
          />
          
        </div>
        <div className="w-full ps-3">
          <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">
              Leslie Livingston
            </span>{" "}
            mentioned you in a comment:{" "}
            <span className="font-medium text-blue-500" >
              @bonnie.green
            </span>{" "}
            what do you say?
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-500">
            1 hour ago
          </div>
        </div>
      </a>
      
    </div>
    
  </div>
</>


    )

}
export default Notification;