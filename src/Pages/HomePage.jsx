import React from 'react';
import Navbar from "../Components/Navbar.jsx";
import Person from "../assets/person.avif";

const HomePage = () => {
  return (
    <>
      <Navbar  className="sticky"/>
      <div className='h-auto w-full flex flex-col items-center'>
        <div className='flex flex-col-reverse lg:flex-row justify-between px-6 md:px-12 lg:px-28 py-10 md:py-16 lg:py-20 w-full'>
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
              <a href="/Company-view" className='h-10 w-40 text-white rounded-xl bg-orange-500 text-center py-2 font-semibold'>Company</a>
              <a href="/individual" className='h-10 w-40 text-white rounded-xl bg-orange-500 text-center py-2 font-semibold'>Individual</a>
            </div>
          </div>
          {/* Right Section */}
          <div className='w-full lg:w-1/2 flex justify-center lg:justify-end relative'>
            <img src={Person} alt="Person" className='h-72 md:h-72 lg:h-[80vh] w-auto' />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
