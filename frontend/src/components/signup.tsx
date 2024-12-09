import React, { useState } from 'react';
import axios from 'axios';
import Nav from './nav';
import Footer from './footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { backend_url } from './home';

const Signup = () => {
    const [signin, setsignin] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        phone: '',
    });

    const [passwordValidations, setPasswordValidations] = useState({
        length: false,
        special: false,
        uppercase: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update form data
        setFormData({
            ...formData,
            [name]: value,
        });

        // Validate password
        if (name === 'password') {
            setPasswordValidations({
                length: value.length >= 8,
                special: /[!@#$%^&*(),.?":{}|<>]/.test(value),
                uppercase: /[A-Z]/.test(value),
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setsignin(true);
        try {
            const response = await axios.post(`${backend_url}/users/signup/`, formData);
            console.log(response.data);
            toast.success('Account created successfully');
            setsignin(false);
        } catch (error) {
            setsignin(false);
            console.error('Error during signup:', error.response);
            toast.success('Account created successfully');
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div>
            <Nav />
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
                    <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Create Account</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="block w-full bg-white border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    className="block w-full bg-white border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                                <span
                                    className="absolute right-3 top-3 cursor-pointer text-gray-500"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? '🙈' : '👁️'}
                                </span>
                            </div>
                            <ul className="mt-3 text-sm space-y-1">
                                <li
                                    className={`flex items-center ${passwordValidations.length ? 'text-green-500' : 'text-red-500'
                                        }`}
                                >
                                    <span className="mr-2">
                                        {passwordValidations.length ? '✔️' : '❌'}
                                    </span>
                                    Password is at least 8 characters
                                </li>
                                <li
                                    className={`flex items-center ${passwordValidations.special ? 'text-green-500' : 'text-red-500'
                                        }`}
                                >
                                    <span className="mr-2">
                                        {passwordValidations.special ? '✔️' : '❌'}
                                    </span>
                                    Password includes a special symbol
                                </li>
                                <li
                                    className={`flex items-center ${passwordValidations.uppercase ? 'text-green-500' : 'text-red-500'
                                        }`}
                                >
                                    <span className="mr-2">
                                        {passwordValidations.uppercase ? '✔️' : '❌'}
                                    </span>
                                    Password includes an uppercase letter
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className="block w-full bg-white border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className="block w-full bg-white border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                className="block w-full bg-white border-gray-300 rounded-lg text-black shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={signin}
                            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                        >
                            {signin ? 'Signing you up ....' : 'Signup'}
                        </button>

                    </form>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Signup;
