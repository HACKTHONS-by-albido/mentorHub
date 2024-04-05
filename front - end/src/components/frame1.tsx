'use client'
import React, { useState, useEffect } from 'react';

const Frame1: React.FC = () => {
  const mentorsData = [
    { id: 1, name: 'John Doe', location: 'New York', expertise: 'Web Development', image: 'https://source.unsplash.com/random/400x300?person' },
    { id: 2, name: 'Jane Smith', location: 'Los Angeles', expertise: 'Data Science', image: 'https://source.unsplash.com/random/400x300?person' },
    { id: 3, name: 'Alice Johnson', location: 'Chicago', expertise: 'UX/UI Design', image: 'https://source.unsplash.com/random/400x300?person' },
    { id: 4, name: 'Bob Brown', location: 'Houston', expertise: 'Mobile App Development', image: 'https://source.unsplash.com/random/400x300?person' },
    { id: 5, name: 'Eva Green', location: 'San Francisco', expertise: 'Machine Learning', image: 'https://source.unsplash.com/random/400x300?person' },
    { id: 6, name: 'Michael Lee', location: 'Seattle', expertise: 'Cybersecurity', image: 'https://source.unsplash.com/random/400x300?person' },
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [numVisible, setNumVisible] = useState<number>(1);

  useEffect(() => {
    const updateNumVisible = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setNumVisible(3);
      } else if (screenWidth >= 768) {
        setNumVisible(2);
      } else {
        setNumVisible(1);
      }
    };

    // Initial calculation
    updateNumVisible();

    // Add event listener to update on resize
    window.addEventListener('resize', updateNumVisible);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', updateNumVisible);
    };
  }, []);

  const goToMentor = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevMentor = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? mentorsData.length - 1 : prevIndex - 1));
  };

  const goToNextMentor = () => {
    setCurrentIndex((prevIndex) => (prevIndex === mentorsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Discover Mentors Near You</h2>
      <div className="relative overflow-hidden">
        <div className="flex space-x-4 transition-transform ease-in-out duration-300" style={{ transform: `translateX(-${currentIndex * (100 / numVisible)}%)` }}>
          {mentorsData.map((mentor, index) => (
            <div key={index} className={`w-full md:w-1/${numVisible} lg:w-1/${numVisible} flex-shrink-0`}>
              <div className={`bg-white rounded-lg shadow-md p-4 md:p-6 border-2 border-gray-200 flex flex-col items-center`}>
                <div className="mb-4">
                  <img src={mentor.image} alt={mentor.name} className="w-full md:w-32 h-auto rounded-lg" />
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold mb-2 text-gray-800">Mentor: {mentor.name}</p>
                  <p className="text-gray-600">Location: {mentor.location}</p>
                  <p className="text-gray-600">Expertise: {mentor.expertise}</p>
                  <div className="mt-4 flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mr-2">Contact</button>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75" onClick={goToPrevMentor}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75" onClick={goToNextMentor}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {mentorsData.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 bg-gray-400 rounded-full mx-1 ${currentIndex === index ? 'bg-gray-800' : ''}`}
            onClick={() => goToMentor(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Frame1;
