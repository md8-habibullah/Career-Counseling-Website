// ServicesOverview.jsx

import React from "react";
import {
  FaUserGraduate,
  FaFileAlt,
  FaComments,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    title: "Career Counseling",
    description: "Get expert guidance to choose your ideal career path.",
    icon: <FaUserGraduate size={30} className="text-blue-500" />,
    price: "$50/session",
    duration: "1 hour",
  },
  {
    title: "Resume Review",
    description: "Optimize your resume to impress recruiters.",
    icon: <FaFileAlt size={30} className="text-green-500" />,
    price: "$30/session",
    duration: "30 min",
  },
  {
    title: "Interview Preparation",
    description: "Practice and ace your interviews with confidence.",
    icon: <FaComments size={30} className="text-yellow-500" />,
    price: "$40/session",
    duration: "45 min",
  },
  {
    title: "Skill Assessment",
    description: "Identify your strengths and areas to improve.",
    icon: <FaChartLine size={30} className="text-red-500" />,
    price: "$35/session",
    duration: "45 min",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-[#1e2939] text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-400 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="font-medium">
                {service.price} • {service.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
