import React, { useState } from "react";

const OrderHistory = () => {
  const [order, setOrder] = useState({
    id: 1,
    items: [
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
    ],
    totalPrice: 55,
    deliveryDate: "2025-03-15",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleDateChange = (newDate) => {
    setOrder({ ...order, deliveryDate: newDate });
  };

  const handleCancelOrUpdate = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setOrder(null);
    }
  };

  return (
    <div>
      <div
        tabIndex={0}
        className="collapse bg-customPink collapse-arrow bg-base-100 border-base-300 border"
      >
        <div className="collapse-title font-semibold bg-customPink">
          See Orders
        </div>
        <div className="collapse-content text-sm bg-customPink">
          <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
            {order ? (
              <div className="border p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border p-4 rounded-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                        <p className="text-gray-800 font-semibold">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-800 font-semibold mt-4">
                  Total Price: ${order.totalPrice}
                </p>
                <div className="mt-2">
                  <label className="block font-medium">Delivery Date</label>
                  <input
                    type="date"
                    value={order.deliveryDate}
                    onChange={(e) => handleDateChange(e.target.value)}
                    className={`w-full p-2 border rounded-lg ${
                      isEditing ? "" : "bg-gray-200"
                    }`}
                    disabled={!isEditing}
                  />
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-lg w-full"
                >
                  {isEditing ? "Lock Date" : "Edit Delivery Date"}
                </button>
                <button
                  onClick={handleCancelOrUpdate}
                  className={`mt-2 ${
                    isEditing ? "bg-green-500" : "bg-red-500"
                  } text-white px-3 py-1 rounded-lg w-full`}
                >
                  {isEditing ? "Update Order" : "Cancel Order"}
                </button>
              </div>
            ) : (
              <p className="text-gray-500">No orders found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
