import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "Single",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking Submitted Successfully!", {
      position: "top-right", // Toast position
      autoClose: 2000, // Toast auto-close time in ms
      draggable: true, // Allow dragging
    });
  };

  return (
    <main className="bg-gray-100 py-16 px-6 sm:px-8 md:px-12">
      <div className="container mx-auto text-center max-w-full sm:max-w-md md:max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
          Hotel Booking
        </h1>
        <form
          className="bg-white shadow-lg rounded-lg p-6 sm:p-8 space-y-6"
          onSubmit={handleSubmit}
        >
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            />
          </div>

          {/* Date Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Check-in Date */}
            <div className="relative">
              <label
                htmlFor="checkIn"
                className="block text-left text-gray-700 font-medium mb-2"
              >
                Check-in Date
              </label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
                id="checkIn"
                className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              />
            </div>

            {/* Check-out Date */}
            <div className="relative">
              <label
                htmlFor="checkOut"
                className="block text-left text-gray-700 font-medium mb-2"
              >
                Check-out Date
              </label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
                id="checkOut"
                className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              />
            </div>
          </div>

          {/* Room Type Selection */}
          <div>
            <label
              htmlFor="roomType"
              className="block text-left text-gray-700 font-medium mb-2"
            >
              Room Type
            </label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              id="roomType"
              className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            >
              <option value="Single">Single Room</option>
              <option value="Double">Double Room</option>
              <option value="Suite">Suite</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-4 rounded-lg hover:bg-teal-600 transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>

      {/* Toast Container for Notifications */}
      <ToastContainer />
    </main>
  );
};

export default MainContent;
