import React from "react";
import Navbar from "../Components/Navbar";
import Image from "../assets/image.png"
const About = () => {
  return (
    <>
      <Navbar />

      {/* Main Container */}
      <div className="min-h-screen flex flex-col items-center px-4">
        {/* Job Assurance Section */}
        <div className="w-full flex flex-col items-center py-10 px-4">
          <p className="text-2xl md:text-3xl font-semibold text-center max-w-screen-lg">
            Job Assurance We Bridge The Gap!
          </p>
          <p className="text-sm md:text-base text-center max-w-screen-md mt-2">
            Express Car Wash is a leading car cleaning and detailing company in India, renowned for its swift.
          </p>

          {/* Bordered Box with Books */}
          <div className="w-full md:w-4/5 border-2 border-blue-500 mt-6 p-6 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {Array(4).fill().map((_, index) => (
                <div key={index} className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center">
                  <img src={Image} alt="Book Cover" className="w-full h-48 object-cover rounded-lg" />
                  <p className="mt-2 font-semibold text-center">Job Assurance We Bridge The Gap!</p>
                  <p className="text-red-500 font-semibold mt-2 cursor-pointer">Read Now</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Daily Newsletter Section */}
        <div className="w-full flex flex-col items-center py-10 px-4">
          <p className="text-2xl md:text-3xl font-semibold text-center">Daily News Letter</p>
          <p className="text-sm md:text-base text-center max-w-screen-md mt-2">
            Express Car Wash is a leading car cleaning and detailing company in India, renowned for its swift.
          </p>
          
          {/* News Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 w-full md:w-4/5">
            {Array(3).fill().map((_, index) => (
              <div key={index} className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center">
                <img src="https://via.placeholder.com/250" alt="News" className="w-full h-40 object-cover rounded-lg" />
                <p className="mt-2 font-semibold text-center">Leading Car</p>
                <p className="text-sm text-center">Express Car Wash is a leading car cleaning.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
