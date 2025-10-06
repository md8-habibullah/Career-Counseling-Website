"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="flex space-x-5">
        <span className="loading loading-ring w-10 h-10 text-blue-400 animate-pulse"></span>
        <span className="loading loading-ring w-12 h-12 text-purple-400 animate-spin-slow"></span>
        <span className="loading loading-ring w-16 h-16 text-pink-500 animate-pulse"></span>
        <span className="loading loading-ring w-20 h-20 text-cyan-400 animate-spin-slow"></span>
        <span className="loading loading-ring w-24 h-24 text-violet-500 animate-pulse"></span>
      </div>
    </div>
  );
};

export default Loading;
