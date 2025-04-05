import { useEffect, useState, useRef } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Create references for the menu and dropdown
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside of the menu or dropdown
    function handleClickOutside(event) {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        dropdownRef.current && !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);    // Close the side menu
        setMenuOpen(false);  // Close the dropdown menu
      }
      else if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      else if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    // Add the event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-pri text-white p-4 shadow-lg fixed w-screen z-50">
      
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-sec focus:outline-none w-4"
        >
          {isOpen ? "X" : "☰"}
        </button>

        <a href="#" className="text-3xl font-bold text-sec">
          Tailor Ghor
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#" className="hover:text-sec transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-sec transition">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-sec transition">
              Gallery
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-sec transition">
              Contact
            </a>
          </li>
        </ul>

        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <UserCircleIcon className="w-10 h-10 text-gray-600 hover:text-gray-900" />
          </button>
          {menuOpen && (
            <div className="absolute -right-4 mt-1 w-48 bg-white border rounded-lg shadow-lg">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <ul ref={menuRef} className="md:hidden absolute top-full left-0 w-full bg-[#0A2647] text-center flex flex-col  shadow-md">
          <li className="py-2">
            <a href="#" className="hover:text-sec transition">
              Home
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-sec transition">
              Services
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-sec transition">
              Gallery
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-sec transition">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
