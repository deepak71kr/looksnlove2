import { useState } from "react";
import axios from "axios";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Helper to get today's date as a JS Date object
function getTodayDateObj() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

// Helper to get the nearest upcoming 2-hour slot from 8am to 10pm
function getUpcomingTimeSlot() {
  const now = new Date();
  const hour = now.getHours();
  if (hour < 8) return "8am - 10am";
  if (hour < 10) return "10am - 12pm";
  if (hour < 12) return "12pm - 2pm";
  if (hour < 14) return "2pm - 4pm";
  if (hour < 16) return "4pm - 6pm";
  if (hour < 18) return "6pm - 8pm";
  if (hour < 20) return "8pm - 10pm";
  // If it's 10pm or later, default to first slot tomorrow
  return "8am - 10am";
}

const timeSlots = [
  "8am - 10am",
  "10am - 12pm",
  "12pm - 2pm",
  "2pm - 4pm",
  "4pm - 6pm",
  "6pm - 8pm",
  "8pm - 10pm",
];

const Footer = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [deliveryDate, setDeliveryDate] = useState(getTodayDateObj());
  const [deliveryTime, setDeliveryTime] = useState(getUpcomingTimeSlot());
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Format date as yyyy-mm-dd for backend
    const formattedDate = deliveryDate
      ? deliveryDate.toISOString().split("T")[0]
      : "";
    const data = {
      ...form,
      date: formattedDate,
      time: deliveryTime,
    };
    try {
      await axios.post("http://localhost:5000/api/contact", data);
      setStatus("success");
      setForm({ name: "", phone: "", message: "" });
      setDeliveryDate(getTodayDateObj());
      setDeliveryTime(getUpcomingTimeSlot());
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <footer
      id="foot"
      className="relative bg-customPink bg-cover bg-center text-white py-10 px-5"
      style={{
        backgroundImage: "url('/beauty-banner.png')",
        backgroundColor: "#ffe5ef",
      }}
    >
      {/* Overlay for background tint if needed */}
      <div className="absolute inset-0 bg-customPink-20 bg-opacity-60 pointer-events-none"></div>

      <div className="relative max-w-3xl ml-auto text-black pr-2 sm:pr-10">
        <h2 className="text-4xl font-bold mb-6 text-pink-700 drop-shadow-lg text-right">
          Contact Us
        </h2>

        <div className="flex justify-end space-x-6 mb-6">
          <a
            href="https://wa.me/919508387371"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-green-500"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/your-group"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-4 rounded-xl shadow-lg px-4 py-6 md:px-8 md:py-8 max-w-md w-full ml-auto"
          style={{
            background: "rgba(255,255,255,0.2)", // 80% transparent
            minWidth: "260px",
          }}
        >
          {/* Gap above name */}
          <div className="mb-2" />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="input input-bordered w-full bg-white text-black focus:ring-2 focus:ring-pink-500"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="input input-bordered w-full bg-white text-black focus:ring-2 focus:ring-pink-500"
          />

          {/* Date & Time in a single row, same height */}
          <div className="flex flex-col sm:flex-row w-full gap-0 sm:gap-2">
            {/* Date Picker */}
            <div className="w-full sm:w-1/2">
              <DatePicker
                selected={deliveryDate}
                onChange={(date) => setDeliveryDate(date)}
                minDate={getTodayDateObj()}
                dateFormat="dd/MM/yyyy"
                className="input input-bordered w-full bg-white text-black text-sm md:text-base focus:ring-2 focus:ring-pink-500 h-12"
                calendarClassName="text-black"
                popperPlacement="bottom"
                placeholderText="Select Delivery Date"
                style={{
                  borderRight: "none",
                  color: deliveryDate ? "#111827" : "#9ca3af", // Tailwind gray-400
                }}
              />
            </div>
            {/* Time Picker */}
            <div className="w-full sm:w-1/2">
              <select
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
                required
                className={`rounded-b-lg sm:rounded-b-none sm:rounded-r-lg border border-gray-300 p-2 w-full bg-white text-sm md:text-base focus:ring-2 focus:ring-pink-500 h-12 ${
                  deliveryTime ? "text-black" : "text-gray-400"
                }`}
                style={{
                  color: deliveryTime ? "#111827" : "#9ca3af", // Tailwind gray-400
                }}
              >
                {!deliveryTime && (
                  <option value="" disabled>
                    Select Delivery Time
                  </option>
                )}
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
            className="input input-bordered w-full bg-white text-black focus:ring-2 focus:ring-pink-500 h-24"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full py-3 bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg transition duration-300"
          >
            Book an Appointment
          </button>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-600 text-right">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-right">Failed to send message. Please try again.</p>
          )}
        </form>

        <div className="mt-6">
          <img src="/logo.jpeg" alt="Website Logo" className="ml-auto h-16" />
        </div>

        <p className="mt-4 text-gray-400">&copy; LooksnLove 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
