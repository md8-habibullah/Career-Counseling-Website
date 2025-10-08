// components/dashboard/QuickActions.jsx
import React from "react";
import Link from "next/link";

const actions = [
  { title: "Book New Session", href: "/services" },
  { title: "View Profile", href: "/profile" },
  { title: "Download Career Report", href: "/dashboard/report" },
];

const QuickActions = () => (
  <div className="rounded-lg p-6 mb-6 shadow-md">
    <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
    <div className="flex flex-wrap gap-3">
      {actions.map((action, i) => (
        <Link key={i} href={action.href} className="btn btn-outline btn-sm">
          {action.title}
        </Link>
      ))}
    </div>
  </div>
);

export default QuickActions;
