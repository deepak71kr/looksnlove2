import React from "react";
import { Star, Luggage, Gem, HeartHandshake } from "lucide-react";

const RatingCard = () => {
  return (
    <div className="bg-customPink p-10 px-5 flex justify-center gap-x-40 text-center text-black">
      {/* Rating */}
      <div className="flex flex-col items-center">
        <Star size={40} strokeWidth={1.5} />
        <p className="text-xl font-semibold">4.8/5</p>
        <p className="text-green-700 text-lg">Rating</p>
      </div>

      {/* Services */}
      <div className="flex flex-col items-center">
        <Luggage size={40} strokeWidth={1.5} />
        <p className="text-xl font-semibold">200+</p>
        <p className="text-green-700 text-lg">Services</p>
      </div>

      {/* Experience */}
      <div className="flex flex-col items-center">
        <Gem size={40} strokeWidth={1.5} />
        <p className="text-xl font-semibold">3+ yrs</p>
        <p className="text-green-700 text-lg">Experience</p>
      </div>

      {/* Members */}
      <div className="flex flex-col items-center">
        <HeartHandshake size={40} strokeWidth={1.5} />
        <p className="text-xl font-semibold">12+</p>
        <p className="text-green-700 text-lg">Members</p>
      </div>
    </div>
  );
};

export default RatingCard;
