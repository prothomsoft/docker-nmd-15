import RootLayout from "./layout";
import ImageCarousel from "./components/ImageCarousel";

export default function LandingPage() {
    return (
      <RootLayout>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <header className="w-full py-6 bg-blue-600 text-white text-center">
            <h1 className="text-3xl font-bold">Welcome to Our Landing Page</h1>
          </header>
          <main className="flex flex-col items-center justify-center flex-1 p-6">
            <ImageCarousel />
          </main>
          <footer className="w-full py-4 bg-gray-800 text-white text-center">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </footer>
        </div>
      </RootLayout>
    );
  }