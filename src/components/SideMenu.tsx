import React from "react";
import { useAppSelector } from "../app/hook";
import { Link } from "react-router-dom";

const SideMenu: React.FC = () => {
  const { roles } = useAppSelector((state) => state.auth);

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-6">
      <h2 className="text-xl font-semibold mb-4">Menu</h2>
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          {roles.includes("admin") && (
            <li className="mb-2">
              <Link to="/admin" className="hover:text-gray-400">
                Admin Page
              </Link>
            </li>
          )}
          {roles.includes("superadmin") && (
            <li className="mb-2">
              <Link to="/superadmin" className="hover:text-gray-400">
                Super Admin Page
              </Link>
            </li>
          )}
          {roles.includes("tester") && (
            <li className="mb-2">
              <Link to="/tester" className="hover:text-gray-400">
                Tester Page
              </Link>
            </li>
          )}
          {/* Add more links based on roles */}
        </ul>
      </nav>
    </aside>
  );
};

export default SideMenu;
