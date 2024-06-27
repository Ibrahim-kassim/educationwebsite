import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const UserLayout = () => {
  return (
    <div className="flex flex-col items-center w-full h-full overflow-hidden">
      <Navbar />
      <div className="">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default UserLayout;
