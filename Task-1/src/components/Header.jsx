import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wide text-teal-400 hover:text-teal-300 transition-transform transform hover:scale-105">
          <a href="#home">HotelBooking</a>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:space-x-4 text-lg font-medium text-gray-300 md:space-y-0 space-y-4 absolute md:relative md:bg-transparent bg-gray-900 md:p-0 p-6 top-full md:top-auto left-0 w-full md:w-auto`}
        >
          <li className="hover:text-teal-300 transition duration-300">
            <a href="#home" className="relative group">
              Home
              <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="hover:text-teal-300 transition duration-300">
            <a href="#about" className="relative group">
              About
              <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="hover:text-teal-300 transition duration-300">
            <a href="#services" className="relative group">
              Services
              <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="hover:text-teal-300 transition duration-300">
            <a href="#contact" className="relative group">
              Contact
              <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            aria-label="Toggle Menu"
            className="text-teal-400 hover:text-teal-300 transition-transform transform hover:scale-110 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
