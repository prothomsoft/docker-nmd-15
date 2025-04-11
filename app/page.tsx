import RootLayout from "./layout";
import ImageCarousel from "./components/ImageCarousel";
import Testimonials from "./components/Testimonials";
import ParallaxSection from "./components/ParallaxSection";
import TopMenu from "./components/TopMenu";

export default function LandingPage() {
  return (
    <RootLayout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-black">
        <header className="w-full">
          <TopMenu />
        </header>

        {/* Image Carousel */}
        <section className="w-full pt-28"> {/* Add padding-top equal to TopMenu height */}
          <ImageCarousel />
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 bg-gray-200">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
          <Testimonials />
        </section>

        {/* Parallax Section */}
        <ParallaxSection />

        {/* Call to Action */}
        <section className="w-full py-12 bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-bold">Book Your Session Today</h2>
          <p className="mt-4 text-lg">
            Let us help you capture memories that last a lifetime.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">
            Contact Us
          </button>
        </section>

        {/* Footer */}
        <footer className="w-full py-6 bg-gray-800 text-white text-center">
          <p>&copy; 2025 Your Photography Business. All rights reserved.</p>
        </footer>
      </div>
    </RootLayout>
  );
}