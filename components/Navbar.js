"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/70 backdrop-blur-lg shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          HealthCare
        </Link>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            open ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8`}
        >
          <Link href="/" className="block mt-4 md:mt-0 text-gray-700 hover:text-indigo-600">
            Home
          </Link>
          <Link href="/about" className="block mt-4 md:mt-0 text-gray-700 hover:text-indigo-600">
            About
          </Link>
          <Link href="/appointment" className="block mt-4 md:mt-0 text-gray-700 hover:text-indigo-600">
            Appointment
          </Link>
          <Link href="/contact" className="block mt-4 md:mt-0 text-gray-700 hover:text-indigo-600">
            Contact
          </Link>
          <Link href="/account" className="block mt-4 md:mt-0 text-gray-700 hover:text-indigo-600">
            Account
          </Link>
        </div>
      </div>
    </nav>
  );
}
