import React from 'react';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="h-20 w-full border-b-1 flex items-center justify-between px-6 md:px-12 lg:px-20">
   
      <div className="text-3xl font-semibold font-serif">
        <a href="#">
          Hired <span className="text-orange-500">In</span>
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-6 font-light font-serif ">
        <a href="/" className="hover:text-orange-500 transition">Home</a>
        <a href="#" className="hover:text-orange-500 transition">Blog</a>
        <a href="/about" className="hover:text-orange-500 transition">About</a>
        
        <select className="border p-1 rounded-md outline-none hover:border-orange-500">
          <option value="">Service</option>
          <option value="">Web Development</option>
          <option value="">Graphic Design</option>
        </select>
        
        <a href="#" className="border px-4 py-2 rounded-xl hover:bg-orange-500 bg-orange-500 text-white hover:text-white hover:transition flex items-center"> <FaUser className="text-sm" />Contact Us</a>
        
       
      </div>
      
    
      <div className="md:hidden">
        <button className="text-xl border px-3 py-2 rounded-md">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
