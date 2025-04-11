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
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null); // Reference to the Slider instance

  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "0px", // Prevent overflow
    arrows: false, // Disable default arrows
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 767, // Mobile (Portrait)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, // Disable center mode for mobile
        },
      },
      {
        breakpoint: 880, // Mobile (Landscape)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024, // Tablet (Portrait)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1200, // Tablet (Landscape)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1366, // Laptop
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
    <div className="w-full py-12 overflow-hidden">
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
      {/* Navigation Indicator with Arrows */}
      <div className="flex items-center justify-center mt-4 text-lg font-semibold text-black">
        <button
          onClick={() => sliderRef.current?.slickPrev()} // Navigate to the previous slide
          className="text-gray-600 hover:text-gray-900 mr-4"
          aria-label="Previous Slide"
        >
          &#8592;
        </button>
        <span>
          {currentSlide + 1}/{images.length}
        </span>
        <button
          onClick={() => sliderRef.current?.slickNext()} // Navigate to the next slide
          className="text-gray-600 hover:text-gray-900 ml-4"
          aria-label="Next Slide"
        >
          &#8594;
        </button>
      </div>
      {/* Add Responsive Info */}
      <ResponsiveInfo />
    </div>
  );
}