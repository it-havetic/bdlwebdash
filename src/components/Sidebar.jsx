// import React from "react";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="h-screen w-64 bg-gray-800 text-white">
//       <div className="p-4">
//         <h2 className="text-xl font-bold">Dashboard</h2>
//       </div>
//       <nav className="mt-8">
//         <ul>
//           <li>
//             <NavLink
//               to="/"
//               end
//               className={({ isActive }) =>
//                 `block py-2.5 px-4 rounded transition duration-200 ${
//                   isActive ? "bg-gray-700" : "hover:bg-gray-700"
//                 }`
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/upload"
//               className={({ isActive }) =>
//                 `block py-2.5 px-4 rounded transition duration-200 ${
//                   isActive ? "bg-gray-700" : "hover:bg-gray-700"
//                 }`
//               }
//             >
//               Upload Product
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/products"
//               className={({ isActive }) =>
//                 `block py-2.5 px-4 rounded transition duration-200 ${
//                   isActive ? "bg-gray-700" : "hover:bg-gray-700"
//                 }`
//               }
//             >
//               Products
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/analytics"
//               className={({ isActive }) =>
//                 `block py-2.5 px-4 rounded transition duration-200 ${
//                   isActive ? "bg-gray-700" : "hover:bg-gray-700"
//                 }`
//               }
//             >
//               Analytics
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;


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
          <li>
            <NavLink
              to="/mockup-zone"
              className={({ isActive }) =>
                `block py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              Media Files for Mockup Zone
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recent-work"
              className={({ isActive }) =>
                `block py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              Media Files for Recent Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/greeting"
              className={({ isActive }) =>
                `block py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              Image Files for Greeting
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/testimonium"
              className={({ isActive }) =>
                `block py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              Media Files for Testimonium
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog-submission"
              className={({ isActive }) =>
                `block py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              Blog Submission
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;