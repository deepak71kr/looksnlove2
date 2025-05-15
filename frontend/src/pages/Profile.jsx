import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Deepak ",
    age: "25",
    address: "123 Street, City",
    phone: "1234567890",
    email: "deep@example.com",
    password: "password123",
    pincode: "123456",
    dp: "review-01.jpeg", // Placeholder image
  });
  
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleDPChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, dp: imageUrl });
    }
  };

  const handleSave = () => {
    alert("Profile saved successfully!");
  };

  return (
    <div className="bg-customPink">
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center">
        <label htmlFor="dp-upload" className="cursor-pointer">
          <img
            src={profile.dp}
            alt="Profile DP"
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />
        </label>
        <input
          type="file"
          id="dp-upload"
          accept="image/*"
          className="hidden"
          onChange={handleDPChange}
        />
      </div>
      <div className="mt-4 space-y-3">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">Age</label>
          <input
            type="text"
            name="age"
            value={profile.age}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={profile.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div>
          <label className="block font-medium">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={profile.pincode}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
      </div>
      <button
        onClick={handleSave}
        className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg"
      >
        Save Changes
      </button>
    </div>
    </div>
  );
};

export default Profile;