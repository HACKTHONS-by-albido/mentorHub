import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-8  ">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6 lg:px-12">
        <div className="flex items-center space-x-4">
          <Image src="/Mentor.png" height={40} width={40} className="h-8" alt="mentorHub" />
          <div>
            <h3 className="text-lg font-semibold">mentorHub</h3>
            <p className="text-sm text-gray-400">Your ultimate destination for mentorship.</p>
          </div>
        </div>
        <ul className="flex flex-wrap lg:flex-nowrap space-y-4 lg:space-y-0 lg:space-x-8 text-sm">
          <li><a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out">About Us</a></li>
          <li><a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out">Contact Us</a></li>
          <li><a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="container mx-auto mt-8 lg:mt-0 text-sm text-gray-400 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        <p>&copy; {new Date().getFullYear()} mentorHub. All rights reserved.</p>
        <p>Designed with ❤️ by TM Albido</p>
      </div>
    </footer>
  );
};

export default Footer;
