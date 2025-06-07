"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
              &lt;VDR/&gt;
            </h3>
            <p className="text-gray-300">
              Creating innovative web solutions with a focus on performance,
              accessibility, and modern design.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/CODEVDR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500/20 transition-all"
              >
                <i className="fab fa-github text-yellow-500"></i>
              </a>
              <a
                href="https://linkedin.com/in/codevdr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500/20 transition-all"
              >
                <i className="fab fa-linkedin text-yellow-500"></i>
              </a>
              <a
                href="https://instagram.com/vdr.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500/20 transition-all"
              >
                <i className="fab fa-instagram text-yellow-500"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#home"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-yellow-500 mr-2">
                  email
                </span>
                <a
                  href="mailto:code.durgesh86@gmail.com"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  code.durgesh86@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-yellow-500 mr-2">
                  location_on
                </span>
                <span className="text-gray-300">Rourkela, Odisha, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>© {currentYear} VDR | All rights reserved</p>
          <p className="mt-2">
            <span className="inline-flex items-center">
              Made with
              <span className="text-red-500 mx-1">❤️</span>
              and
              <span className="text-yellow-500 mx-1">
                <span className="material-symbols-outlined text-sm ml-1">
                  code
                </span>
              </span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
