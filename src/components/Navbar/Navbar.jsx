import React, { useState } from "react";
import "./Navbar.css"
import { IoSearchOutline } from "react-icons/io5";
import { CiStickyNote } from "react-icons/ci";
import { FaNewspaper } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";
import { CiHome } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavItem = ({ icon, text }) => (
    <div
      className={`flex items-center gap-2 text-xl w-full py-4 text-center justify-center cursor-pointer transition-colors duration-200 ${
        activeItem === text
          ? "lg:w-full lg:h-full bg-white text-black custom rounded-xl"
          : "text-white hover:text-yellow-100"
      }`}
      onClick={() => {
        setActiveItem(text);
        setIsMenuOpen(false);
      }}
    >
      {icon}
      <small>{text}</small>
    </div>
  );

  const navItems = [
    { icon: <CiStickyNote />, text: "Notes" },
    { icon: <FaNewspaper />, text: "News" },
    { icon: <CgMediaLive />, text: "Live" },
    { icon: <CiHome />, text: "Main" },
  ];

  return (
    <nav className="relative w-full ">
      <div className="w-full flex items-center bg-blue-600 py-6 text-white px-4">
        <div className="flex items-center gap-4 w-full lg:w-1/3">
          <h1 className="font-semibold text-3xl">IbrahimEdu</h1>
          <div className="hidden lg:flex w-full items-center border-2 border-white bg-white p-2 rounded-md">
            <IoSearchOutline className="text-gray-500 mr-2" />
            <input
              type="text"
              className="w-full border-none outline-none text-black"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="hidden lg:flex justify-between items-center px-16 w-2/3 gap-4">
          {navItems.map((item) => (
            <NavItem key={item.text} icon={item.icon} text={item.text} />
          ))}
        </div>
        <button className="lg:hidden text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-blue-600 z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full p-4">
          <button className="self-end text-2xl mb-4" onClick={toggleMenu}>
            <HiX />
          </button>
          <div className="flex items-center border-2 border-white bg-white p-2 rounded-md mb-4">
            <IoSearchOutline className="text-gray-500 mr-2" />
            <input
              type="text"
              className="w-full border-none outline-none text-black"
              placeholder="Search..."
            />
          </div>
          {navItems.map((item) => (
            <NavItem key={item.text} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;