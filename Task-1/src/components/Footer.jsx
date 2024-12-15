import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className=" mx-auto px-6 text-center">
        <p className="text-lg font-medium mb-4">
          Contact us:{" "}
          <a
            href="mailto:contact@hotelbooking.com"
            className="text-teal-400 hover:text-teal-300"
          >
            contact@hotelbooking.com
          </a>
        </p>
        <p className="text-lg font-medium mb-6">Follow us on:</p>

        <div className="flex justify-center space-x-6">
          <a
            href="#facebook"
            className="text-teal-400 hover:text-teal-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 2l-2 8h-4l1 9h4l-1 5M6 2l2 8h4l-1 9H6l1 5"
              />
            </svg>
          </a>
          <a
            href="#twitter"
            className="text-teal-400 hover:text-teal-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 6.58c-.774.344-1.607.574-2.485.677a4.43 4.43 0 0 0 1.944-2.447c-.85.5-1.791.85-2.785 1.043A4.46 4.46 0 0 0 14.3 5c-2.518 0-4.55 2.032-4.55 4.528 0 .355.041.7.12 1.032C5.687 9.903 3.018 8.072 1.618 5.634a4.465 4.465 0 0 0-.615 2.28c0 1.574.796 2.96 2.014 3.778a4.41 4.41 0 0 1-2.036-.563v.057c0 2.207 1.555 4.045 3.632 4.464a4.465 4.465 0 0 1-2.025.076c.565 1.773 2.201 3.066 4.144 3.102a8.93 8.93 0 0 1-5.57 1.902c.772 2.465 3.028 4.264 5.696 4.308a9.032 9.032 0 0 0 9.18-9.055c0-.14 0-.279-.01-.417A6.47 6.47 0 0 0 20 6.58z"
              />
            </svg>
          </a>
          <a
            href="#instagram"
            className="text-teal-400 hover:text-teal-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 2H4c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zM12 5c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm6 14H6v-2h12v2zm0-4H6v-6h12v6z"
              />
            </svg>
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} HotelBooking. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
