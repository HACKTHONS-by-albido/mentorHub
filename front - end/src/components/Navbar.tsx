'use client'
import Image from 'next/image';
import React, { useState } from 'react';
// import { useToast } from "@/components/ui/use-toast";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
// const {toast} = useToast()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Handle logout logic
    // toast({description:'Logout successful'});
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <Image src="/Mentor.png" height={40} width={40} className="h-8" alt="mentorHub" />
              <span className="text-xl font-semibold text-gray-800 dark:text-white">mentorHub</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Home</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">About</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Services</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Contact</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={handleLogout} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white focus:outline-none">Logout</button>
            <Image src="/avatar.png" height={40} width={40} className="rounded-full" alt="User Avatar" />
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} type="button" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <div className="flex justify-end">
              <Image src="/avatar.png" height={40} width={40} className="rounded-full" alt="User Avatar" />
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="flex flex-col space-y-4 px-4 py-2">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Home</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">About</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Services</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Contact</a>
            <button onClick={handleLogout} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white focus:outline-none">Logout</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;