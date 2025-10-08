"use client";

import HomeSlider from "@/components/homepage/HomeSlider";
import ServicesOverview from "@/components/homepage/ServicesOverview";
import Testimonials from "@/components/homepage/Testimonials";
import { FaArrowRight, FaHandsHelping } from "react-icons/fa";
import { useRouter } from "next/navigation"; // <-- Import router

export default function Home() {
  const router = useRouter(); // <-- Initialize router

  // Force navigation to /services
  const goToServices = () => {
    router.push("/services");
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto space-y-16 p-6">
        {/* Slider Section */}
        <HomeSlider />

        {/* Call to Action Section */}
        <div className="text-center p-12 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-900 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="text-4xl font-bold text-white mb-4">
            🚀 Join Us Today!
          </div>
          <p className="text-lg text-gray-200 mb-6">
            Take the first step towards your dream career with our expert
            guidance.
          </p>
          <div className="flex justify-center gap-6">
            <button
              onClick={goToServices} // <-- Force navigation
              className="btn btn-primary btn-lg bg-blue-600 hover:bg-blue-500 border-none flex items-center gap-2"
            >
              Get Started <FaArrowRight />
            </button>
            <button
              onClick={goToServices} // <-- Force navigation
              className="btn btn-outline btn-lg text-purple-400 border-purple-400 hover:bg-purple-600 hover:text-white flex items-center gap-2"
            >
              Learn More <FaHandsHelping />
            </button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-900 rounded-xl shadow-lg">
          <Testimonials />
        </div>

        {/* Final Call to Action Section */}
        <div className="text-center rounded-2xl mt-12 p-12 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
          <div className="text-3xl font-semibold text-purple-400 mb-4">
            Ready to Transform Your Career?
          </div>
          <p className="text-lg text-gray-300 mb-6">
            Contact us today and start your journey towards a brighter future!
          </p>
          <button
            onClick={goToServices} // <-- Force navigation
            className="btn btn-primary btn-lg px-12 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 border-none text-white shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}
