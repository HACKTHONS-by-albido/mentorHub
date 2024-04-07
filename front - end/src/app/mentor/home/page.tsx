import Footer from "@/components/mentor/Footer";
import Navbar from "@/components/Navbar";
import Frame1 from "@/components/mentor/frame1";
import Frame2 from "@/components/mentor/frame2";
import Frame3 from "@/components/mentor/frame3";

import Hero from "@/components/mentor/hero";
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
