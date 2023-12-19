import { FaHome, FaSignOutAlt, FaUser, FaTable} from "react-icons/fa";
import { IoMdSettings,IoLogoModelS } from "react-icons/io";
import React, { useState } from "react";
import Link from "next/link";

const Sidebar = ({ isOpen }: any) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (text: string) => {
    setActiveItem(text);
  };

  const prefix = "/admin";

  const sidebarItems = [
    { icon: <FaHome />, link: `${prefix}/dashboard`, text: "Dashboard" },
    { icon: <FaUser />, link: `${prefix}/users`, text: "Users" },
    { icon: <FaTable />, link: `${prefix}/brands`, text: "Brands" },
    { icon: <IoLogoModelS  />, link: `${prefix}/models`, text: "Models" },
    {
      icon: <IoMdSettings />,
      link: `${prefix}/settings`,
      text: "Account Settings",
    },
    { icon: <FaSignOutAlt />, link: `${prefix}/logout`, text: "Logout" },
  ];

  return (
    <aside
      className={`bg-gray-700 p-4 text-white h-screen w-60 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          {sidebarItems.map((item, index) => (
            <Link href={item.link} key={index}
          
                className={`flex items-center mb-2 p-2 ${
                  activeItem === item.text ? "bg-red-500" : ""
                }`}
                onClick={() => handleItemClick(item.text)}
              >
                {React.cloneElement(item.icon, { className: "text-lg" })}
                <span className="ml-2 text-white text-[20px]">{item.text}</span>
            
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
