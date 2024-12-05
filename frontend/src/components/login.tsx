import React, { useState } from "react";
import axios from "axios";
import Nav from "./nav";
import Footer from "./footer";
import { backend_url } from "./home";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [login, setlogin] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setlogin(true)
        setError(null);
        try {
            const response = await axios.post(`${backend_url}/users/login/`, formData);
            const { refresh, access, user } = response.data;
            toast.success("logged in successfuly")

            localStorage.setItem("refreshToken", refresh);
            localStorage.setItem("accessToken", access);
            localStorage.setItem("user", user);


            window.location.href = "/";

        } catch (err) {
            console.error("Login failed:", err);
            setError("Invalid email or password. Please try again.");
            setlogin(false)
            toast.error('failed to login')
        }
    };

    return (
        <div>
            <Nav />
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                {/* {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
            {error}
          </div>
        )} */}
                <form
                    onSubmit={handleSubmit}
                    className="max-w-md mx-auto bg-white p-6 shadow rounded-lg"
                >
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-black font-medium mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border bg-white rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-black font-medium mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border bg-white rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
                    >
                        {
                            login ? 'logining you in.....' : 'Login'
                        }
                    </button>
                </form>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Login;
