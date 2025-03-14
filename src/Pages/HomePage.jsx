import React, { useState } from 'react';
import Navbar from "../Components/Navbar.jsx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from "../assets/images.png";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Google from "../assets/google.svg";
import Adobe from "../assets/adobe.png";
import Microsoft from "../assets/microsoft.png";
import Footer from '../Components/Footer.jsx';

const HomePage = () => {
  const [formData, setFormData] = useState({ Name: "", Email: "", Phone:"", });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response)
      toast.success("Message sent successfully");
      setFormData({ Name: "", Email: "", Phone: "" }); // Reset form after successful submission
    } catch (error) {
      toast.error(error.response?.status === 400 ? "Email already exists. Try using a different email." : "Something went wrong. Please try again later.");
    }
  };

  useGSAP(() => {
    gsap.to('.animate-element', { 
      x: 50, 
      duration: 2,
      ease: "power2.out",
      stagger: 0.2
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          GET <span className="text-orange-500">HIRED</span><br />
          WITH <span className="text-orange-500">CONFIDENCE</span>
        </h1>
        
        <p className="text-lg mb-10 max-w-lg">
          With our 100% job assurance, we bridge the gap between talent and opportunity, ensuring seamless hiring for employers and career success for candidates.
        </p>
        
        <div className="mb-10 border-b border-gray-300"></div>
        
        <button className="bg-orange-500 text-white font-bold py-4 px-8 rounded-md hover:bg-orange-600 transition-colors w-48 text-center">
          HOW WE WORK
        </button>
      </div>
      
      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-gray-50 p-8 md:p-16 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-orange-500 bg-transparent"
              required
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-orange-500 bg-transparent"
              required
            />
          </div>
          
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone no."
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-orange-500 bg-transparent"
              required
            />
          </div>
          
          <div className="relative">
            <select
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-orange-500 bg-transparent appearance-none"
              required
            >
              <option value="" disabled>Profession ▼</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="pt-8">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-bold py-4 px-8 rounded-md hover:bg-orange-600 transition-colors"
            >
              GET HIRED TODAY
            </button>
          </div>
        </form>
      </div>
    </div>

      {/* Partners Section */}
      <section className="w-full py-6 sm:py-8 border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-12 lg:gap-16 overflow-x-auto scrollbar-hide">
            <img src={Google} alt="Google" className="h-8 sm:h-12 md:h-16 lg:h-20 object-contain flex-shrink-0"/>
            <img src={Adobe} alt="Adobe" className="h-8 sm:h-12 md:h-16 lg:h-20 object-contain flex-shrink-0"/>
            <img src={Microsoft} alt="Microsoft" className="h-8 sm:h-12 md:h-16 lg:h-20 object-contain flex-shrink-0"/>
            <img src={Google} alt="Google" className="h-8 sm:h-12 md:h-16 lg:h-20 object-contain flex-shrink-0"/>
            <img src={Adobe} alt="Adobe" className="h-8 sm:h-12 md:h-16 lg:h-20 object-contain flex-shrink-0"/>
          </div>
        </div>
      </section>

      {/* Unemployment Data Section */}
      <section className="bg-orange-600 py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 w-full">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white max-w-md">
            UNEMPLOYMENT DATA OUR DATA
          </h2>
          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* You can add unemployment data visualization components here */}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-black py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
            {/* About Us Card */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 sm:mb-6">
                <span className="text-orange-500">ABOUT</span> <span className="text-black">US</span>
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-xs sm:text-sm md:text-base">
                  At HiredIn, we streamline the hiring process by connecting
                  companies with top-tier, pre-trained candidates who are ready to
                  excel from day one. Our expert-led training, conducted by
                  industry-leading HR professionals, empowers young professionals
                  with the skills, confidence, and knowledge to ace interviews and
                  secure their dream jobs.
                </p>
                <p className="text-xs sm:text-sm md:text-base">
                  With our 100% job assurance, we bridge the gap between talent
                  and opportunity, ensuring seamless hiring for employers and career
                  success for candidates. Hire with confidence and build a stronger
                  workforce today!
                </p>
              </div>
            </div>
            
            {/* How We Work Section */}
            <div className="flex flex-col items-start text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 ml-4 sm:ml-8">HOW WE </h2>
              <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 w-full sm:w-3/4 md:w-2/3 lg:w-[50%] h-40 sm:h-48 md:h-60 mb-4 sm:mb-8">
                {/* Content for How We Work can go here */}
              </div>
              <button className="h-8 sm:h-10 w-40 p-1 sm:w-46 font-bold rounded-2xl ml-24 border-2 border-white bg-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white transition-colors duration-300">
              HOW WE WORK
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto relative">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-white leading-tight">
            Our Job<br />
            Assurance<br />
            Packages
          </h2>
          <div className="hidden md:block absolute left-48 top-32">
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10 C40 10, 80 40, 110 70" stroke="#888888" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M100 60 L110 70 L100 80" stroke="#888888" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Job-Ready Package */}
          <div className="bg-orange-500 rounded-3xl p-8 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Job-Ready
            </h3>
            
            <ul className="space-y-6 flex-grow mb-8">
              <li className="flex items-start">
                <div className="min-w-6 h-6 bg-white text-orange-500 rounded flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span className="text-white font-semibold">
                  Unlimited interview scheduling until you secure a job
                </span>
              </li>
              <li className="flex items-start">
                <div className="min-w-6 h-6 bg-white text-orange-500 rounded flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span className="text-white font-semibold">
                  ATF-approved CV to enhance your profile
                </span>
              </li>
              <li className="flex items-start">
                <div className="min-w-6 h-6 bg-white text-orange-500 rounded flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span className="text-white font-semibold">
                  Professional portfolio to showcase your skills
                </span>
              </li>
            </ul>
            
            <button className="w-full py-3 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-orange-500 transition-colors duration-300">
              ENROLL NOW
            </button>
          </div>
          
          {/* Career Booster Package */}
          <div className="bg-purple-500 rounded-3xl p-8 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Career Booster
            </h3>
            
            <ul className="space-y-6 flex-grow mb-8">
              <li className="flex items-start">
                <div className="min-w-6 h-6 bg-white text-purple-500 rounded flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span className="text-white font-semibold">
                  Unlimited interview scheduling until you secure a job
                </span>
              </li>
              <li className="flex items-start">
                <div className="min-w-6 h-6 bg-white text-purple-500 rounded flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span className="text-white font-semibold">
                  Expert-led HR training for interview and workplace success
                </span>
              </li>
              <li className="flex items-start">
                <div className="min-w-6 h-6 bg-white text-purple-500 rounded flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span className="text-white font-semibold">
                  ATF-approved CV to stand out in job applications
                </span>
              </li>
              <li className="flex items-start">
                <div className="min-w-6 h-6 bg-white text-purple-500 rounded flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span className="text-white font-semibold">
                  100% Job Guarantee for assured career placement
                </span>
              </li>
            </ul>
            
            <button className="w-full py-3 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-purple-500 transition-colors duration-300">
              ENROLL NOW
            </button>
          </div>
          
          {/* Ultimate Career Growth Package */}
          <div className="bg-white rounded-3xl p-8 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-black text-center mb-8">
              Ultimate Career Growth
            </h3>
            
            <ul className="space-y-6 flex-grow mb-8">
              <li className="flex items-start">
                <div className="min-w-6 h-6 bg-black text-white rounded flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span className="text-black font-semibold">
                  Unlimited interview scheduling until you secure a job
                </span>
              </li>
              <li className="flex items-start">
                <div className="min-w-6 h-6 bg-black text-white rounded flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span className="text-black font-semibold">
                  Expert-led HR training for career readiness
                </span>
              </li>
              <li className="flex items-start">
                <div className="min-w-6 h-6 bg-black text-white rounded flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span className="text-black font-semibold">
                  100% Job Guarantee for secure employment
                </span>
              </li>
              <li className="flex items-start">
                <div className="min-w-6 h-6 bg-black text-white rounded flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span className="text-black font-semibold">
                  ATF-approved CV to maximize your chances
                </span>
              </li>
              <li className="flex items-start">
                <div className="min-w-6 h-6 bg-black text-white rounded flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span className="text-black font-semibold">
                  Skill development within 2 months to boost expertise and confidence
                </span>
              </li>
            </ul>
            
            <button className="w-full py-3 border-2 border-black text-black font-bold rounded-2xl hover:bg-black hover:text-white transition-colors duration-300">
              ENROLL NOW
            </button>
          </div>
        </div>
      </div>
    </section>
    <div class="bg-orange-500 text-white p-8">
  {/* <!-- ABOUT THE TANNERS SECTION --> */}
  <h2 class="text-3xl font-bold text-center mb-8">ABOUT THE TANNERS</h2>
  
  <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-8">
    {/* <!-- First Card Set --> */}
    <div class="flex gap-1">
      <div class="w-24 h-40 md:w-32 md:h-48 bg-white rounded-2xl"></div>
      <div class="w-20 h-40 md:w-24 md:h-48 bg-white rounded-2xl"></div>
      <div class="w-24 h-40 md:w-32 md:h-48 bg-white rounded-2xl"></div>
    </div>
    
    {/* <!-- Second Card Set --> */}
    <div class="flex gap-1">
      <div class="w-24 h-40 md:w-32 md:h-48 bg-white rounded-2xl"></div>
      <div class="w-20 h-40 md:w-24 md:h-48 bg-white rounded-2xl"></div>
      <div class="w-24 h-40 md:w-32 md:h-48 bg-white rounded-2xl"></div>
    </div>
  </div>
  
  {/* <!-- Description --> */}
  <div class="flex flex-col md:flex-row justify-center gap-6 md:gap-10 text-center md:text-left mb-12">
    <p class="w-full md:w-80 text-sm">
      At HiredIn, we streamline the hiring process by connecting companies with top-tier, pre-trained candidates who are ready to excel from day one. Our expert-led training, conducted by industry-leading HR professionals, empowers young professionals with the skills, confidence, and knowledge to ace interviews and secure their dream jobs.
    </p>
    <p class="w-full md:w-80 text-sm">
      At HiredIn, we streamline the hiring process by connecting companies with top-tier, pre-trained candidates who are ready to excel from day one. Our expert-led training, conducted by industry-leading HR professionals, empowers young professionals with the skills, confidence, and knowledge to ace interviews and secure their dream jobs.
    </p>
  </div>
  
  {/* <!-- SKILL DEVELOPMENT PROGRAM SECTION --> */}
  <h2 class="text-2xl font-bold text-center mt-12 mb-8">SKILL DEVELOPMENT PROGRAM</h2>
  
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
    <div class="aspect-square bg-white"></div>
    <div class="aspect-square bg-white"></div>
    <div class="aspect-square bg-white"></div>
    <div class="aspect-square bg-white"></div>
    <div class="aspect-square bg-white"></div>
    <div class="aspect-square bg-white"></div>
  </div>
</div>

      {/* Contact Form Section */}
      <section className="bg-black py-10 sm:py-16 px-4 sm:px-8 relative w-full">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-10 text-white text-center ">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <div className="w-full max-w-lg bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg z-10 ">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 sm:mb-6">Keep in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input 
                type="text" 
                name="Name" 
                value={formData.Name} 
                onChange={handleChange} 
                placeholder="Enter your name..." 
                className="w-full h-10 sm:h-12 border rounded-lg px-4 focus:ring-2 focus:ring-orange-500 focus:outline-none" 
                required 
              />
              <input 
                type="email" 
                name="Email" 
                value={formData.Email} 
                onChange={handleChange} 
                placeholder="Enter your Email..." 
                className="w-full h-10 sm:h-12 border rounded-lg px-4 focus:ring-2 focus:ring-orange-500 focus:outline-none" 
                required 
              />
               <input 
                type="text" 
                name="Phone" 
                value={formData.Phone} 
                onChange={handleChange} 
                placeholder="Enter your Phone...." 
                className="w-full h-10 sm:h-12 border rounded-lg px-4 focus:ring-2 focus:ring-orange-500 focus:outline-none" 
                required 
              />
            
              <button 
                type="submit" 
                className="w-full h-10 sm:h-12 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path fill="#000" d="M0,64L60,80C120,96,240,128,360,128C480,128,600,96,720,85.3C840,75,960,85,1080,90.7C1200,96,1320,96,1380,96L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </section>

      {/* Job Assurance Section */}
    

      <Footer />
    </div>
  );
};

export default HomePage;
