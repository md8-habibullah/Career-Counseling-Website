"use client";

import React, { useState, useContext } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/lib/__firebase_init";
import AuthContext from "@/lib/AuthContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { login } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();

  const handleLoginByGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      login(result.user); // result.user has name, email, photoURL, etc.
      console.log(result.user);
      router.push("/profile");
    } catch (error) {
      console.error(error.message);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("Login successful:", userCredential.user);
      login(userCredential.user); // Store in context
      router.push("/profile"); // Navigate to dashboard
    } catch (err) {
      console.error("Login error:", err);
      if (err.code === "auth/invalid-credential") {
        setError("Invalid email or password.");
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-full max-w-sm bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-primary mb-4">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mb-4">
            Login to access your dashboard
          </p>

          {error && (
            <div className="alert alert-error py-2 text-sm mb-3">{error}</div>
          )}

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="text-center mt-4 text-sm">
            Don’t have an account?{" "}
            <a href="/signup" className="link link-primary">
              Sign up
            </a>
            {/* signup by google */}
            <div className="divider">OR</div>
            <button
              className="btn btn-outline btn-secondary w-full"
              onClick={handleLoginByGoogle}
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
