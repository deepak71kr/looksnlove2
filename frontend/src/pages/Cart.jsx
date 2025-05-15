import React, { useState } from "react";
import Orders from "../components/Orders";
const CartCheckout = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Item 1",
      description: "A high-quality product with great durability.",
      price: 20,
      image: "combo-image.jpeg",
    },
    {
      id: 2,
      name: "Item 2",
      description: "A stylish and trendy item for everyday use.",
      price: 35,
      image: "combo-image.jpeg",
    },
  ]);

  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("9-12pm");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order confirmed!");
  };
{/* this need to be done is Order is present*/}
  const order = 1;

  return (
    <div>
      {order ? <Orders order={order} /> : null}
      {/* ---------------------- */}
      <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-lg md:p-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
          Cart Checkout
        </h2>

        {/* Cart Items Section */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg"
              />
              <div className="flex-1 ml-0 md:ml-4 text-center md:text-left">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {item.description}
                </p>
                <p className="text-gray-800 font-semibold">${item.price}</p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg mt-2 md:mt-0"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Delivery Details Section */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block font-medium">Delivery Date</label>
            <input
              type="date"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              className="w-full p-2 border rounded-lg text-sm md:text-base"
            />
          </div>
          <div>
            <label className="block font-medium">Delivery Time</label>
            <select
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
              className="w-full p-2 border rounded-lg text-sm md:text-base"
            >
              <option value="9-12pm">9-12pm</option>
              <option value="12-4pm">12-4pm</option>
              <option value="4-8pm">4-8pm</option>
            </select>
          </div>

          {/* Address Section */}
          <div>
            <label className="block font-medium">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border rounded-lg text-sm md:text-base"
              rows="2"
            ></textarea>
          </div>
          <div>
            <label className="block font-medium">Landmark</label>
            <input
              type="text"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              className="w-full p-2 border rounded-lg text-sm md:text-base"
            />
          </div>
          <div>
            <label className="block font-medium">Pincode</label>
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="w-full p-2 border rounded-lg text-sm md:text-base"
            />
          </div>
          <div>
            <label className="block font-medium">City</label>
            <input
              type="text"
              value="Jamshedpur"
              readOnly
              className="w-full p-2 border rounded-lg bg-gray-200 text-sm md:text-base"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-lg font-semibold mt-4 text-sm md:text-base"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CartCheckout;
