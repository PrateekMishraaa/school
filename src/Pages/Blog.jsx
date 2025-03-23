import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Navbar from '../Components/Navbar';
import Image from "../assets/image2.png";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full flex flex-col lg:flex-row px-6 lg:px-20 py-10 gap-10">
        
        <div className="lg:w-2/3">
          <h1 className="text-red-600 text-3xl font-bold">
            Job Assurance We Bridge <br />The Gap!
          </h1>
          <hr className="mt-4 w-40 border-gray-400" />
          <p className="text-gray-700 text-lg mt-6">
            With our 100% job assurance, we bridge the gap between talent and opportunity, ensuring seamless hiring for employers and career success for candidates.
          </p>

          <div className="mt-6">
            <img src={Image} alt="Blog" className="rounded-xl w-full h-52 object-cover" />
          </div>

          <p className="text-gray-700 text-lg mt-6">
            Exppress Car Wash is a leading car cleaning and detailing company in India, renowned for its swift and professional services. Established in 2010, the brand has revolutionized the automobile cleaning industry by offering efficient car washes completed in just 20 minutes.
            <br /><br />
            Exppress Car Wash is a leading car cleaning and detailing company in India, renowned for its swift and professional services. Established in 2010, the brand has revolutionized the automobile cleaning industry by offering efficient car washes completed in just 20 minutes.
          </p>
        </div>

      
        <div className="lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-red-600 font-bold text-2xl flex items-center gap-2">
            <span className="text-2xl">⭐</span> More Vlog
          </h2>

         
          {["Blog 1", "Blog 2", "Blog 3", "Blog 4"].map((blog, index) => (
            <div key={index} className="bg-white p-4 mt-4 rounded-lg shadow">
              <h3 className="text-red-500 font-semibold text-lg">{blog}</h3>
              <p className="text-gray-600 text-sm mt-1">
                With our 100% job seamless assurance. <br />
                We bridge the gap between talent.
              </p>
            </div>
          ))}

          {/* Social Icons */}
          <div className="mt-6">
            <h3 className="text-gray-800 font-semibold text-lg">Connect with us</h3>
            <div className="flex gap-4 mt-3 text-xl text-gray-700">
              <FaInstagram className=" text-red-500 hover:text-red-500 cursor-pointer" />
              <FaFacebookF className=" text-blue-600 hover:text-blue-600 cursor-pointer" />
              <FaLinkedinIn className="text-blue-500 hover:text-blue-500 cursor-pointer" />
              <FaXTwitter className="hover:text-black cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
