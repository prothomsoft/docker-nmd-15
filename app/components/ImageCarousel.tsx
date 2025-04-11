"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

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
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "60px",
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 2400,
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
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={750}
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}