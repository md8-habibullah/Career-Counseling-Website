// components/dashboard/Appointments.jsx
"use client";

import React from "react";

const mockAppointments = [
  { title: "Career Counseling", date: "2025-10-10", time: "10:00 AM" },
  { title: "Resume Review", date: "2025-10-12", time: "2:00 PM" },
];

const Appointments = () => {
  return (
    <div className=" rounded-lg p-6 mb-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">Upcoming Sessions</h3>
      <div className="space-y-3">
        {mockAppointments.map((a, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 border rounded hover:bg-gray-700 transition"
          >
            <div>
              <h4 className="font-medium">{a.title}</h4>
              <p className="text-gray-500">
                {a.date} • {a.time}
              </p>
            </div>
            <button className="btn btn-primary btn-sm">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
