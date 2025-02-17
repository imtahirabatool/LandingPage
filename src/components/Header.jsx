import React, { useState } from "react";
import "./styles.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-transparent fixed w-full top-0 left-0 shadow-lg z-50">
      <div className="container mx-auto px-2 py-3 flex justify-between items-center">
        <div className="text-3xl text-yellow-50 px-3 justify-start font-bold hover:text-purple-400 transition duration-300">
          SmartFlow
        </div>
        <button
          className="text-gray-300 lg:hidden px-3 py-2 border rounded border-white hover:bg-gray-600 transition duration-300 relative"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <nav
          className={`hidden px-3 lg:flex lg:items-center lg:space-x-6 ${
            isMenuOpen ? "block" : ""
          }`}
        >
          <a
            href="#features"
            className="text-[#001a33] hover:text-purple-700 font-medium transition duration-300 mx-3 text-lg"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-[#001a33] hover:text-purple-700 font-medium transition duration-300 mx-3 text-lg"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-[#001a33] hover:text-purple-700 font-medium transition duration-300 mx-3 text-lg"
          >
            Contact
          </a>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="absolute right-0 top-full mt-2 w-35 bg-blue-800 bg-opacity-30 text-white py-2 rounded-lg shadow-lg">
          <nav className="flex flex-col items-end space-y-2 px-4">
            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="sm:text-sm md:text-base lg:text-lg  text-gray-200  hover:text-purple-700 font-medium transition duration-300 text-lg"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="sm:text-sm md:text-base lg:text-lg  text-gray-200 hover:text-purple-700 font-medium transition duration-300 text-lg"
            >
              Pricing
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="sm:text-sm md:text-base lg:text-lg  text-gray-200 hover:text-purple-700 font-medium transition duration-300 text-lg"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
