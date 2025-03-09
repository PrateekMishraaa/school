import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black border-2 rounded-4xl text-white py-10 px-5 md:px-10 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Company Name</h2>
          <p className="text-sm mb-3">
            Your trusted platform for premium services and solutions.
          </p>
          <p className="text-sm">Email: contact@company.com</p>
          <p className="text-sm">Phone: +1 (123) 456-7890</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/login/" className="text-white hover:text-blue-700 text-2xl">
              <FaFacebookF />
            </a>
            <a href="https://x.com/?lang=en" className="text-white hover:text-blue-300 text-2xl">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/?hl=en" className="text-white hover:text-pink-400 text-2xl">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" className="text-white hover:text-blue-900 text-2xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 border-t border-white pt-4">
        &copy; {new Date().getFullYear()} Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;