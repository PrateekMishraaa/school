import React, { useState } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [formData, setFormData] = useState({
        Email: "",
        Password: "",

    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Signup Successful!");
    };

    return (
        <div className='h-screen w-full flex justify-center items-center bg-orange-500'>
            <div className='h-auto w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl bg-white p-6 shadow-lg'>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <h2 className='text-3xl font-semibold font-serif text-center'>SignUp</h2>
                    <div className='flex flex-col'>
                      
                        <label htmlFor="email" className='font-medium'>Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="Email"
                            value={formData.Email}
                            onChange={handleChange}
                            placeholder='Enter your email...'
                            className='h-10 w-full border-2 rounded-xl px-2 mt-1'
                        />
                      
                        <label htmlFor="password" className='font-medium'>Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="Password"
                            value={formData.Password}
                            onChange={handleChange}
                            placeholder='Enter your password...'
                            className='h-10 w-full border-2 rounded-xl px-2 mt-1'
                        />
                       
                    </div>
                    <button className='h-10 w-40  border-2 rounded-xl bg-orange-500 text-white cursor-pointer hover:bg-orange-400 transition' type='submit'>Submit</button>
                </form>
                <p className='font-semibold'>Don't have an Account ? <a href="/signup" className='text-blue-500'>Signup</a></p>
            </div>
        </div>
    );
};

export default Login;
