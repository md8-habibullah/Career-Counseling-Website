// components/dashboard/Notifications.jsx
import React from "react";

const notifications = [
  "You have a session tomorrow at 10:00 AM",
  "New message from your counselor",
];

const Notifications = () => (
  <div className=" rounded-lg p-6 mb-6 shadow-md">
    <h3 className="text-xl font-semibold mb-4">Notifications</h3>
    <ul className="list-disc list-inside space-y-2 text-gray-100">
      {notifications.map((note, i) => (
        <li key={i}>{note}</li>
      ))}
    </ul>
  </div>
);

export default Notifications;
