"use client";
import React, { useState } from "react";
import AdminLayout from "../adminpannel/page";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="mx-auto mb-4">
        <h1 className="text-[24px] font-bold">Dashboard</h1>
      </div>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[10px] mt-4">
        <div className="bg-blue-200 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">Total Users</h2>
          <p className="text-gray-800">1000</p>
        </div>
        
        <div className="bg-green-200 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">Orders Today</h2>
          <p className="text-gray-800">50</p>
        </div>
        
      </div>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[10px] mt-4">
        <div className="bg-blue-200 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">Total Users</h2>
          <p className="text-gray-800">1000</p>
        </div>
        
        <div className="bg-green-200 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">Orders Today</h2>
          <p className="text-gray-800">50</p>
        </div>
        
      </div>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[10px] mt-4">
        <div className="bg-blue-200 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">Total Users</h2>
          <p className="text-gray-800">1000</p>
        </div>
        
        <div className="bg-green-200 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">Orders Today</h2>
          <p className="text-gray-800">50</p>
        </div>
        
      </div>
      <div className= "mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[10px] mt-4">
        <div className="bg-blue-200 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">Total Users</h2>
          <p className="text-gray-800">1000</p>
        </div>
        
        <div className="bg-green-200 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">Orders Today</h2>
          <p className="text-gray-800">50</p>
        </div>
        
      </div>
      

    </AdminLayout>
  );
};

export default Dashboard;


