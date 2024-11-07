"use client";

import React from "react";
import Image from "next/image"; // Next.js Image component for optimized images
import Link from "next/link"; // Next.js Link component for navigation

const About = () => {
  return (
    <div className="py-12 px-8 md:px-20 my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            molestiae earum rem doloremque, nihil delectus ullam error
            consectetur? Dicta, non exercitationem in consectetur totam dolorum
            at voluptate laudantium aliquam, officiis perspiciatis molestias
            reiciendis consequuntur ullam perferendis velit blanditiis
            distinctio assumenda a maxime reprehenderit atque. Nam eius rerum
            distinctio, a illo earum, optio molestias nostrum maxime quibusdam
            delectus, adipisci impedit? Nam corporis reiciendis minus quod
            eaque, laborum veritatis voluptatibus id maiores tempore accusantium
            recusandae perspiciatis, officia cum ad maxime fuga repellendus a
            magni consequatur. Unde adipisci hic provident est sint corporis,
            dolorem esse autem soluta molestiae optio quisquam eligendi
            obcaecati minima?
          </p>
          <Link href="/contact">
            <button className="border border-[#ad8544] text-black bg-transparent py-2 px-6 rounded-lg hover:bg-[#ad8544] hover:text-white transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            src="/about.png" // Static image path in Next.js public directory
            alt="About Us"
            width={400} // Specify image dimensions
            height={400}
            className="object-cover" // Tailwind class for maintaining aspect ratio
          />
        </div>
      </div>
    </div>
  );
};

export default About;
