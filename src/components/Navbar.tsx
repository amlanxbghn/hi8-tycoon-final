"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Services", href: "#" },
    { title: "Contact", href: "#" },
  ];

  return (
    <div className="px-4 py-4">
      <nav className="bg-white rounded-3xl shadow-sm">
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <img src="/hi8Logo.svg" alt="Hi8 Logo" className="h-16 md:h-20 w-auto" />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md font-medium md:text-lg leading-tighter"
                >
                  {link.title}
                </a>
              ))}
              <button className="bg-[#F90200] text-white hover:bg-[#e00200] transition-colors px-4 py-2 rounded-lg font-medium md:text-lg leading-tighter">
                Schedule a Call
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md font-medium md:text-lg leading-tighter"
                  >
                    {link.title}
                  </a>
                ))}
                <button className="w-full mt-2 bg-[#F90200] text-white hover:bg-[#e00200] transition-colors px-4 py-2 rounded-lg font-medium md:text-lg leading-tighter">
                  Schedule a Call
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
