"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const TopMenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // Ensure client-side rendering
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Set to true after the component mounts
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNavigate = (path: string) => {
    setIsOpen(false);
    if (isClient) {
      router.push(path); // Only navigate if on the client
    }
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button to toggle the menu */}
      <button
        onClick={handleToggle}
        className="btn-link flex items-center justify-between"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {/* Hamburger Icon */}
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
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
          className="absolute right-0 mt-2 w-56 bg-black text-white rounded-md shadow-lg z-10"
          onMouseLeave={handleClose}
        >
          <ul className="py-1">
            <li>
              <button
                onClick={() => handleNavigate("/fotograf-na-wesele")}
                className="btn-link-portfolio"
              >
                O MNIE
              </button>
            </li>
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
            <li>
              <button
                onClick={() => handleNavigate("oferta-fotografii-slubnej")}
                className="btn-link-portfolio"
              >
                OFERTA
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate("referencje")}
                className="btn-link-portfolio"
              >
                REFERENCJE
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate("blog")}
                className="btn-link-portfolio"
              >
                BLOG
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate("/strefa-klienta")}
                className="btn-link-portfolio"
              >
                STREFA KLIENTA
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopMenuMobile;