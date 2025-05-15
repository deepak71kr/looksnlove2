import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center p-8 space-y-8">
      {/* Title Section */}
      <div className="text-center font-bold leading-tight flex items-center">
        <div className="text-5xl text-right">
          <div>Looks</div>
          <div>Love</div>
        </div>
        <div className="text-9xl ml-2">N</div>
      </div>

      {/* Description Section */}
      <div className="max-w-2xl text-center text-lg text-gray-600">
        <p>
          Our online salon for women in Jamshedpur offers top-tier beauty
          services at your convenience. We ensure personalized care, comfort,
          and luxury with expert hairstyling and skincare right at your
          doorstep.
        </p>
        <br />
        <p>
        Building on our commitment, we deliver exceptional beauty experiences crafted to suit your unique needs. From premium hair treatments to rejuvenating skincare routines, we maintain a focus on hygiene and quality. With convenience as our promise, our online salon ensures a stress-free, luxurious way to celebrate your beauty—all in your space.
        </p>
      </div>

      {/* Our Team Section */}
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-100 rounded-2xl shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <p className="text-gray-400">
                {member.experience} years experience
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "CEO & Founder",
    experience: 10,
    image: "review-01.jpeg",
  },
  {
    name: "Bob Smith",
    role: "Lead Developer",
    experience: 7,
    image: "review-01.jpeg",
  },
  {
    name: "Charlie Brown",
    role: "UI/UX Designer",
    experience: 5,
    image: "review-01.jpeg",
  },
  {
    name: "Diana Ross",
    role: "Marketing Head",
    experience: 8,
    image: "review-01.jpeg",
  },
];

export default AboutUs;
