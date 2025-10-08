// components/dashboard/Greeting.jsx
"use client";

import React, { useContext } from "react";
import AuthContext from "@/lib/AuthContext";

const Greeting = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="rounded-lg p-6 mb-6 shadow-md">
      <h2 className="text-2xl font-bold">
        Hi, {user?.displayName || "User"}! 👋
      </h2>
      <p className="text-gray-400 mt-2">Ready to plan your career today?</p>
    </div>
  );
};

export default Greeting;
