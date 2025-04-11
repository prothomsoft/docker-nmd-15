"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MenuTop = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNavigate = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button to toggle the menu */}
      <button
        onClick={handleToggle}
        className="btn-link" // Applied the .btn-link class
      >
        <Link href="#" className="btn-link">
            PORTFOLIO
          </Link>
        <svg
          className={`ml-2 h-5 w-5 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute mt-2 w-56 bg-black text-white rounded-md shadow-lg z-10"
          onMouseLeave={handleClose}
        >
          <ul className="py-1">
            <li>
              <button
                onClick={() => handleNavigate("reportaz-slubny-krakow")}
                className="btn-link-portfolio"
              >
                REPORTAŻ ŚLUBNY
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate("plener-slubny-krakow")}
                className="btn-link-portfolio"
              >
                PLENER ŚLUBNY
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate("sesja-narzeczenska-krakow")}
                className="btn-link-portfolio"
              >
                SESJA NARZECZEŃSKA
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuTop;