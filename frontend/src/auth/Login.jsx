import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sign in successful!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customPink">
      <h1 className="text-4xl font-bold text-black mb-3 border-b-4 border-customPink pb-2">LooksNLove</h1>
      <h2 className="text-2xl font-semibold text-black mb-5">Sign In</h2>
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-lg w-96 border-2 border-customPink"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-blue-500 rounded-lg mb-3 text-black"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 border border-blue-500 rounded-lg mb-3 text-black"
          required
        />
        <button type="submit" className="w-full bg-black text-white p-3 rounded-lg font-semibold border border-customPink hover:bg-gray-800">
          Sign In
        </button>
      </form>
      <div className="mt-5 text-center border-t-2 border-customPink w-96 pt-4">
        <p className="text-black py-2">Don't have an account?</p>
        <Link to="/signup" className="mt-2 text-black font-semibold border border-customPink px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;