import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-32 relative mt-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MentorHub</h1>
          <p className="text-lg md:text-xl mb-8">Connecting mentors and mentees to foster growth and success.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-gray-800 hover:bg-gray-600 font-bold py-3 px-6 rounded-full inline-block transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Find a Mentor</button>
            <button className="bg-white text-gray-800 hover:bg-gray-600 font-bold py-3 px-6 rounded-full inline-block transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Become a Mentor</button>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      
      {/* <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://source.unsplash.com/collection/539527/1600x900")'}}></div>

      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black opacity-75"></div> */}
    </section>
  );
};

export default Hero;
