import Image from 'next/image';
import React from 'react';
import { LogIn } from './Login';
import { Signup } from './Signup';

const LandingNavbar = () => {
  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/Mentor.png" height={40} width={40} className="h-8" alt="MentorHub" />
            <span className="text-xl font-semibold whitespace-nowrap text-white">mentorHub</span>
          </a>
          <div className="flex items-center space-x-3">
            <Signup />
            <LogIn />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
