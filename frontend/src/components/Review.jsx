import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const reviews = [
  {
    name: "John Doe",
    image: "/review-01.jpeg",
    review: "Amazing service and friendly staff! Highly recommend.",
  },
  {
    name: "Jane Smith",
    image: "/review-01.jpeg",
    review: "A wonderful experience, the best salon in town!",
  },
  {
    name: "Emily Johnson",
    image: "/review-01.jpeg",
    review: "Professional and skilled staff. Very satisfied!",
  },
  {
    name: "Michael Brown",
    image: "/review-01.jpeg",
    review: "Great ambiance and expert stylists!",
  },
  {
    name: "Sophia Davis",
    image: "/review-01.jpeg",
    review: "Loved my haircut! Will visit again.",
  },
  {
    name: "David Wilson",
    image: "/review-01.jpeg",
    review: "Top-notch service with a smile.",
  },
  {
    name: "Emma Martinez",
    image: "/review-01.jpeg",
    review: "Friendly staff and relaxing atmosphere.",
  },
];

const Review = () => {
  const totalReviews = reviews.length;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalReviews);
    }, 2000);
    return () => clearInterval(interval);
  }, [totalReviews]);

  const getVisibleReviews = () => {
    const firstIndex = index % totalReviews;
    return Array.from(
      { length: 5 },
      (_, i) => reviews[(firstIndex + i) % totalReviews]
    );
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-customPink py-10">
      <h2 className="text-4xl font-bold text-black mb-6">Happy Faces</h2>
      <div className="overflow-hidden relative max-w-4xl w-full px-4">
        <div className="flex justify-center items-center transition-transform duration-500 ease-in-out">
          {getVisibleReviews().map((review, i) => (
            <div
              key={i}
              className="w-36 h-44 bg-white text-black rounded-2xl shadow-lg text-center flex flex-col items-center justify-center p-4 mx-2"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full mb-2 object-cover"
              />
              <h3 className="text-sm font-semibold mb-2">{review.name}</h3>
              <p className="text-xs">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {reviews.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index % totalReviews ? "bg-black scale-110" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Review;
