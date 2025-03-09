import React from 'react';
import Navbar from '../Components/Navbar';

const About = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="h-auto min-h-[86vh] w-full flex justify-center items-center px-4">
          <div className="max-w-4xl w-full bg-white shadow-lg border-2 border-gray-300 rounded-2xl p-8 text-center">
            <h1 className="text-4xl font-bold font-serif text-orange-500 mb-4">
              About <span className="text-black">Us</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to our platform! We are dedicated to providing top-notch services that cater to your needs. 
              Our mission is to ensure quality, efficiency, and satisfaction for all our users. With a team of 
              experienced professionals, we strive to create innovative solutions that make a difference. 
              Customer satisfaction is at the core of our values, and we continuously work to improve and 
              adapt to the latest trends. Thank you for being a part of our journey.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;