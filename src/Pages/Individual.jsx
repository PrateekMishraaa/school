import React from 'react';
import Navbar from '../Components/Navbar';
import { FaDownload } from "react-icons/fa6";
import Microsoft from "../assets/icons8-microsoft.svg"
import Google from "../assets/download.png"
import Adobe from "../assets/downloads.png"
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
const Individual = () => {
  return (
    <>
      <Navbar className=""/>
      <div className='h-auto w-full  flex flex-col items-center'>
        <div className='flex flex-col lg:flex-row justify-between px-6 md:px-12 lg:px-28 py-10 md:py-16 lg:py-20 w-full'>
          {/* Left Section */}
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <p className='text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500'>
              GET HIRED <span className='text-black'><br className='hidden md:block'/>WITH CONFIDENCE</span>
            </p>
            <p className='py-6 md:py-10 text-gray-700 text-sm md:text-base'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, a. 
              Nisi architecto illo cumque aliquam dolorum mollitia error illum eum 
              laudantium! Id tempore maxime distinctio vitae molestias eveniet 
              consequuntur ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit.?
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start">
              <a href="/" className='h-10 w-40 text-white rounded-xl bg-orange-500 text-center py-2 font-semibold'>HOW WE WORK</a>
              <a href="/individual" className='h-10 w-40 text-orange-500  rounded-xl text-center py-2 font-semibold flex items-center justify-center gap-2'>
                <FaDownload /> Download E-Book
              </a>
            </div>
          </div>
          {/* Right Section Placeholder */}
          <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
            <p className='text-2xl font-semibold text-gray-500'>Right Section Content Here</p>
          </div>
        </div>
      </div>
      <div className='h-20 w-full '>
        <div className='flex justify-between px-24 py-2'>
            <div>
                <img src={Microsoft} alt=""className='h-18' />
            </div>
            <div>
                <img src={Google} alt="" className='h-18' />
            </div>
            <div>
            <img src={Adobe} alt="" className='h-16' />
            </div>
            <div>
            <img src={Google} alt="" className='h-18' />
            </div>
        </div>
      </div>
      <div className="w-full px-6 md:px-12 lg:px-28 py-10 md:py-16 lg:py-20">
      {/* Heading Section */}
      <div className="text-left">
        <p className="text-lg text-green-500 font-semibold">Why choose us →</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Lorem ipsum is <span className="text-blue-400">text placeholder.</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum is placeholder text commonly used in the graphic, print, and
          publishing industries for previewing.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            key={index}
            className={`p-6 border rounded-xl shadow-sm text-center flex flex-col items-center ${
              index === 1 ? "bg-white shadow-lg" : ""
            }`}
          >
            <div className="text-orange-500 text-3xl">
              <FaCheckCircle />
            </div>
            <h3 className="text-lg font-semibold mt-4">Proof of quality.</h3>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum is placeholder text commonly used.
            </p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-10 flex flex-col md:flex-row gap-4">
        <div className="bg-green-100 text-green-600 px-6 py-3 rounded-full flex items-center gap-2">
          <span>&#10003;</span> There are 94,750+ Jobs
        </div>
        <div className="bg-green-100 text-green-600 px-6 py-3 rounded-full flex items-center gap-2">
          <span>&#10003;</span> There are 94
        </div>
      </div>
    </div>
    <div className="h-[80vh] w-full px-36 py-20 flex items-center">
      <div className="flex gap-10 w-full">
        {/* Left Section - Image */}
        <div className="h-[60vh] w-[35%] rounded-xl overflow-hidden relative">
          <img
            src="/your-image.jpg" // Replace with actual image path
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <button className="absolute left-4 bottom-4 bg-teal-500 text-white p-3 rounded-full">
            <FaArrowRight />
          </button>
        </div>

        {/* Right Section - Content */}
        <div className="h-[60vh] w-[65%] flex flex-col justify-center">
          <p className="text-lg font-semibold text-teal-500">About Us</p>
          <h2 className="font-bold text-5xl text-gray-900 leading-tight">
            Lorem ipsum is placeholder text
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            The purpose of lorem ipsum is to create a natural-looking block of
            text (sentence, paragraph, page, etc.) that doesn’t distract from
            the layout. A practice not without controversy, laying out pages
            with meaningless filler text can be very useful when the focus is
            meant to be on design, not content.
          </p>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            The passage experienced a surge in popularity during the 1960s when
            Letraset used it on their dry-transfer sheets, and again during the
            90s as desktop publishers bundled the text with their software.
            Today, it’s seen all around the web.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold">
              About Us
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold">
              About Our Trainers
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold">
              Anout Our Trainers
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Individual;