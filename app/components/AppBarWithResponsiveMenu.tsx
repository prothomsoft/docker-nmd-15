"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo99foto from "/public/logo/99foto_logo.svg";
import logo99fotomobile from "/public.logo/99foto_logo_mobile.svg";
import MenuTop from "./TopMenuPortfolio";

const pages = [
  { name: "O MNIE", url: "/fotograf-na-wesele" },
  { name: "REPORTAŻ ŚLUBNY", url: "reportaz-slubny-krakow" },
  { name: "PLENER ŚLUBNY", url: "plener-slubny-krakow" },
  { name: "SESJA NARZECZEŃSKA", url: "sesja-narzeczenska-krakow" },
  { name: "OFERTA", url: "oferta-fotografii-slubnej" },
  { name: "HISTORIE", url: "reportaze-slubne-sesje-plenerowe" },
  { name: "FAQ", url: "misja-i-faq" },
  { name: "REFERENCJE", url: "referencje" },
  { name: "BLOG", url: "blog" },
  { name: "STREFA KLIENTA", url: "/strefa-klienta" },
];

interface AppBarWithResponsiveMenuProps {
  action: () => void;
}

const AppBarWithResponsiveMenu: React.FC<AppBarWithResponsiveMenuProps> = ({ action }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Back-to-top button */}
      <div className="fixed bottom-10 right-10 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700"
        >
          ↑
        </button>
      </div>

      {/* AppBar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-40">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-between items-center py-4">
            {/* Left Links */}
            <div className="flex space-x-4">
              <Link href="/fotograf-na-wesele">
                <a className="text-gray-800 hover:text-gray-600 font-medium">O MNIE</a>
              </Link>
              <MenuTop />
              <Link href="/oferta-fotografii-slubnej">
                <a className="text-gray-800 hover:text-gray-600 font-medium">OFERTA</a>
              </Link>
              <Link href="/reportaze-slubne-sesje-plenerowe">
                <a className="text-gray-800 hover:text-gray-600 font-medium">HISTORIE</a>
              </Link>
              <Link href="/misja-i-faq">
                <a className="text-gray-800 hover:text-gray-600 font-medium">FAQ</a>
              </Link>
            </div>

            {/* Logo */}
            <div>
              <Link href="/">
                <a>
                  <Image src={logo99foto} alt="Logo" width={100} height={140} />
                </a>
              </Link>
            </div>

            {/* Right Links */}
            <div className="flex space-x-4">
              <Link href="/referencje">
                <a className="text-gray-800 hover:text-gray-600 font-medium">REFERENCJE</a>
              </Link>
              <Link href="/blog">
                <a className="text-gray-800 hover:text-gray-600 font-medium">BLOG</a>
              </Link>
              <Link href="/strefa-klienta">
                <a className="text-gray-800 hover:text-gray-600 font-medium">STREFA KLIENTA</a>
              </Link>
              <button
                onClick={action}
                className="text-gray-800 hover:text-gray-600 font-medium"
              >
                KONTAKT
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden justify-between items-center py-4">
            {/* Logo */}
            <Link href="/">
              <a>
                <Image src={logo99fotomobile} alt="Logo" width={91} height={30} />
              </a>
            </Link>

            {/* Hamburger Menu */}
            <button
              onClick={handleToggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {pages.map((page, index) => (
                <Link key={index} href={page.url}>
                  <a
                    onClick={handleCloseMenu}
                    className="block text-gray-800 hover:text-gray-600 font-medium"
                  >
                    {page.name}
                  </a>
                </Link>
              ))}
              <button
                onClick={() => {
                  handleCloseMenu();
                  action();
                }}
                className="block text-gray-800 hover:text-gray-600 font-medium"
              >
                KONTAKT
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default AppBarWithResponsiveMenu;