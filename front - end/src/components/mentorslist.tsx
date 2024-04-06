'use client'
import { useRouter } from 'next/navigation';
import React from 'react';


function Mentorslist() {
 const router=useRouter()  
    
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Explore Our Mentor Network</h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Connect with experienced mentors ready to guide you towards your personal and professional growth journey</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {Mentor.map((member, index) => (
            <div key={index} className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
              <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                <img src={member.photo} loading="lazy" alt={member.name} className="h-full w-full object-cover object-center" />
              </div>

              <div>
                <div className="text-center font-bold text-indigo-500 md:text-lg">{member.name}</div>
                <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">{member.role}</p>

                <div className="flex justify-center">
                  <div className="flex gap-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2  px-2 rounded-full ">Contact</button>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2  px-2 rounded-full" onClick={()=>router.push('/mentor')} >Learn More</button>

                   
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Mentor = [
  {
    name: 'John McCulling',
    role: 'Founder / CEO',
    photo: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256',
  
  },
  {
    name: 'John McCulling',
    role: 'Founder / CEO',
    photo: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256',
  
  },
  {
    name: 'John McCulling',
    role: 'Founder / CEO',
    photo: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256',
  
  },
  {
    name: 'John McCulling',
    role: 'Founder / CEO',
    photo: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256',
  
  },
 
 
];

export default Mentorslist;
