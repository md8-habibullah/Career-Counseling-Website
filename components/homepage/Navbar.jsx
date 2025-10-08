"use client";

import Link from "next/link";
import React, { useContext } from "react";
import AuthContext from "@/lib/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const items = {
    Home: "/",
    Services: "/services",
    Profile: "/profile",
    Dashboard: "/dashboard",
  };

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {Object.entries(items).map(([key, value]) => (
              <li key={key}>
                <Link href={value}>{key}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Brand */}
        <Link
          href="/"
          className="btn btn-ghost text-2xl font-bold text-primary"
        >
          &gt;&gt; CAREER
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {Object.entries(items).map(([key, value]) => (
            <li key={key}>
              <Link href={value} className="hover:text-primary font-medium">
                {key}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end space-x-2">
        {!user ? (
          <>
            <Link href="/login" className="btn btn-outline btn-sm">
              Login
            </Link>
            <Link href="/signup" className="btn btn-primary btn-sm">
              Sign Up
            </Link>
          </>
        ) : (
          <div className="dropdown dropdown-end flex items-center space-x-2">
            <p>{user.email}</p>

            {/* Avatar */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={
                    user.photoURL ||
                    `https://api.dicebear.com/9.x/identicon/svg?seed=${user.uid}`
                  }
                  alt="User Avatar"
                />
              </div>
            </div>

            {/* Dropdown Content */}
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button onClick={logout} className="text-error font-semibold">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
