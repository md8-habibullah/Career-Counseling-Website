"use client";
import React, { useState } from "react";
import { auth } from "@/lib/__firebase_init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useContext } from "react";
import AuthContext from "@/lib/AuthContext";
import { useRouter } from "next/navigation";

const Signup = () => {
  const provider = new GoogleAuthProvider();

  const router = useRouter();
  const RedirectType = { replace: "replace", push: "push" };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, logout, user } = useContext(AuthContext);

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

  const handleSignup = async () => {
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User Credential:", userCredential);
      console.log("User:", userCredential.user);
      login(userCredential.user);
      // Redirect or show success message here
      router.push("/profile", RedirectType.push);
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">
            Create Account
          </h2>

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

          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full mb-3"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
          {/* already have account go login page  */}
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <span
              className="text-primary cursor-pointer"
              onClick={() => router.push("/login", RedirectType.push)}
            >
              Log In
            </span>
          </p>
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
  );
};

export default Signup;
