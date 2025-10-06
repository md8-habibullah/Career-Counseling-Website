// app/not-found.jsx
// "use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen pb-[10%] bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 text-center">
      <div className="text-9xl md:text-[12rem] mb-6 animate-bounce">🐾</div>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-6">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link href="/">
        <button className="btn rounded-full shadow-2xl btn-primary bg-gradient-to-r from-blue-500 to-purple-600 border-none text-white hover:scale-105 transition-transform">
          Go Back Home
        </button>
      </Link>
      <p className="mt-8 text-gray-500 text-sm">
        If you think this is a mistake, contact support.
      </p>
    </div>
  );
}
