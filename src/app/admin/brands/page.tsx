"use client";
import React, { useEffect, useState } from "react";
import AdminLayout from "../adminpannel/page";
import { FaSearch } from "react-icons/fa";
import DeleteBrand from "./deletepop-up";
import axios from "axios";
import EditBrand from "./editpop-up";
import AddBrand from "./addpop";
import  config from "@/config.json";

interface Ibrands {
  _id: string;
  name: string;
}

const Brands = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [brandsData, setBrandsData] = useState<Ibrands[]>([]);
  const [allBrandsData, setAllBrandsData] = useState<Ibrands[]>([]);
  const [deletebrand, setDeleteBrand] = useState(false);
  const [editbrand, setEditBrand] = useState(false);
  const [addbrand, setAddBrand] = useState(false);
  // const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedBrandInfo, setSelectedBrandInfo] = useState<Ibrands | null>(null);
  const [selectedBrandForDelete, setSelectedBrandForDelete] = useState<string>("");

  const fetchData = async () => {
    try {
      const res = await axios( `${config.apiBaseEndpoint}/brands`);
      if (Array.isArray(res.data.data)) {
        setBrandsData(res.data.data);
        setAllBrandsData(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterSearchData = (searchkeyword: string) => {
    console.log(searchkeyword);
  };

  const handleSearchChange = (e: any) => {
    const query = e.target.value.toLowerCase();
    console.log(query);
    setSearchQuery(query);
    filterSearchData(query);
    const filteredData = allBrandsData.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(query)
      )
    );
    setBrandsData(filteredData);
  };

  const handleSearchClick = () => {
    const query = searchQuery.toLowerCase();

    const filteredData = allBrandsData.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(query)
      )
    );
    filterSearchData(query);
    setBrandsData(filteredData);
  };

  const handleAdd = () => {
    setAddBrand(true);
  };

  const handleAddConfirm = async () => {
    setAddBrand(false);
    fetchData()
    
  };

  const handleEdit = (brand: Ibrands) => {

    setSelectedBrandInfo(brand);
    setEditBrand(true);
  };

  const handleEditConfirm = async (editedBrandName: string) => {
    try {
      if (selectedBrandInfo) {
        await axios.put(`${config.apiBaseEndpoint}/brands`, {
          id: selectedBrandInfo._id,
          name: editedBrandName,
        });
        setBrandsData((prevBrands) =>
          prevBrands.map((brand) =>
            brand._id === selectedBrandInfo._id
              ? { ...brand, name: editedBrandName }
              : brand
          )
        );
        setEditBrand(false);
      }
    } catch (error) {
      console.error("Error updating brand:", error);
    }
  };

  const handleDelete = (id: string) => {
    setSelectedBrandForDelete(id);
    setDeleteBrand(true);
  };

  const handleDeleteConfirm = async (deletedBrandId: string) => {
    try {
      await axios.delete(`${config.apiBaseEndpoint}/brands`, {
        data: {
          id: deletedBrandId,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      setBrandsData((prevBrands) =>
        prevBrands.filter((brand) => brand._id !== deletedBrandId)
      );

      setDeleteBrand(false);
    } catch (error) {
      console.error("Error deleting brand:", error);
    }
  };
  const initialbrands = searchQuery ? brandsData : brandsData;
  const showMessage = searchQuery && initialbrands.length === 0;

  return (
    <>
      <AdminLayout>
        <div className=" mx-auto mb-4">
          <h1 className="text-[25px] font-bold">Brands</h1>
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
            <button
              className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md transition duration-300 "
              onClick={() => handleAdd()}
            >
              Add
            </button>
          </div>

          {showMessage ? (
            <p className="text-red-500">No data found....</p>
          ) : (
            <table className="mx-auto  bg-white border border-gray-300 mt-2">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-[20px]">Sr No</th>
                  <th className="py-2 px-4 border-b text-[20px]">Name</th>
                  <th className="py-2 px-4 border-b text-[20px]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {brandsData.map((brand, index) => (
                  <tr key={brand._id}>
                    <td className="py-2 px-4 border-b text-center text-[18px]">
                      {index + 1}
                    </td>
                    <td className="py-2 px-4 border-b text-center text-[18px]">
                      {brand.name}
                    </td>
                    <td className="py-2 px-4 border-b text-center text-[18px]">
                      <button
                        className="mr-5 text-white bg-green-500 p-[7px]"
                        onClick={() => handleEdit(brand)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-white bg-red-500 p-[5px]"
                        onClick={() => handleDelete(brand._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {editbrand && (
            <EditBrand
              onCancel={() => setEditBrand(false)}
              onConfirm={handleEditConfirm}
              brand={selectedBrandInfo}
            />
          )}
          {deletebrand && (
            <DeleteBrand
              onCancel={() => setDeleteBrand(false)}
              onConfirm={handleDeleteConfirm}
              brandId={selectedBrandForDelete}
            />
          )}
          {addbrand && (
            <AddBrand
              onCancel={() => setAddBrand(false)}
              onConfirm={handleAddConfirm}
           
            />
          )}
        </div>
      </AdminLayout>
    </>
  );
};

export default Brands;
