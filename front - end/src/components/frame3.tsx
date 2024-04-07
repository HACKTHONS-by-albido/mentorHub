'use client'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Frame3: React.FC = () => {
  const notifyComingSoon = (resource: string) => {
    toast.info(`"${resource}" is coming soon! Stay tuned for updates.`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <section className="bg-gray-100 py-20">
        <ToastContainer />
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Expand Your Knowledge with MentorHub</h2>
          <p className="text-lg mb-8">MentorHub is your go-to platform for unlocking a world of educational opportunities. Whether you&apos;re a student, professional, or lifelong learner, we provide a diverse range of resources to help you grow and succeed. Here&apos;s what you can explore:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Expert Articles</h3>
              <p className="text-lg text-gray-600 mb-4">Discover a treasure trove of articles written by industry experts. Dive deep into topics ranging from technology and business to health and wellness.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300 ease-in-out transform hover:scale-105 shadow-lg" onClick={() => notifyComingSoon('Expert Articles')}>Explore Articles</button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Webinars & Workshops</h3>
              <p className="text-lg text-gray-600 mb-4">Participate in live webinars and workshops conducted by industry leaders. Gain valuable insights, ask questions, and engage with fellow learners in real-time.</p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300 ease-in-out transform hover:scale-105 shadow-lg" onClick={() => notifyComingSoon('Webinars & Workshops')}>Join a Webinar</button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Online Courses</h3>
              <p className="text-lg text-gray-600 mb-4">Enroll in comprehensive online courses designed to elevate your skills. Choose from a variety of subjects including programming, design, marketing, and more.</p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300 ease-in-out transform hover:scale-105 shadow-lg" onClick={() => notifyComingSoon('Online Courses')}>Explore Courses</button>
            </div>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frame3;
