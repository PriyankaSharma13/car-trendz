"use client";
import { useState } from "react";

interface Brand {
  _id: string;
  name: string;
}

interface DeleteBrandProps {
  onCancel: () => any;
  onConfirm: (deletedBrandId: string) => any;
  brandId: string;
}
const DeleteBrand: React.FunctionComponent<DeleteBrandProps> = ({
  onCancel,
  onConfirm,
  brandId,
}) => {
  const [deleteBrand, setDeleteBrand] = useState<Brand | null>(null);

  const handleDeleteConfirm = () => {
    onConfirm(brandId);
    console.log(brandId);
    setDeleteBrand(null);
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
            <div className="p-4 md:p-5 text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this brand?
              </h3>
              <button
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                onClick={handleDeleteConfirm}
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

export default DeleteBrand;
