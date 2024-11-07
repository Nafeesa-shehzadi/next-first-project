// components/Header.tsx
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link href="/">
          <img src="/weblogo.png" alt="Logo" className="h-10" />
        </Link>
        <Link href="/">
          <span className="text-xl font-bold">Furniro.</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-grow text-center">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="/home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:underline">
              Products
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
