import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css"; // For white placeholder
import { useAuth } from "../context/AuthContext";

const ForgotPasswordModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgot = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await axios.post("http://localhost:5000/api/user/forgot-password", { email });
      if (res.data.success) {
        setMessage("Password reset instructions sent to your email!");
      } else {
        setMessage("Email not registered.");
      }
    } catch (error) {
      setMessage("Error sending reset instructions. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 space-y-4 shadow-lg">
        <h3 className="text-2xl font-semibold text-pink-600 text-center">Forgot Password?</h3>
        <form onSubmit={handleForgot} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-3 border border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition ${styles.inputWhite}`}
            required
          />
          <button
            type="submit"
            className="w-full bg-pink-600 text-white p-3 rounded-lg font-semibold hover:bg-pink-700"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
        {message && <p className="text-center text-sm">{message}</p>}
        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="text-pink-600 font-semibold hover:underline"
          >
            Back to Sign In
          </button>
          <Link
            to="/signup"
            className="text-pink-600 font-semibold hover:underline"
            onClick={onClose}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showForgot, setShowForgot] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:5000/api/user/login", formData, {
        withCredentials: true,
      });
      if (response.data.success) {
        login(response.data.user);
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-pink-50 to-pink-100"
    >
      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-2">LooksNLove</h1>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="text-red-500 text-center">{error}</div>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent bg-white text-gray-800 placeholder-gray-600 ${styles.inputWhite}`}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent bg-white text-gray-800 placeholder-gray-600 ${styles.inputWhite}`}
            required
          />
          <button
            type="submit"
            className="w-full bg-pink-600 text-white p-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setShowForgot(true)}
            className="text-pink-600 hover:underline text-sm"
          >
            Forgot Password?
          </button>
          <Link to="/signup" className="text-pink-600 hover:underline text-sm">
            Create Account
          </Link>
        </div>
      </div>
      {showForgot && <ForgotPasswordModal onClose={() => setShowForgot(false)} />}
    </div>
  );
};

export default Login;
