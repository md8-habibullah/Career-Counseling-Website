"use client";

import React, { useContext } from "react";
import AuthContext from "@/lib/AuthContext";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/signup"); // or /login
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-base-200 via-base-300 to-base-100 p-4">
      <div className="card w-full max-w-lg shadow-2xl bg-base-100 p-8 text-center rounded-lg">
        <h1 className="text-4xl font-bold mb-8 text-primary">
          {user ? "My Profile" : "Access Denied"}
        </h1>

        {user ? (
          <div className="space-y-4">
            <div className="avatar mb-4">
              <div className="w-52 h-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto overflow-hidden">
                <img
                  src={user.photoURL || `https://api.dicebear.com/9.x/identicon/svg?seed=${user.uid}`}
                  alt="User Avatar"
                />
              </div>
            </div>

            <h2 className="text-4xl font-semibold underline mb-2">
              {user.displayName ? `Welcome, ${user.displayName}` : "Welcome!"}
            </h2>
            <p className="text-lg text-gray-400 underline mb-1">Email: <span className="font-medium">{user.email}</span></p>
            {user.phoneNumber && (
              <p className="text-lg text-gray-400 underline mb-1">Phone: <span className="font-medium">{user.phoneNumber}</span></p>
            )}
            <p className="text-lg text-gray-400 mb-1">User ID: <span className="font-medium">{user.uid}</span></p>
            <p className="text-lg text-gray-400 italic   mb-1">Account Created: <span className="font-medium">{new Date(user.metadata?.creationTime).toLocaleString()}</span></p>
            <p className="text-lg text-gray-400 italic mb-4">Last Sign In: <span className="font-medium">{new Date(user.metadata?.lastSignInTime).toLocaleString()}</span></p>

            <button className="btn btn-error w-full text-lg" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-error mb-4 text-lg">
              No user is logged in. Please sign up or log in to continue.
            </p>
            <button
              className="btn btn-primary text-lg"
              onClick={() => router.push("/signup")}
            >
              Go to Signup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
