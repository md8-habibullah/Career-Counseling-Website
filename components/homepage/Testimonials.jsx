// Testimonials.jsx

import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote: "500+ students guided successfully to their dream careers!",
    author: "Our Success Story",
  },
  {
    quote: "95% satisfaction rate from our clients!",
    author: "Happy Clients",
  },
  {
    quote: "Expert counselors with years of industry experience.",
    author: "Professional Team",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#1e2939] text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-amber-50">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-400 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="italic mb-4">"{t.quote}"</p>
              <p className="font-semibold">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
