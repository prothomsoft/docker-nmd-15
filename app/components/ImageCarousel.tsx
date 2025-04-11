"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { useState, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamically import ResponsiveInfo with SSR disabled
const ResponsiveInfo = dynamic(() => import("./ResponsiveInfo"), { ssr: false });

const images = [
  {
    src: "/slick1.jpg", // Path to image in the public directory
    alt: "Slick Image 1",
  },
  {
    src: "/slick2.webp", // Path to image in the public directory
    alt: "Slick Image 2",
  },
  {
    src: "/slick3.jpg", // Path to image in the public directory
    alt: "Slick Image 3",
  },
  {
    src: "/slick4.webp", // Path to image in the public directory
    alt: "Slick Image 4",
  },
  {
    src: "/slick5.webp", // Path to image in the public directory
    alt: "Slick Image 5",
  },
  {
    src: "/slick6.webp", // Path to image in the public directory
    alt: "Slick Image 6",
  },
  {
    src: "/slick7.webp", // Path to image in the public directory
    alt: "Slick Image 7",
  },
  {
    src: "/slick8.jpg", // Path to image in the public directory
    alt: "Slick Image 8",
  },
];

export default function ImageCarousel() {
  
  const sliderRef = useRef<Slider | null>(null); // Reference to the Slider instance

  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 800,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "60px", // Prevent overflow
    arrows: false, // Disable default arrows
    responsive: [
      {
        breakpoint: 640, // Mobile (Portrait)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Disable center mode for mobile
        },
      },
      {
        breakpoint: 768, // Mobile (Landscape)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 1024, // Tablet (Portrait)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 1280, // Tablet (Landscape)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 1536, // Laptop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 2400, // Widescreen
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="w-full py-4 overflow-hidden relative">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <Image
              src={image.src}
              alt={image.alt}
              width={600} // Original width
              height={750} // Original height
              className="object-cover"
              loading="lazy" // Lazy loading for better performance
            />
          </div>
        ))}
      </Slider>
      
    </div>
  );
}