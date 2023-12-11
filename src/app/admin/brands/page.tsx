"use client";
import React, { useState } from "react";
import AdminLayout from "../adminpannel/page";
import { FaSearch } from "react-icons/fa";
import DeleteBrand from "./deletepop-up";

interface Ibrands {
  id: number;
  name: string;
}

const Brands = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBrands, setFilteredBrands] = useState<Ibrands[]>([]);
  const [deletebrand, setDeleteBrand] = useState(false);

  const brands: Ibrands[] = [
    {
      id: 1,
      name: "Maruti Suzuki",
    },
    {
      id: 2,
      name: "Honda",
    },
    {
      id: 3,
      name: "Mahindra",
    },
    {
      id: 4,
      name: "Skoda",
    },
    {
      id: 5,
      name: "Tata",
    },
    {
      id: 6,
      name: "Mazda",
    },
  ];

  const handleSearchChange = (e: any) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredData = brands.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(query)
      )
    );
    setFilteredBrands(filteredData);
  };

  const handleSearchClick = () => {
    const query = searchQuery.toLowerCase();
    const filteredData = brands.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(query)
      )
    );
    setFilteredBrands(filteredData);
  };

  const handleEdit = (id: any) => {
    console.log(`Edit brand ${id}`);
  };

  const handleDelete = () => {
    setDeleteBrand(!deletebrand);
  };
  const initialbrands = searchQuery ? filteredBrands : brands;
  const showMessage = searchQuery && initialbrands.length === 0;

  return (
    <>
      <AdminLayout>
        <div className=" mx-auto mb-4">
          <h1 className="text-[25px] font-bold">Brands</h1>
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
          {showMessage ? (
            <p className="text-red-500">No data found....</p>
          ) : (
            <table className="min-w-full mx-auto  bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-[20px]">Sr No</th>
                  <th className="py-2 px-4 border-b text-[20px]">Name</th>
                  <th className="py-2 px-4 border-b text-[20px]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {initialbrands.map((brand: any, index: any) => (
                  <tr key={brand.id}>
                    <td className="py-2 px-4 border-b text-center text-[18px]">{index + 1}</td>
                    <td className="py-2 px-4 border-b text-center text-[18px]">{brand.name}</td>
                    <td className="py-2 px-4 border-b text-center text-[18px]">
                      <button
                        className="mr-5 text-white bg-green-500 p-[7px]"
                        onClick={() => handleEdit(brand.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-white bg-red-500 p-[5px]"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {deletebrand && <DeleteBrand />}
        </div>
      </AdminLayout>
    </>
  );
};

export default Brands;
