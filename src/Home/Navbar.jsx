import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#0A2647] text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        {/* <img src="./logo2.jpg" width={100} alt="" /> */}
        <a href="#" className="text-3xl font-bold text-[#E6B400]">
          Tailor Ghor
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#" className="hover:text-[#E6B400] transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#E6B400] transition">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#E6B400] transition">
              Gallery
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#E6B400] transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#E6B400] focus:outline-none"
        >
          {isOpen ? "X" : "☰"}
        </button>
      </div>
      {isOpen && (
        <ul className="md:hidden text-center flex flex-col rounded-1">
          <li className="py-2">
            <a href="#" className="hover:text-[#E6B400] transition">
              Home
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-[#E6B400] transition py-2">
              Services
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-[#E6B400] transition py-2">
              Gallery
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-[#E6B400] transition py-2">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
