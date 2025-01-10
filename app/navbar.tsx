"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiHome, HiAcademicCap, HiPencil, HiCamera, HiSearch } from "react-icons/hi";
import { FaLinkedin, FaMailBulk, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, "_blank");
    }
  };

  return (
    <div className="relative flex items-center justify-between px-6 py-4 bg-[rgba(34, 34, 34, 0.6)] backdrop-blur-md text-white shadow-lg z-10">
      {/* Left Section: Contact Icons */}
      <div className="flex space-x-4">
        <a
          href="https://www.instagram.com/o.t.h.o.i/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center"
          aria-label="Instagram"
        >
          <FaInstagram className="text-2xl hover:shadow-glow transition-all duration-300" />
          <span className="hidden group-hover:block absolute top-12 text-sm bg-white text-black px-2 py-1 rounded shadow-md">
            Instagram
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/farhat-lamisa-othoi-a91a90214/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-2xl hover:shadow-glow transition-all duration-300" />
          <span className="hidden group-hover:block absolute top-12 text-sm bg-white text-black px-2 py-1 rounded shadow-md">
            LinkedIn
          </span>
        </a>
        <a
          href="mailto:othoijosna@gmail.com"
          className="group relative flex items-center justify-center"
          aria-label="Gmail"
        >
          <FaMailBulk className="text-2xl hover:shadow-glow transition-all duration-300" />
          <span className="hidden group-hover:block absolute top-12 text-sm bg-white text-black px-2 py-1 rounded shadow-md">
            Gmail
          </span>
        </a>
      </div>

      {/* Center Section: Search Bar */}
      <form onSubmit={handleSearch} className="relative w-96">
        <div className="flex items-center bg-[#445670] bg-opacity-70 rounded-full px-4 py-1 shadow-md">
          <HiSearch className="text-gray-400 text-xl mr-2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search anything..."
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
          />
        </div>
      </form>

      {/* Right Section: Navigation Icons */}
      <div className="flex space-x-6">
        <Link href="/" className="flex flex-col items-center hover:text-gray-300 transition-colors">
          <HiHome className="text-2xl hover:shadow-glow transition-all duration-300" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="/academics" className="flex flex-col items-center hover:text-gray-300 transition-colors">
          <HiAcademicCap className="text-2xl hover:shadow-glow transition-all duration-300" />
          <span className="text-xs mt-1">Academics</span>
        </Link>
        <Link href="/poetry" className="flex flex-col items-center hover:text-gray-300 transition-colors">
          <HiPencil className="text-2xl hover:shadow-glow transition-all duration-300" />
          <span className="text-xs mt-1">Poetry</span>
        </Link>
        <Link href="/photography" className="flex flex-col items-center hover:text-gray-300 transition-colors">
          <HiCamera className="text-2xl hover:shadow-glow transition-all duration-300" />
          <span className="text-xs mt-1">Photography</span>
        </Link>
      </div>
    </div>
  );
}
