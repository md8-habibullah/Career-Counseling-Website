// components/dashboard/MotivationalQuote.jsx
import React from "react";

const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Your career is your responsibility. Own it!",
];

const MotivationalQuote = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className=" rounded-lg p-6 mb-6 shadow-md text-center italic text-gray-200">
      "{quote}"
    </div>
  );
};

export default MotivationalQuote;
