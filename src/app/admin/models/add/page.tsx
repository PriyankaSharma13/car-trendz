"use client";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../adminpannel/page";
import axios from "axios";
import config from "@/config.json";

// interface BrandDropdownProps {
//   selectedBrand: string;
//   onSelectBrand: (brand: string) => void;
// }

const ModelsForm = () => {
  const [brandNames, setBrandNames] = useState<string[]>([]);

  const fetchBrandNames = async () => {
    try {
      const res = await axios(`${config.apiBaseEndpoint}/brands`);
      if (Array.isArray(res.data.data)) {
        setBrandNames(res.data.data.map((brand: any) => brand.name));
      }
    } catch (error) {
      console.error("Error fetching brand names:", error);
    }
  };
  useEffect(() => {
    fetchBrandNames();
  }, []);

  return (
    <>
      <AdminLayout>
        <div>
          <select
            id="brands"
            className="bg-gray-50 border border-gray-300 w-80 h-10 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block p-2.5 dark:bg-gray-700   dark:text-white dark:focus:ring-blue-500  mb-4"
          >
            <option value="" selected>
              Choose a brand
            </option>
            {brandNames.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
      </AdminLayout>
    </>
  );
};

export default ModelsForm;
