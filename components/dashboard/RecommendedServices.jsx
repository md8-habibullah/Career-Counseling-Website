    // components/dashboard/RecommendedServices.jsx
import React from "react";

const recommended = ["Resume Review", "Interview Preparation", "Skill Assessment"];

const RecommendedServices = () => {
  return (
    <div className=" rounded-lg p-6 mb-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">Recommended For You</h3>
      <div className="flex flex-wrap gap-3">
        {recommended.map((service, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full cursor-pointer hover:bg-blue-200 transition"
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RecommendedServices;
