import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
      </div>
      <nav className="mt-8">
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/upload"
              className={({ isActive }) =>
                `block py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              Upload Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `block py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `block py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              Analytics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
