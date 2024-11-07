"use client"; // Use this for client-side rendering in Next.js

import React, { useEffect, useState } from "react";
import Image from "next/image"; // Import the Next.js Image component

interface Product {
  id: string;
  urls: {
    small: string;
  };
  alt_description?: string; // alt_description is optional
}

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]); // State to store the fetched data
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [itemsPerPage] = useState(10); // Number of items per page

  // Fetch data from the Unsplash API
  const fetchData = async (page: number) => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=furniture&per_page=${itemsPerPage}&page=${page}&client_id=2ZmHyYZrGCDGUkqODTUIf9RHePSibj9DxqHEDCkzL3g`
    );
    const data = await response.json();
    setProducts(data.results); // Set the fetched data
  };

  useEffect(() => {
    fetchData(currentPage); // Fetch data when the component mounts or page changes
  }, [currentPage]);

  // Handle pagination button click
  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update the current page
  };

  return (
    <div className="py-12 px-8 md:px-20 my-12">
      {/* Title Section */}
      <div className="flex flex-col mb-12">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Furniture Collection
        </h2>
        <p className="text-lg mb-6">
          Explore our vast collection of furniture! Browse through a variety of
          stunning images to help you choose your next favorite piece.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {products.map((product: Product) => (
          <div
            className="bg-white rounded-lg overflow-hidden shadow-lg"
            key={product.id}
          >
            <Image
              src={product.urls.small}
              alt={product.alt_description || "Product Image"}
              className="object-cover w-full h-40"
              width={400} // Specify width
              height={500} // Specify height
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">
                {product.alt_description || "No Description"}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="mt-8 flex justify-center space-x-4">
        <button
          className={`px-4 py-2 border rounded-md ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          1
        </button>
        <button
          className={`px-4 py-2 border rounded-md ${
            currentPage === 2
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
          onClick={() => handlePageChange(2)}
          disabled={currentPage === 2}
        >
          2
        </button>
        <button
          className={`px-4 py-2 border rounded-md ${
            currentPage === 3
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
          onClick={() => handlePageChange(3)}
          disabled={currentPage === 3}
        >
          3
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
