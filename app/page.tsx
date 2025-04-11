import RootLayout from "./layout";
import Image from "next/image";

export default function LandingPage() {
    return (
        <RootLayout>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 invert-colors">
                <header className="w-full py-6 bg-blue-600 text-white text-center">
                    <h1 className="text-3xl font-bold">Welcome to Our Landing Page</h1>
                </header>
                <main className="flex flex-col items-center justify-center flex-1 p-6">
                    <Image
                        src="/globe.svg"
                        alt="Logo"
                        width={150}
                        height={150}
                        className="mb-6"
                    />
                    <h2 className="text-2xl font-semibold mb-4">Your Journey Starts Here</h2>
                    <p className="text-center mb-6">
                        Discover amazing features and join our community today.
                    </p>
                    <a
                        href="/signup"
                        className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                    >
                        Get Started
                    </a>
                </main>
                <footer className="w-full py-4 bg-gray-800 text-white text-center">
                    <p>&copy; 2023 Your Company. All rights reserved.</p>
                </footer>
            </div>
        </RootLayout>
    );
}