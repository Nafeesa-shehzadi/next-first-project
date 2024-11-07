"use client"; // For client-side rendering in Next.js
import React from "react";
import { useRouter } from "next/navigation"; // Import from next/navigation

const HomePage = () => {
  const router = useRouter();

  // Handle navigation to /shop page when the button is clicked
  const handleShopNowClick = () => {
    router.push("/shop");
  };

  return (
    <div className="relative py-12 px-8 md:px-20 my-12">
      {/* Hero Container */}
      <div
        className="bg-cover bg-center w-full h-screen md:h-[70vh] sm:h-[60vh] flex items-center justify-end overflow-hidden"
        style={{ backgroundImage: "url('./home3.png')" }}
      >
        {/* Hero Content Box */}
        <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-lg mr-6 md:mr-4 sm:mr-0">
          <h6 className="text-lg font-semibold">New Arrival</h6>
          <h4 className="text-4xl font-bold text-[#a37821] mt-4 mb-2">
            Discover Our New Collection
          </h4>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            velit vitae lectus lobortis scelerisque.
          </p>
          <button
            onClick={handleShopNowClick}
            className="bg-[#a37821] text-white py-3 px-6 rounded-lg hover:bg-[#906622] transition-colors duration-300"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
