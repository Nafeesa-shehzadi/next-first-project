"use client";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="bg-gray-100 text-black py-8 px-16 flex flex-wrap justify-between min-h-[250px]">
      {/* Furniro Section */}
      <div className="flex flex-col p-4 w-full md:w-1/4">
        <h2 className="text-2xl font-bold font-poppins mb-4">Furniro.</h2>
        <p className="text-sm text-gray-600">
          400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
        </p>
      </div>

      {/* Links Section */}
      <div className="flex flex-col p-4 w-full md:w-1/4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Links</h3>
        <a href="#" className="text-black text-sm mb-2 hover:underline">
          Home
        </a>
        <a href="#" className="text-black text-sm mb-2 hover:underline">
          About
        </a>
        <a href="#" className="text-black text-sm mb-2 hover:underline">
          Shop
        </a>
        <a href="#" className="text-black text-sm mb-2 hover:underline">
          Contact
        </a>
      </div>

      {/* Helps Section */}
      <div className="flex flex-col p-4 w-full md:w-1/4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Helps</h3>
        <a href="#" className="text-black text-sm mb-2 hover:underline">
          FAQs
        </a>
        <a href="#" className="text-black text-sm mb-2 hover:underline">
          Shipping
        </a>
        <a href="#" className="text-black text-sm mb-2 hover:underline">
          Returns
        </a>
        <a href="#" className="text-black text-sm mb-2 hover:underline">
          Support
        </a>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col p-4 w-full md:w-1/4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Newsletter</h3>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="border-2 border-black p-2 rounded mb-2 w-3/4"
        />
        <button
          disabled={email === ""}
          className={`text-white text-sm font-semibold py-2 px-6 rounded bg-black ${
            email === "" ? "opacity-50 cursor-not-allowed" : "hover:underline"
          }`}
        >
          Subscribe
        </button>
      </div>

      {/* Divider */}
      <div className="w-full my-4 border-t border-gray-300"></div>

      <p className="text-center text-sm text-gray-600">
        © 2024 Furniro. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
