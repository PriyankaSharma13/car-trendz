"use client";
import axios from "axios";
import { useState } from "react";
import  config from "@/config.json";

interface AddBrandProps {
  onCancel: () => any;
  onConfirm: (newBrandName: string) => any;
}

const AddBrand = ({ onCancel, onConfirm }: AddBrandProps) => {
  const [newBrandName, setNewBrandName] = useState<string>("");


  const handleAddConfirm = async () => {
    try {
      const newBrand = {
        name: newBrandName,
      };
      console.log("hfhf", newBrand);

      const res = await axios.post(
        `${config.apiBaseEndpoint}/brands`,
        newBrand
      );

      const addedBrand = res.data;
      console.log("gdg", addedBrand);
      setNewBrandName("");
      onConfirm(newBrandName);
    } catch (error) {
      console.error("Error adding brand:", error);
    }
  };

  return (
    <>
      <div className=" absolute left-[30%] top-[20%]  justify-center items-center w-full max-h-full">
        <div className=" p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            ></button>
            <div className="p-4 md:p-5  text-center">
              <input
                type="text"
                className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Add brand Name...."
                onChange={(e) => setNewBrandName(e.target.value)}
                value={newBrandName}
              />
            </div>
            <div className="">
              <button
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                onClick={handleAddConfirm}
              >
                Yes, I'm sure
              </button>
              <button
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={onCancel}
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBrand;
