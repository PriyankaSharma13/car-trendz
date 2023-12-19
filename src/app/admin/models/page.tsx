"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AdminLayout from "../adminpannel/page";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import config from "@/config.json"
interface Mbrands {
  _id: string;
  name: string;
  brand_info?: {
    _id: string;
    name: string;
    __v: number;
  };
}

const Models = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [modelsData, setModelsData] = useState<Mbrands[]>([]);
  const [allModelsData, setAllModelsData] = useState<Mbrands[]>([]);
  

  const filterSearchData = (searchkeyword: string) => {
    console.log(searchkeyword);
  };

  const handleSearchChange = (e: any) => {
    const query = e.target.value.toLowerCase();
    console.log(query);
    setSearchQuery(query);
    filterSearchData(query);
    const filteredData = allModelsData.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(query)
      )
    );
    setModelsData(filteredData);
  };

  const handleSearchClick = () => {
    const query = searchQuery.toLowerCase();

    const filteredData = allModelsData.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(query)
      )
    );
    filterSearchData(query);
    setModelsData(filteredData);
  };
   
  const modelFetchData = async () => {
    try {
      const res = await axios( `${config.apiBaseEndpoint}/models`);
      if (Array.isArray(res.data.data)) {
        setModelsData(res.data.data);
        setAllModelsData(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    modelFetchData();
  }, []);


  return (
    <>
      <AdminLayout>
        <div className=" mx-auto mb-4">
          <h1 className="text-[25px] font-bold">Models</h1>
          <div className="flex gap-3">
            <label className="sr-only text-[18px]">Search</label>
            <div className="relative mb-3">
              <input
                type="text"
                className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items..."
                onChange={handleSearchChange}
                value={searchQuery}
              />

              <FaSearch
                className="absolute left-3 top-[50%] transform -translate-y-[50%]"
                onClick={handleSearchClick}
              />
            </div>
            <Link
              href={"./models/add"}
              className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md transition duration-300 "
            >
              Add
            </Link>
          </div>
        </div>
        {/* ---------- */}
        <table className=" mx-auto  bg-white border border-gray-300 mt-2">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-[20px]">Sr No</th>
              <th className="py-2 px-4 border-b text-[20px]">Brand Name</th>
              <th className="py-2 px-4 border-b text-[20px]">Model Name</th>
              <th className="py-2 px-4 border-b text-[20px]">Actions</th>
            </tr>
          </thead>
          <tbody>
          {modelsData.map((model, index) => (
            <tr  key={model._id}>
              <td className="py-2 px-4 border-b text-center text-[18px]">{index + 1}</td>
              <td className="py-2 px-4 border-b text-center text-[18px]">
              {model.brand_info && model.brand_info.name}
              </td>
              <td className="py-2 px-4 border-b text-center text-[18px]">
              {model.name}
              </td>
              <td className="py-2 px-4 border-b text-center text-[18px]">
                <button className="mr-5 text-white bg-green-500 p-[7px]">
                  Edit
                </button>
                <button className="text-white bg-red-500 p-[5px]">
                  Delete
                </button>
              </td>
            </tr>
            
            ))}
          </tbody>
        </table>
      </AdminLayout>
    </>
  );
};
export default Models;
