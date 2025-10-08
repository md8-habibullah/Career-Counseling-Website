"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaExclamationTriangle } from "react-icons/fa";

const ServiceNotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6 text-center">
      <FaExclamationTriangle className="text-yellow-400 text-8xl mb-6 animate-bounce" />
      <h1 className="text-5xl font-extrabold mb-4">Service Not Found</h1>
      <p className="text-gray-300 mb-6">
        Oops! The service you are looking for does not exist or has been
        removed.
      </p>
      <button
        onClick={() => router.push("/")}
        className="btn btn-primary btn-lg transition-transform duration-300 hover:scale-105"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ServiceNotFound;
