"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("💥 Global Error:", error);
  }, [error]);

  return (
    <html>
      <div className="items-center pt-20  h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white text-center px-6">
        {/* Floating emoji */}
        <div className="text-5xl animate-bounce mb-4">💫 Err0R...</div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-lg">
          Something Went Wrong
        </h1>

        {/* Message */}
        <p className="text-gray-300 mt-4 text-lg ">
          Oops! We ran into an unexpected error. Don’t worry — our team is
          already on it.
        </p>

        {/* Buttons */}
        <div className="space-x-7 mt-8 ">
          <button
            onClick={() => reset()}
            className="btn btn-primary bg-gradient-to-r from-blue-500 to-purple-600 border-none hover:scale-105 transition-transform text-white rounded-full shadow-xl"
          >
            Try Again
          </button>

          <Link href="/">
            <button className="btn bg-gradient-to-r from-cyan-400 to-blue-500 border-none hover:scale-105 transition-transform text-white rounded-full shadow-xl">
              Back to Home
            </button>
          </Link>
        </div>

        {/* Extra small hint */}
        <p className="my-10 text-sm text-gray-500">
          If this keeps happening, please refresh or contact support.
        </p>
      </div>
    </html>
  );
}
