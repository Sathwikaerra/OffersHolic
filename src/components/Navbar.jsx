import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const linkClass =
    "text-gray-800 hover:text-blue-600 transition-colors duration-200";

  return (
    <nav className="bg-white fixed top-0 left-0 w-full shadow-md p-4 flex items-center justify-between z-50">
      {/* Left Section - Logo */}
      <div className="flex items-center ml-5 space-x-2">
        <img src="/icon1.png" alt="Icon" className="w-8 h-8" />
        <h1 className="text-xl font-bold text-gray-800">OffersHolic</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 mr-5 font-medium">
        <a href="#works" className={linkClass}>How It Works</a>
        <a href="#merchant" className={linkClass}>Merchant Opportunities</a>
        <a href="#category" className={linkClass}>Category</a>
        <a href="#faq" className={linkClass}>FAQ</a>
        <a href="#contact" className={linkClass}>Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 right-4 bg-gradient-to-l from-pink-300 via-pink-200 to-pink-100 shadow-lg rounded-md p-4 w-60 flex flex-col space-y-3 z-50 md:hidden">
          <a href="#works" className={linkClass} onClick={closeMenu}>How It Works</a>
          <a href="#merchant" className={linkClass} onClick={closeMenu}>Merchant Opportunities</a>
          <a href="#category" className={linkClass} onClick={closeMenu}>Category</a>
          <a href="#faq" className={linkClass} onClick={closeMenu}>FAQ</a>
          <a href="#contact" className={linkClass} onClick={closeMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
