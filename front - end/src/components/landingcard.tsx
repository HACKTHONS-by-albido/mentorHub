"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-slate-950 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Working with MentorHub has been an amazing experience. The guidance and support I received from my mentor helped me navigate through challenging situations and grow both personally and professionally.",
    name: "Sarah Johnson",
    title: "Marketing Specialist",
  },
  {
    quote:
      "I can't thank MentorHub enough for pairing me with such a knowledgeable mentor. Their insights and advice have been invaluable in shaping my career path and achieving my goals.",
    name: "Alex Rodriguez",
    title: "Software Engineer",
  },
  {
    quote:
      "MentorHub provides a platform where mentors genuinely care about their mentees' success. My mentor's encouragement and mentorship have been instrumental in my professional development.",
    name: "Emily Chen",
    title: "Product Manager",
  },
  {
    quote:
      "The mentorship program offered by MentorHub exceeded my expectations. My mentor's expertise and willingness to share their experiences have empowered me to overcome obstacles and strive for excellence.",
    name: "David Smith",
    title: "Entrepreneur",
  },
  {
    quote:
      "MentorHub's mentorship program is a game-changer. I've gained valuable insights and advice from my mentor, which have helped me make informed decisions and progress in my career.",
    name: "Jessica Lee",
    title: "Graphic Designer",
  },
];


