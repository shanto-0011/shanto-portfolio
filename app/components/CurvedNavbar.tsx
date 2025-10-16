"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CustomTheme from "../theme/CustomTheme";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Edu", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const projectCategories = [
  { name: "Industrial", href: "/projects/category-a" },
  { name: "Versity", href: "/projects/category-b" },
];

const CurvedNavbar = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const projectsRef = useRef<HTMLLIElement>(null);

  // For dropdown alignment
  useEffect(() => {
    if (isProjectsOpen && projectsRef.current) {
      const rect = projectsRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + rect.width / 2,
      });
    }
  }, [isProjectsOpen]);

  return (
    <div className="relative z-40">
      {/* ========= NAVBAR ========= */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="stick min-h-21 top-0 left-0 w-full z-30 bg-gradient-to-r from-[#00c3ff] to-[#cb01fd] shadow-xl
                   [clip-path:polygon(0_0,_100%_0%,_99%_60%,_60%_60%,_70%_70%,_40%_90%,_30%_70%,_1%_70%)]
                   md:clip-path-none"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 relative">
          {/* LEFT - Name */}
          <div className="flex-1">
            <Link href="/" className="text-lg font-bold truncate text-white">
              Md. Shanto
            </Link>
          </div>

          {/* CENTER - Desktop Nav */}
          <ul className="hidden md:flex space-x-8 justify-center flex-1 text-white">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-blue-200 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li
              ref={projectsRef}
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
              className="relative cursor-pointer hover:text-blue-200 transition-colors"
            >
              Projects
            </li>
          </ul>

          {/* RIGHT - Theme + Mobile Menu */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            <CustomTheme />

            {/* Hamburger Toggle */}
            <button
              className="md:hidden p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ========= PROJECTS DROPDOWN (Desktop Only) ========= */}
      <AnimatePresence>
        {isProjectsOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute bg-white rounded-lg shadow-lg py-2 min-w-[12rem] text-gray-800 flex flex-col z-50 hidden md:flex"
            style={{
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              transform: "translateX(-50%)",
            }}
            onMouseEnter={() => setIsProjectsOpen(true)}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            {projectCategories.map((project) => (
              <li key={project.name}>
                <Link
                  href={project.href}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-500"
                >
                  {project.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* ========= MOBILE MENU ========= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-purple-700 to-blue-500 shadow-md overflow-hidden z-40"
          >
            <ul className="flex flex-col items-center py-4 text-white">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="mb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="block py-2 text-lg hover:text-blue-200 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Mobile Projects Menu */}
              <li className="relative w-full text-center">
                <button
                  onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                  className="w-full py-2 text-lg hover:text-blue-200 transition-colors flex items-center justify-center"
                >
                  Projects
                  <span className="ml-2 text-sm">
                    {isProjectsOpen ? "▲" : "▼"}
                  </span>
                </button>

                <AnimatePresence>
                  {isProjectsOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-purple-800 bg-opacity-30 rounded-md mt-2 mx-auto w-10/12 overflow-hidden"
                    >
                      {projectCategories.map((project) => (
                        <li
                          key={project.name}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Link
                            href={project.href}
                            className="block py-2 text-base hover:bg-purple-700/50"
                          >
                            {project.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CurvedNavbar;
