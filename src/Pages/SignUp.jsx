import React, { useState } from 'react';
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from '../Components/Loader';
import axios from "axios";
import {useNavigate} from "react-router-dom"
const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate passwords before making API call
        if (formData.password !== formData.confirmPassword) {
            return toast.error("Passwords do not match");
        }

        setLoading(true);
        try {
            await axios.post("http://localhost:3000/api/signup", formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            toast.success("Signup Successful!");
            navigate("/login")
        } catch (error) {
            console.log(error);
            toast.error("An error occurred while signing up");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='h-screen w-full flex justify-center items-center bg-orange-500'>
            <div className='h-auto w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl bg-white p-6 shadow-lg'>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <h2 className='text-3xl font-semibold font-serif text-center'>Sign Up</h2>
                    <div className='flex flex-col'>
                        <label htmlFor="fullName" className='font-medium'>Full Name:</label>
                        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder='Enter your name...' className='h-10 w-full border-2 rounded-xl px-2 mt-1' />

                        <label htmlFor="email" className='font-medium'>Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter your email...' className='h-10 w-full border-2 rounded-xl px-2 mt-1' />

                        <label htmlFor="mobile" className='font-medium'>Mobile:</label>
                        <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} placeholder='Enter your phone number...' className='h-10 w-full border-2 rounded-xl px-2 mt-1' />

                        <label htmlFor="password" className='font-medium'>Password:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder='Enter your password...' className='h-10 w-full border-2 rounded-xl px-2 mt-1' />

                        <label htmlFor="confirmPassword" className='font-medium'>Confirm Password:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder='Confirm your password...' className='h-10 w-full border-2 rounded-xl px-2 mt-1' />
                    </div>

                    <button className='h-10 w-40 border-2 rounded-xl bg-orange-500 text-white cursor-pointer hover:bg-orange-400 transition flex justify-center items-center' type='submit' disabled={loading}>
                        {loading ? <Loader /> : "Submit"}
                    </button>
                </form>
                <p className='font-semibold'>Already have an Account? <a href="/login" className='text-blue-500'>Login</a></p>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default SignUp;
