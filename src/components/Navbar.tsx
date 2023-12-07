import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-200 p-4 ">
      <div className="flex md:container   mx-auto flex-row justify-between items-center">
        <div className="py-2 ml-2 ">
          <Link to="/">Book Store</Link>
        </div>
        <div className="sm:px-4">
          <ul className="flex flex-row items-center justify-center space-x-6 xl:space-x-12 ">
            <li className=" text-[14px] xl:text-[16px] capitalize font-figtree text-[#333] font-semibold block hover:text-blue-400">
              <Link to="/">Home</Link>
            </li>
            <li className=" text-[14px] xl:text-[16px] capitalize font-figtree text-[#333] font-semibold block hover:text-blue-400">
              <Link to="/orders">Orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
