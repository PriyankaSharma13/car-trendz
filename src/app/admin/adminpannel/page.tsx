"use client"
import Navbar from "@/app/components/admin/common/navbar/page";
import Sidebar from "@/app/components/admin/common/sidebar/page";
import React, { ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
} 

const AdminLayout = (props:Props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar}  />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />

        <main className="bg-white p-[25px] rounded-md shadow-md">
        {props.children}
        </main>


      </div>
    </>
  );
};

export default AdminLayout;
