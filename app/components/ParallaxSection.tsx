"use client";

export default function ParallaxSection() {
  return (
    <div
      className="relative w-full h-[60vh] bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url('/image1.jpg')`, // Replace with your image path
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white text-center">
          Capture Lifes Precious Moments
        </h2>
      </div>
    </div>
  );
}