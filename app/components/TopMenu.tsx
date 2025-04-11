"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuTop from "./TopMenuPortfolio";
import TopMenuMobile from "./TopMenuMobile";

const pages1 = [
  { name: "OFERTA", url: "oferta-fotografii-slubnej" },
  { name: "HISTORIE", url: "reportaze-slubne-sesje-plenerowe" },
];
const pages2 = [
  { name: "FAQ", url: "misja-i-faq" },
  { name: "REFERENCJE", url: "referencje" },
  { name: "BLOG", url: "blog" },
  { name: "STREFA KLIENTA", url: "/strefa-klienta" },
];

const TopMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false); // Hide menu on scroll down
    } else {
      setIsVisible(true); // Show menu on scroll up
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`bg-black fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Mobile and Tablet Navigation */}
      <div className="font-oswald container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center lg:hidden">
        {/* Mobile Logo */}
        <Link href="/">
          <Image
            src="/logo/99foto_logo_mobile.svg"
            alt="Mobile Logo"
            width={91}
            height={30}
          />
        </Link>

        {/* Mobile Menu */}
        <TopMenuMobile />
      </div>

      {/* Desktop Navigation */}
      <div className="font-oswald container mx-auto px-4 lg:px-8 py-4 hidden lg:block">
        <nav className="flex justify-center space-x-8 items-center">
          {/* "O MNIE" Link */}
          <Link href="/fotograf-na-wesele" className="btn-link">
            O MNIE
          </Link>
          {/* Portfolio Dropdown */}
          <MenuTop />
          {/* Other Pages */}
          {pages1.map((page, index) => (
            <Link key={index} href={page.url} className="btn-link">
              {page.name}
            </Link>
          ))}
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo/99foto_logo.svg"
              alt="Logo"
              width={110}
              height={110}
              className="pl-4"
            />
          </Link>
          {/* Additional Pages */}
          {pages2.map((page, index) => (
            <Link key={index} href={page.url} className="btn-link">
              {page.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default TopMenu;