// components/dashboard/ProgressReport.jsx
import React from "react";

const ProgressReport = () => {
  const progress = 65; // Example: % of milestones completed
  return (
    <div className=" rounded-lg p-6 mb-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">Career Progress</h3>
      <div className="w-full bg-gray-200 rounded-full h-5">
        <div
          className="bg-green-500 h-5 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-2 text-gray-600">{progress}% milestones completed</p>
    </div>
  );
};

export default ProgressReport;
