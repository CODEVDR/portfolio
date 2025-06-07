"use client";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "#", icon: "home" },
  { name: "About", href: "#about", icon: "info" },
  { name: "Services", href: "#services", icon: "settings" },
  { name: "Contact", href: "#contact", icon: "call" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-gray-700 text-white py-2 fixed top-4 md:top-10 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-4/5 rounded-full px-3 md:px-5">
      <div className="flex flex-row items-center justify-between w-full px-2 md:px-8">
        {/* Logo */}
        <div className="flex flex-row items-center justify-center">
          <span className="text-2xl md:text-3xl from-yellow-400 to-yellow-100 font-bold bg-gradient-to-r bg-clip-text z-50 text-transparent font-poppins">
            Durgesh
          </span>
          <div className="text-4xl md:text-5xl text-white -mt-5">.</div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-white">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Desktop Navlinks */}
        <nav className="hidden md:flex flex-row items-center justify-between">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium hover:font-poppins rounded-lg transition-colors duration-200 group"
            >
              <span className="relative text-lg font-poppins flex items-center justify-center text-white">
                <span
                  className="material-symbols-outlined mr-2"
                  style={{ fontSize: "1rem" }}
                >
                  {link.icon}
                </span>
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-700 mt-2 rounded-lg p-4 shadow-lg w-full">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center py-3 px-2 text-sm font-medium hover:bg-gray-600 rounded-lg transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span
                className="material-symbols-outlined mr-3"
                style={{ fontSize: "1rem" }}
              >
                {link.icon}
              </span>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
