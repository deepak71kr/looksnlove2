import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Signup.module.css"; // <-- Import the CSS module

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Attempting to connect to backend...");
      const response = await axios.post("http://localhost:5000/api/user/signup", formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 5000 // 5 second timeout
      });
      
      if (response.data.success) {
        alert("Account created successfully! Please login to continue.");
        navigate("/login");
      }
    } catch (err) {
      console.error("Signup error:", err);
      
      if (err.code === 'ECONNREFUSED') {
        setError("Cannot connect to server. Please make sure the backend server is running.");
      } else if (err.code === 'ERR_NETWORK') {
        setError("Network error. Please check if the backend server is running at http://localhost:5000");
      } else if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(err.response.data.error || "Signup failed. Please try again.");
      } else if (err.request) {
        // The request was made but no response was received
        setError("No response from server. Please check if the backend server is running.");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-2 py-8"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #ffe5ef 100%)",
      }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-pink-600 mb-2 text-center tracking-wide">LooksNLove</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="mb-2 p-2 bg-red-100 text-red-700 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 border border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition ${styles.inputWhite}`}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition ${styles.inputWhite}`}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-3 border border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition ${styles.inputWhite}`}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-3 border border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition ${styles.inputWhite}`}
            required
          />
          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-3 rounded-lg font-semibold hover:bg-pink-600 transition"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center border-t border-gray-200 pt-4">
          <p className="text-gray-700 mb-2">Already have an account?</p>
          <Link
            to="/login"
            className="inline-block text-pink-600 font-semibold border border-pink-300 px-4 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-800 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
