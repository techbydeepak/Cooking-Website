import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate= useNavigate();

    const handleBlog = (e) => {
        e.preventDefault(); // Fixed typo from preventDeafult to preventDefault
        navigate('/blog'); // Correctly using navigate function
      };
    const handleHome = (e) => {
        e.preventDefault(); // Fixed typo from preventDeafult to preventDefault
        navigate('/'); // Correctly using navigate function
      };
    const handleUs = (e) => {
        e.preventDefault(); // Fixed typo from preventDeafult to preventDefault
        navigate('/us'); // Correctly using navigate function
      };
  return (
    <nav className="bg-black text-white px-10 py-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold">CwK</div>
        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg">
          <li className="hover:text-gray-400 cursor-pointer"onClick={handleHome}>Home</li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={handleBlog}>Blog</li>
          <li className="hover:text-gray-400 cursor-pointer"onClick={handleUs}>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
