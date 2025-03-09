import React, { useState } from 'react';
import Navbar from "../Components/Navbar.jsx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from "../assets/images.png";
import axios from 'axios';
import { toast } from 'react-toastify';
import Footer from '../Components/Footer.jsx';

const HomePage = () => {
  const [formData, setFormData] = useState({ Name: "", Email: "", Message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success("Message sent successfully", response);
    } catch (error) {
      toast.error(error.response?.status === 400 ? "Email already exists. Try using a different email." : "Something went wrong. Please try again later.");
    }
  };

  useGSAP(() => {
    gsap.to('.box, .image, .textcenter', { x: 50, duration: 2 });
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className='flex flex-col-reverse md:flex-row justify-center items-center px-6 sm:px-12 md:px-16 lg:px-20 gap-10 min-h-[80vh] w-full'>
        <div className='w-full md:w-1/2 text-center md:text-left box'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
            GET <span className='text-orange-500'>HIRED</span> WITH <span className='text-orange-500'>CONFIDENCE</span>
          </h1>
          <p className='py-4 text-lg sm:text-xl max-w-lg'>
            With our 100% job assurance, we bridge the gap between talent and opportunity, ensuring seamless hiring for employers and career success for candidates.
          </p>
          <button className='h-12 w-40 rounded-xl font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all'>
            How we Work
          </button>
        </div>
        <div className='w-full md:w-1/2 flex justify-center'>
          <img src={Image} alt="Illustration" className='h-40 sm:h-56 md:h-72 lg:h-96 image' />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-orange-600 py-16 px-4 sm:px-8 flex flex-col items-center relative ">
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="black" d="M0,192L60,208C120,224,240,256,360,240C480,224,600,160,720,133.3C840,107,960,117,1080,133.3C1200,149,1320,171,1380,181.3L1440,192V320H0V192Z"></path>
        </svg>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-black textcenter'>
          How We <span className='text-black-500'>Work</span>
        </h2>
        <div className='w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg z-1'>
          <h3 className='text-xl sm:text-2xl font-bold text-center mb-4'>Keep in Touch</h3>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <input type='text' name='Name' value={formData.Name} onChange={handleChange} placeholder='Enter your name...' className='w-full h-12 border rounded-lg px-4 focus:ring-2 focus:ring-orange-500' required />
            <input type='email' name='Email' value={formData.Email} onChange={handleChange} placeholder='Enter your Email...' className='w-full h-12 border rounded-lg px-4 focus:ring-2 focus:ring-orange-500' required />
            <textarea name='Message' value={formData.Message} onChange={handleChange} placeholder='Enter your Message...' className='w-full h-24 border rounded-lg px-4 focus:ring-2 focus:ring-orange-500' required />
            <button type='submit' className='w-full h-12 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-all'>Submit</button>
          </form>
        </div>
      </div>

      {/* Job Assurance Section */}
      <div className='bg-black py-20 px-6 sm:px-12'>
        <h2 className='text-4xl sm:text-5xl font-bold text-white mb-6 max-w-lg'>Our Job Assurance Package</h2>
        <hr className='border-white w-1/3' />
        <div className='flex flex-col md:flex-row items-center justify-center gap-6 mt-8'>
          <div className='h-60 sm:h-80 w-3/4 md:w-72 bg-orange-500 rounded-4xl'>
          <p className='text-white px-12   font-bold font-serif text-2xl py-4'>Job Ready</p>
          <p className='w-72 px-12 font-serif text-white font-semibold'>Unlimited Interview <br/>Scheduling Until You<br/> get a job</p>
          <p className='w-72 px-12 py-5 font-serif text-white font-semibold'>ATS Approved <br/>Scheduling Until You<br/> get a job</p>
          <a href="" className='h-10 w-40 px-12 mt-2  relative top-4 border-2 border-white rounded-2xl left-4 p-2 text-white text-center'>ENROLL NOW</a>
          </div>
          <div className='h-72 sm:h-90 relative right-20   w-3/4 md:w-72 bg-purple-500 rounded-4xl'>
          <p className='text-white px-8  font-bold font-serif text-2xl py-4'>Carrier Booster</p>
          <p className='w-72 px-12 font-serif text-white font-semibold'>Unlimited Interview <br/>Scheduling Until You<br/> get a job</p>
          <p className='w-72 px-12 py-5 font-serif text-white font-semibold'>ATS Approved <br/>Scheduling Until You<br/> get a job</p>
          <a href="" className='h-10 w-40 px-12 mt-8  border-2 border-white rounded-2xl ml-6  p-2  relative   top-8 text-white text-center'>ENROLL NOW</a></div>
          <div className='h-72 sm:h-[60vh] absolute right-72   w-3/4 md:w-72 bg-white rounded-4xl'>
          <p className=' px-8  font-bold font-serif text-2xl py-4 text-black'>Unlimited Carrier Growth</p>
          <p className='w-72 px-12 font-serif text-black font-semibold '>Unlimited Interview <br/>Scheduling Until You<br/> get a job</p>
          <p className='w-72 px-12 py-5 font-serif text-black font-semibold'>ATS Approved <br/>Scheduling Until You<br/> get a job</p>
          <a href="" className='h-10 w-40 px-12 mt-8  border-2 border-black rounded-2xl ml-6  p-2  relative   top-12 text-black text-center'>ENROLL NOW</a>
          </div>
        </div>
        
      </div>
      <Footer/>
    </>
  );
};

export default HomePage;