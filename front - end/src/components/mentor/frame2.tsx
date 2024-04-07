'use client'
import React, { useState } from 'react';

interface Mentor {
  id: number;
  name: string;
  location: string;
  expertise: string;
  image: string;
}

const Frame2: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [searchResults, setSearchResults] = useState<Mentor[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const mentorsData: Mentor[] = [
    { id: 1, name: 'John Doe', location: 'New York', expertise: 'Web Development', image: 'https://source.unsplash.com/random/400x300?person' },
    { id: 2, name: 'Jane Smith', location: 'Los Angeles', expertise: 'Data Science', image: 'https://source.unsplash.com/random/400x300?person' },
    { id: 3, name: 'Alice Johnson', location: 'Chicago', expertise: 'UX/UI Design', image: 'https://source.unsplash.com/random/400x300?person' },
    { id: 4, name: 'Bob Brown', location: 'Houston', expertise: 'Mobile App Development', image: 'https://source.unsplash.com/random/400x300?person' },
  ];

  const handleSearch = () => {
    const results = mentorsData.filter(
      mentor =>
        mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.expertise.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleMentorClick = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    handleSearch();
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Unlock Your Potential with MentorHub</h2>
          <p className="text-lg mb-8">Discover mentors in various fields who are ready to guide you on your journey to success.</p>
          <div className="relative w-full mb-8">
            <input
              type="text"
              placeholder="Search for a mentor..."
              className="w-full p-3 border-2 border-white rounded-full focus:outline-none text-black placeholder-white"
              value={searchQuery}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <button
              className="absolute top-0 right-0 bg-white text-indigo-500 font-semibold py-3 px-6 rounded-full inline-block transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          
          {/* Display search results */}
          {isFocused && searchResults.length > 0 && (
            <div className="custom-scrollbar bg-white rounded-md shadow-md max-h-72 overflow-y-auto mt-4 border-2">
              {searchResults.map(mentor => (
                <div key={mentor.id} onClick={() => handleMentorClick(mentor)} className="cursor-pointer p-4 flex items-center justify-between hover:bg-gray-100 border-2">
                  <div className="flex items-center">
                    <img src={mentor.image} alt={mentor.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">{mentor.name}</h3>
                      <p className="text-sm text-gray-600">{mentor.expertise}</p>
                      <p className="text-sm text-gray-600">{mentor.location}</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default Frame2;
