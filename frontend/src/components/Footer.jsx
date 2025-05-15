import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='foot'
      className="relative bg-customPink bg-cover bg-center text-white py-10 px-5"
      style={{ backgroundImage: "url('/beauty-banner.png')" }}
    >
      <div className="absolute inset-0 bg-customPink-20 bg-opacity-50"></div>
      <div className="relative max-w-3xl ml-auto text-right pr-10 text-black">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

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

        <form className="space-y-4 max-w-md ml-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full bg-white text-black focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="input input-bordered w-full bg-white text-black focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            placeholder="Message"
            className="input input-bordered w-full bg-white text-black focus:ring-2 focus:ring-pink-500 h-24"
          ></textarea>
          <button className="mt-6 w-full py-3 bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg transition duration-300">
            Book an Appointment
          </button>
        </form>

        <div className="mt-6">
          <img
            src="/logo.jpeg"
            alt="Website Logo"
            className="ml-auto h-16"
          />
        </div>

        <p className="mt-4 text-gray-400">&copy; LooksnLove 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
