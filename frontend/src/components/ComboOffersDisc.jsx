import React from "react";

const plans = [
  { image: "/combo-image.jpeg" },
  { image: "/combo-image.jpeg" },
  { image: "/combo-image.jpeg" },
  { image: "/combo-image.jpeg" },
];

const PricingCircles = () => {
  return (
    <div>
      <div className="bg-customPink flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 py-10 px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-cover bg-center rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg border-4 border-white"
            style={{ backgroundImage: `url(${plan.image})` }}
          ></div>
        ))}
      </div>
      {/*.............*/}
      <div className="bg-customPink flex flex-col space-y-6 py-10 px-4 items-center">
        {/* First Card - Image on Left */}
        <div className="flex items-center space-x-6 bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
          <div
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-cover bg-center rounded-full border-4 border-white"
            style={{ backgroundImage: "url('/combo-image.jpeg')" }}
          ></div>
          <div className="text-gray-800">
            <h2 className="text-xl font-bold">Combo</h2>
            <p className="text-sm md:text-base mt-2">
              A perfect blend of services for your beauty needs.
            </p>
          </div>
        </div>

        {/* Second Card - Image on Right */}
        <div className="flex flex-row-reverse items-center space-x-6 space-x-reverse bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
          <div
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-cover bg-center rounded-full border-4 border-white"
            style={{ backgroundImage: "url('/combo-image.jpeg')" }}
          ></div>
          <div className="text-gray-800 text-left flex-1">
            <h2 className="text-xl font-bold">Basic</h2>
            <p className="text-sm md:text-base mt-2">
              Essential beauty care to keep you looking fresh.
            </p>
          </div>
        </div>

        {/* Third Card - Image on Left */}
        <div className="flex items-center space-x-6 bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
          <div
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-cover bg-center rounded-full border-4 border-white"
            style={{ backgroundImage: "url('/combo-image.jpeg')" }}
          ></div>
          <div className="text-gray-800">
            <h2 className="text-xl font-bold">Regular</h2>
            <p className="text-sm md:text-base mt-2">
              Consistent care for a radiant and lasting glow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCircles;
