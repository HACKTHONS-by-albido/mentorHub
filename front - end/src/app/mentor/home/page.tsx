import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Frame1 from "@/components/frame1";
import Frame2 from "@/components/frame2";
import Frame3 from "@/components/frame3";

import Hero from "@/components/hero";
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
