import React, { useState } from "react";
import {
  ShoppingCartIcon,
  UserIcon,
  MenuIcon,
  ChevronDownIcon,
  LogOutIcon,
  UserCircleIcon,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const { cartItems, cartTotal } = useCart();
  const navigate = useNavigate();

  const serviceCategories = [
    { name: "Combo Services", path: "/services/combo" },
    { name: "Basic Services", path: "/services/basic" },
    { name: "Regular Services", path: "/services/regular" },
    { name: "Premium Services", path: "/services/premium" }
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="bg-customPink shadow-sm w-full sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/logo.jpeg"
              alt="Salon Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 font-semibold">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                Services
                <ChevronDownIcon size={16} className="ml-1" />
              </button>
              <div className="absolute z-50 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  {serviceCategories.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <a
              href="#foot"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
            <Link
              to="/AboutUs"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              About Us
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart Dropdown */}
            {isAuthenticated ? (
              <div className="relative group">
                <Link to="/cart" className="p-2 hover:bg-red-200 rounded-full transition-colors relative inline-flex items-center">
                  <ShoppingCartIcon size={20} />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
                <div className="absolute z-50 right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4">
                    {cartItems.length > 0 ? (
                      <>
                        <div className="text-sm font-medium text-gray-900">
                          {cartItems.length} Items
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          Subtotal: ${cartTotal}
                        </div>
                        <Link to="/cart">
                          <button className="mt-3 w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                            View Cart
                          </button>
                        </Link>
                      </>
                    ) : (
                      <div className="text-sm text-gray-500">Your cart is empty</div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors inline-flex items-center"
              >
                <ShoppingCartIcon size={20} />
              </Link>
            )}

            {/* User Dropdown */}
            {isAuthenticated ? (
              <div className="relative group">
                <button className="p-2 hover:bg-red-200 rounded-full transition-colors">
                  <UserIcon size={20} />
                </button>
                <div className="absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <UserCircleIcon size={16} className="mr-2" /> Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOutIcon size={16} className="mr-2" /> Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-red-200 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 font-semibold">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 transition-colors px-4"
              >
                Home
              </Link>
              {/* Mobile Services Dropdown */}
              <div className="px-4">
                <button
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDownIcon size={16} className="ml-1" />
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {serviceCategories.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="#foot"
                className="text-gray-700 hover:text-gray-900 transition-colors px-4"
              >
                Contact
              </a>
              <Link
                to="/AboutUs"
                className="text-gray-700 hover:text-gray-900 transition-colors px-4"
              >
                About Us
              </Link>
              {!isAuthenticated && (
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-gray-900 transition-colors px-4"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
