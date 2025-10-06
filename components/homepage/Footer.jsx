import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 border-b border-gray-300 dark:border-gray-700 pb-10">
        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Our Services
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-blue-500 transition">
                Career Counseling
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500 transition">
                Resume Review
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500 transition">
                Interview Prep
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500 transition">
                Skill Development
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Company
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-blue-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500 transition">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500 transition">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Connect with us
          </h2>
          <div className="flex gap-4 text-xl">
            <Link
              href="#"
              className="hover:text-blue-600 transition-transform transform hover:scale-125"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="hover:text-sky-400 transition-transform transform hover:scale-125"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="hover:text-blue-700 transition-transform transform hover:scale-125"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="#"
              className="hover:text-red-500 transition-transform transform hover:scale-125"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} <strong className="underline underline-offset-4"><a href="https://github.com/md8-habibullah" target="_blank"> GitHub - md8-habibullah</a> </strong>{" "}
          - All rights reserved.
        </p>
        <p className="mt-1">
          Empowering your career journey with guidance & insights.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
