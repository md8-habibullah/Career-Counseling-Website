import React from "react";
import services from "@/public/services.json";
import {
  FaStar,
  FaExclamationTriangle,
  FaCalendarAlt,
  FaUser,
  FaTag,
} from "react-icons/fa";

const Page = ({ params }) => {
  const serviceId = parseInt(params.id, 10);
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
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
  }

  return (
    <div className="p-8 max-w-4xl mx-auto mt-10">
      <div className="bg-gray-900 text-white rounded-2xl shadow-2xl border border-gray-700 overflow-hidden transform transition duration-500 hover:scale-105">
        <div className="relative">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>

        <div className="p-6 space-y-4">
          <h1 className="text-4xl font-extrabold">{service.name}</h1>

          <div className="flex flex-wrap gap-3 text-gray-300 mt-2">
            <span className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full transition hover:bg-gray-700">
              <FaTag /> {service.category}
            </span>
            <span className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full transition hover:bg-gray-700">
              <FaUser /> {service.counselor}
            </span>
            <span className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full transition hover:bg-gray-700">
              <FaCalendarAlt /> {service.duration}
            </span>
            <span className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full transition hover:bg-gray-700">
              <FaStar className="text-yellow-400" /> {service.rating}
            </span>
            <span className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full transition hover:bg-gray-700">
              Price: {service.price}
            </span>
          </div>

          <p className="text-gray-300 text-lg">{service.description}</p>

          <button className="btn btn-primary mt-4 hover:scale-105 transition-transform duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
