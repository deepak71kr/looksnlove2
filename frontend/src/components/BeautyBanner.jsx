import React from "react";

const BeautyBanner = () => {
  return (
    <div
      className="relative w-full h-[60vh] lg:h-[80vh] flex flex-row items-center text-black px-4 lg:px-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/beauty-banner.png')" }}
    >
      {/* Content */}
      <div className="w-[40%] ml-auto pl-6 lg:pl-12">
        <h1 className="text-3xl md:text-5xl font-bold text-left">Master of Beauty</h1>
        <p className="text-sm md:text-lg mt-2 text-left">
          Professional and high-quality beauty care in Jamshedpur
        </p>
        <button className="mt-6 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg transition duration-300">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default BeautyBanner;