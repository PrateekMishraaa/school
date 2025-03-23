import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { FaDownload, FaFileAlt, FaPhoneAlt, FaVideo, FaUserCog, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Microsoft from "../assets/icons8-microsoft.svg";
import Google from "../assets/download.png";
import Banner from "../assets/banner.jpeg";
import Boy from "../assets/Boy.avif";
import Adobe from "../assets/downloads.png";
import axios from "axios";

const Individual = () => {
  const [formdata, setFormData] = useState({
    Name: "",
    Email: "",
    Profession: "",
    PhoneNumber: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { Name, Email, Profession, PhoneNumber } = formdata;

    if (!Name || !Email || !Profession || !PhoneNumber) {
      toast.error("Please fill all the fields");
      return;
    }

    setLoading(true);
    try {
      await axios.post(
        "http://localhost:3000/api/enquiry",
        formdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Message sent successfully!");
      setFormData({ Name: "", Email: "", Profession: "", PhoneNumber: "" }); // Clear form
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      toast.error("An error occurred while sending the message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar className=""/>
      
      {/* Hero Section */}
      <div className='w-full flex flex-col items-center'>
        <div className='flex flex-col lg:flex-row justify-between px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-8 md:py-16 lg:py-20 w-full gap-8 lg:gap-4'>
          {/* Left Section */}
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500'>
              GET HIRED <span className='text-black'><br className='hidden md:block'/>WITH CONFIDENCE</span>
            </p>
            <p className='py-4 md:py-6 lg:py-10 text-gray-700 text-sm md:text-base'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, a. 
              Nisi architecto illo cumque aliquam dolorum mollitia error illum eum 
              laudantium! Id tempore maxime distinctio vitae molestias eveniet 
              consequuntur ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit.?
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start">
              <a href="/" className='h-10 w-40 text-white rounded-xl bg-orange-500 text-center py-2 font-semibold'>HOW WE WORK</a>
              <a href="/individual" className='h-10 w-40 text-orange-500 rounded-xl text-center py-2 font-semibold flex items-center justify-center gap-2'>
                <FaDownload /> Download E-Book
              </a>
            </div>
          </div>
          {/* Right Section */}
          <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0'>
            <img src={Banner} alt="Banner" className='rounded-3xl w-full max-w-md lg:max-w-full object-cover'/>
          </div>
        </div>
      </div>
      
      {/* Logos Section */}
      <div className='w-full py-8 px-4'>
        <div className='flex flex-wrap justify-center md:justify-between gap-8 px-4 sm:px-8 md:px-16 lg:px-24'>
            <div className='flex justify-center'>
                <img src={Microsoft} alt="Microsoft" className='h-12 sm:h-16 object-contain' />
            </div>
            <div className='flex justify-center'>
                <img src={Google} alt="Google" className='h-12 sm:h-16 object-contain' />
            </div>
            <div className='flex justify-center'>
                <img src={Adobe} alt="Adobe" className='h-12 sm:h-16 object-contain' />
            </div>
            <div className='flex justify-center'>
                <img src={Google} alt="Google" className='h-12 sm:h-16 object-contain' />
            </div>
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-10 md:py-16">
        {/* Heading */}
        <div className="text-left">
          <p className="text-lg text-green-500 font-semibold">Why choose us →</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-2">
            Lorem ipsum is <span className="text-blue-400">text placeholder.</span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and
            publishing industries for previewing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              className={`p-4 md:p-6 border rounded-xl shadow-sm text-center flex flex-col items-center ${
                index === 1 ? "bg-white shadow-lg" : ""
              }`}
            >
              <div className="text-orange-500 text-2xl md:text-3xl">
                <FaCheckCircle />
              </div>
              <h3 className="text-lg font-semibold mt-3 md:mt-4">Proof of quality.</h3>
              <p className="text-gray-500 text-xs md:text-sm mt-2">
                Lorem ipsum is placeholder text commonly used.
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
          <div className="bg-green-100 text-green-600 px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 text-sm md:text-base">
            <span>&#10003;</span> There are 94,750+ Jobs
          </div>
          <div className="bg-green-100 text-green-600 px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 text-sm md:text-base">
            <span>&#10003;</span> There are 94
          </div>
        </div>
      </div>
      
      {/* About Us Section */}
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-10 md:py-16">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full">
          {/* Left Section - Image */}
          <div className="w-full lg:w-2/5 h-64 sm:h-80 md:h-96 lg:h-auto rounded-xl overflow-hidden relative">
            <img
              src={Boy}
              alt="About Us"
              className="w-full h-full object-cover"
            />
            <button className="absolute left-4 bottom-4 bg-teal-500 text-white p-2 md:p-3 rounded-full">
              <FaArrowRight />
            </button>
          </div>

          {/* Right Section - Content */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center mt-6 lg:mt-0">
            <p className="text-base md:text-lg font-semibold text-teal-500">About Us</p>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mt-2">
              Lorem ipsum is placeholder text
            </h2>
            <p className="mt-3 md:mt-4 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
              The purpose of lorem ipsum is to create a natural-looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout. A practice not without controversy, laying out pages
              with meaningless filler text can be very useful when the focus is
              meant to be on design, not content.
            </p>
            <p className="mt-3 md:mt-6 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
              The passage experienced a surge in popularity during the 1960s when
              Letraset used it on their dry-transfer sheets, and again during the
              90s as desktop publishers bundled the text with their software.
              Today, it's seen all around the web.
            </p>

            {/* Buttons */}
            <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4">
              <button className="bg-orange-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-semibold">
                About Us
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-semibold">
                About Our Trainers
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-semibold mt-2 sm:mt-0">
                About Our Trainers
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Services Section */}
      <div className='w-full bg-gray-200 py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28'>
        <div className='text-center max-w-3xl mx-auto'>
          <p className='font-semibold text-[#328899] text-lg md:text-xl'>About us</p>
          <p className='text-2xl sm:text-3xl md:text-4xl font-bold mt-2 md:mt-4'>Our Services</p>
          <p className='text-xs md:text-sm text-gray-700 mt-3 md:mt-4'>
            The purpose of lorem ipsum is to create a natural looking block of text (sentence, 
            paragraph, page, etc.) that doesn't distract from the layout.
          </p>
          
          <div className='mt-10 md:mt-16'>
            <ul className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
              <div className='text-center'>
                <p className='text-2xl md:text-4xl font-bold'>100</p>
                <p className='text-gray-700 text-sm md:text-base mt-2'>Company With Us</p>
              </div>
              <div className='text-center'>
                <p className='text-2xl md:text-4xl font-bold'>10K</p>
                <p className='text-gray-700 text-sm md:text-base mt-2'>Employment</p>
              </div>
              <div className='text-center'>
                <p className='text-2xl md:text-4xl font-bold'>100%</p>
                <p className='text-gray-700 text-sm md:text-base mt-2'>Job Guarantee</p>
              </div>
              <div className='text-center'>
                <p className='text-2xl md:text-4xl font-bold'>20</p>
                <p className='text-gray-700 text-sm md:text-base mt-2'>Cities</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Job Assurance Packages */}
      <div className="w-full">
        {/* Header Section */}
        <div className="w-full bg-black py-16 md:py-28 px-4">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            Our Job Assurance Packages
          </p>
        </div>

        {/* Packages Section */}
        <div className="py-10 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 -mt-10 sm:-mt-16 md:-mt-24 lg:-mt-32">
          <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center">
            {/* Package Cards */}
            {[
              { color: "bg-white", textColor: "text-black", buttonColor: "bg-gray-300" },
              { color: "bg-blue-600", textColor: "text-white", buttonColor: "bg-white text-blue-600" },
              { color: "bg-orange-500", textColor: "text-white", buttonColor: "bg-white text-orange-500" },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-4 sm:p-6 rounded-xl shadow-lg ${pkg.color} flex flex-col items-center text-center`}
              >
                <h2 className={`text-lg sm:text-xl font-bold ${pkg.textColor}`}>Ultimate Career</h2>
                <ul className="my-4 text-left space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base w-full px-2 sm:px-4">
                  {["Unlimited Interviews", "HR Training", "Job Guarantee", "ATF-Approved CV", "Skill Boost (2 Months)"].map((item, idx) => (
                    <li key={idx} className={`flex items-center gap-2 ${pkg.textColor}`}>
                      ✅ {item} <span className="cursor-pointer ml-1">ℹ️</span>
                    </li>
                  ))}
                </ul>
                <button className={`rounded-lg py-2 px-4 mt-4 md:mt-8 lg:mt-12 font-semibold text-sm md:text-base ${pkg.buttonColor}`}>Enroll Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Process Steps */}
      <div className="flex justify-center items-center w-full py-10 bg-gray-100 px-4">
        <div className="w-full max-w-6xl">
          {/* Desktop progress line - hidden on mobile */}
          {/* <div className="hidden md:block absolute top-1/2 w-3/4 h-0.5 bg-dashed border-t-2 border-blue-400 z-0 left-1/2 transform -translate-x-1/2"></div> */}
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center z-10 w-full md:w-1/4">
              <span className="text-lg font-bold">1</span>
              <div className="bg-blue-500 text-white p-3 md:p-4 rounded-full flex items-center justify-center text-xl md:text-2xl">
                <FaFileAlt />
              </div>
              <p className="mt-2 text-xs md:text-sm">Fill the form</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center z-10 w-full md:w-1/4">
              <span className="text-lg font-bold">2</span>
              <div className="bg-blue-500 text-white p-3 md:p-4 rounded-full flex items-center justify-center text-xl md:text-2xl">
                <FaPhoneAlt />
              </div>
              <p className="mt-2 text-xs md:text-sm">Call with consultant</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center z-10 w-full md:w-1/4">
              <span className="text-lg font-bold">3</span>
              <div className="bg-blue-500 text-white p-3 md:p-4 rounded-full flex items-center justify-center text-xl md:text-2xl">
                <FaVideo />
              </div>
              <p className="mt-2 text-xs md:text-sm">Videocall with counsellor</p>
              
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center z-10 w-full md:w-1/4">
              <span className="text-lg font-bold">4</span>
              <div className="bg-blue-500 text-white p-3 md:p-4 rounded-full flex items-center justify-center text-xl md:text-2xl">
                <FaUserCog />
              </div>
              <p className="mt-2 text-xs md:text-sm">Process</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skill Development Section */}
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-16">
        <div className="max-w-4xl mx-auto bg-gray-100 rounded-xl p-4 sm:p-6 md:p-8">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
            Skill <span className="text-orange-500">Development</span> Program
          </p>
          <p className="font-semibold text-center text-slate-700 mt-2 text-sm md:text-base">
            Upgrade Your Career with In-Demand Skills
          </p>
          <div className="mt-6 md:mt-10 flex flex-wrap justify-center gap-4 md:gap-6">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`p-3 sm:p-4 md:p-6 border rounded-lg w-32 sm:w-36 md:w-40 text-center shadow-md bg-white ${
                  index === 2 ? "shadow-lg md:scale-110" : ""
                }`}
              >
                <div className="flex justify-center mb-2 text-orange-500 text-xl md:text-2xl">⭐</div>
                <p className="text-base md:text-lg font-semibold">Proof of quality</p>
                <p className="text-xs text-slate-600 mt-1">
                  Lorem ipsum is placeholder text commonly used.
                </p>
              </div>
            ))}
          </div>
        </div>
    
      </div>
    
    <div className="w-full flex flex-col items-center py-10 px-4 md:px-10 lg:px-20">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold md:text-4xl">Success Story</h2>
        <p className="text-lg text-gray-600 md:text-xl">
          Upgrade Your Career with In-Demand Skills
        </p>
      </div>

      {/* Video and Content Section */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Video Section */}
        <div className="w-full md:w-2/3 relative">
          <video
            className="w-full rounded-lg shadow-lg"
            controls
            poster="/path-to-thumbnail.jpg"
          >
            <source src="/path-to-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-2 left-2 h-1 bg-orange-500 w-1/4"></div>
        </div>

        {/* Description Section */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-2xl font-semibold">Mr. Ankur</h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Upgrade Your Career with In-Demand Skills Career with In-Demand
            Skills Career with In-Demand Skills Career with In-Demand Skills
            Career with In-Demand Skills Career with In-Demand.
          </p>
        </div>
      </div>

      {/* Video Thumbnails */}
      <div className="flex gap-4 mt-6">
        <div className="w-24 md:w-32 cursor-pointer">
          <img
            src="/path-to-thumbnail.jpg"
            alt="Thumbnail"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="w-24 md:w-32 cursor-pointer">
          <img
            src="/path-to-thumbnail.jpg"
            alt="Thumbnail"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
    <div className="w-full flex justify-center mt-12">
        <form className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6" onSubmit={handleSubmit}>
          <div className="bg-gray-100 rounded-2xl p-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Let's Connect</h2>
            <p className="text-gray-700 text-lg md:text-xl mt-2">
              Upgrade Your Career with In-Demand Skills
            </p>
          </div>
          
          <div className="mt-6">
            <label className="text-lg md:text-xl font-bold block">Name</label>
            <input
              type="text"
              name='Name'
              value={formdata.Name}
              onChange={handleChange}
              placeholder="Prateek Mishra"
              className="w-full mt-2 p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-6">
            <label className="text-lg md:text-xl font-bold block">Phone Number</label>
            <input
              type="text"
              name='PhoneNumber'
              value={formdata.PhoneNumber}
              onChange={handleChange}
              placeholder="+91-9540802061"
              className="w-full mt-2 p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-6">
            <label className="text-lg md:text-xl font-bold block">Email</label>
            <input
              type="text"
              name='Email'
              value={formdata.Email}
              onChange={handleChange}
              placeholder="pm921670@gmail.com"
              className="w-full mt-2 p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-6">
            <label className="text-lg md:text-xl font-bold block">Profession</label>
            <input
              type="text"
              name='Profession'
              value={formdata.Profession}
              onChange={handleChange}
              placeholder="Software Developer"
              className="w-full mt-2 p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type='submit' className='h-10 w-full md:w-40 bg-orange-500 text-white rounded-2xl cursor-pointer font-semibold mt-4'>Submit</button>
          <div className='h-20 w-full flex justify-center'>
            <ul className='flex gap-6 mt-4 px-6'>
              <li><a href="https://www.instagram.com/"><IoLogoInstagram className='text-2xl text-pink-600'/></a></li>
              <li><a href="https://www.facebook.com/login/"><FaFacebook className='text-2xl text-blue-500'/></a></li>
              <li><a href="https://www.linkedin.com/"><FaLinkedin className='text-2xl text-blue-500'/></a></li>
              <li><a href="https://x.com/?lang=en"><FaXTwitter className='text-2xl text-black'/></a></li>
            </ul>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Individual;