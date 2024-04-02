import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to- bg-slate-950 text-white py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MentorHub</h1>
          <p className="text-lg md:text-xl mb-8">Empowering mentors and mentees to connect, grow, and succeed together.</p>
          {/* <a href="/login" className="bg-white text-blue-900 hover:bg-blue-700 font-bold py-3 px-6 rounded-full inline-block transition duration-300 ease-in-out transform hover:scale-105">Login to Your Account</a> */}
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("/mentorhub-background.jpg")'}}></div>
    </section>
  );
};

export default Hero;
