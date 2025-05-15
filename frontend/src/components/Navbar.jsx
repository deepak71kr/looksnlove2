import React, { useState } from "react";
import {
  ShoppingCartIcon,
  UserIcon,
  MenuIcon,
  ChevronDownIcon,
  LogOutIcon,
  UserCircleIcon,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const cartItemCount = 8;
  const cartTotal = 999;

  return (
    <nav className="bg-customPink shadow-sm w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo.jpeg"
              alt="Salon Logo"
              className="w-20 h-40 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 font-semibold">
            <a
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </a>
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                Services
                <ChevronDownIcon size={16} className="ml-1" />
              </button>
              <div className="absolute z-50 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Submenu 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Submenu 2
                  </a>
                </div>
              </div>
            </div>
            <a
              href="#foot"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
            <a
              href="/AboutUs"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              About Us
            </a>
          </div>
          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart Dropdown */}
            <div className="relative group">
              <button className="p-2 hover:bg-red-200 rounded-full transition-colors relative">
                <ShoppingCartIcon size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              </button>
              <div className="absolute z-50 right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4">
                  <div className="text-sm font-medium text-gray-900">
                    {cartItemCount} Items
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Subtotal: ${cartTotal}
                  </div>
                  <a href="/cart">
                    <button className="mt-3 w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                      View Cart
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* User Dropdown */}
            <div className="relative group">
              <button className="p-2 hover:bg-red-200 rounded-full transition-colors">
                <UserIcon size={20} />
              </button>
              <div className="absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <a
                    href="/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <UserCircleIcon size={16} className="mr-2" /> Profile
                  </a>
                  <a
                    href="/logout"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <LogOutIcon size={16} className="mr-2" /> Logout
                  </a>
                </div>
              </div>
            </div>

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
          <div className="lg:hidden py-4">
            <div className="flex flex-col space-y-4 font-semibold">
              <a
                href="/"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Home
              </a>
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDownIcon size={16} className="ml-1" />
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a
                      href="#"
                      className="block text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      Submenu 1
                    </a>
                    <a
                      href="#"
                      className="block text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      Submenu 2
                    </a>
                  </div>
                )}
              </div>
              <a
                href="/contact"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Contact Us
              </a>
              <a
                href='/about'
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                About Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
