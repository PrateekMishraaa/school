import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-20 w-full border-b flex items-center justify-between px-6 md:px-12 lg:px-20 relative">
      <div className="text-3xl font-semibold font-serif">
        <a href="#">
          Hired <span className="text-orange-500">In</span>
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6 font-light font-serif">
        <a href="/" className="hover:text-orange-500 transition">
          Home
        </a>
        <a href="/blog" className="hover:text-orange-500 transition">
          Blog
        </a>
        <a href="/about" className="hover:text-orange-500 transition">
          About
        </a>

        <select className="border p-1 rounded-md outline-none hover:border-orange-500">
          <option value="">Service</option>
          <option value="">Web Development</option>
          <option value="">Graphic Design</option>
        </select>

        <a
          href="#"
          className="border px-4 py-2 rounded-xl hover:bg-orange-500 bg-orange-500 text-white hover:text-white flex items-center"
        >
          <FaUser className="text-sm mr-1" />
          Contact Us
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-xl border px-3 py-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 md:hidden z-50">
          <a href="/" className="hover:text-orange-500 transition">
            Home
          </a>
          <a href="/blog" className="hover:text-orange-500 transition">
            Blog
          </a>
          <a href="/about" className="hover:text-orange-500 transition">
            About
          </a>

          <select className="border p-1 rounded-md outline-none hover:border-orange-500">
            <option value="">Service</option>
            <option value="">Web Development</option>
            <option value="">Graphic Design</option>
          </select>

          <a
            href="#"
            className="border px-4 py-2 rounded-xl hover:bg-orange-500 bg-orange-500 text-white flex items-center"
          >
            <FaUser className="text-sm mr-1" />
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
