// src/components/Header.tsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <header className="bg-blue-500 text-white p-4 shadow-md relative z-10">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            <Link to="/">MyApp</Link>
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
