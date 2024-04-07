import Footer from "@/components/mentee/Footer";
import Navbar from "@/components/Navbar";
import Frame1 from "@/components/mentee/frame1";
import Frame2 from "@/components/mentee/frame2";
import Frame3 from "@/components/mentee/frame3";

import Hero from "@/components/mentee/hero";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Footer />
    </div>
  );
};

export default page;
