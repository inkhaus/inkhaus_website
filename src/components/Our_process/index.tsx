"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Aos from "aos";

const OurProcess = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return <section className="w-full container mx-auto p-4 my-8">
      <div data-aos="fade-up">
        <div className="flex items-center gap-4">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} className="text-4xl font-semibold tracking-wide">
            Our process
          </motion.h1>
          <div className="w-[32px] h-[32px] aspect-square">
            <Image src="/icons/process.png" alt="line" width={500} height={500} className="w-full h-full" />
          </div>
        </div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} className="text-base text-[#555F6D] font-semibold mt-1">
          From idea to print in 3 easy steps:
        </motion.p>
        <button className="w-[128px] h-[45px] mt-4 cursor-pointer bg-[#571F88] text-base text-white font-semibold rounded-md flex items-center justify-center gap-2">
          Get in touch
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8">
        <div data-aos="fade-up" className="w-full bg-[#FEF5F5] p-4 rounded-2xl">
          <div className="w-[48px] h-[48px] mt-5 border border-[#FFEBEB] rounded-lg bg-white flex items-center justify-center">
            <h2 className="text-xl text-[#C53434]">01</h2>
          </div>
          <div className="mt-14 mb-5">
            <h1 className="text-lg font-semibold text-[#555F6D]">
              Send us your idea or design
            </h1>
            <p className="text-sm text-[#AEAEB2] font-semibold mt-1">
              Whether you’ve got a finished design or just a rough concept,
              we’re ready to bring it to life. Share your artwork, logo,
              sketch, or even just an idea, we’ll take it from there.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="w-full bg-[#FFF5EB] p-4 rounded-2xl">
          <div className="w-[48px] h-[48px] mt-5 border border-[#FFF5EB] rounded-lg bg-white flex items-center justify-center">
            <h2 className="text-xl text-[#F59638]">02</h2>
          </div>
          <div className="mt-14 mb-5">
            <h1 className="text-lg font-semibold text-[#555F6D]">
              We fine-tune it and prep it for print
            </h1>
            <p className="text-sm text-[#AEAEB2] font-semibold mt-1">
              Once we have your idea, we refine and format it for flawless
              printing. From colour correction to layout adjustments, we make
              sure everything looks sharp and vibrant across any surface.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="w-full bg-[#F4FBF7] p-4 rounded-2xl">
          <div className="w-[48px] h-[48px] mt-5 border border-[#D8F8E7] rounded-lg bg-white flex items-center justify-center">
            <h2 className="text-xl text-[#1D7C4D]">03</h2>
          </div>
          <div className="mt-14 mb-5">
            <h1 className="text-lg font-semibold text-[#555F6D]">
              We fine-tune it and prep it for print
            </h1>
            <p className="text-sm text-[#AEAEB2] font-semibold mt-1">
              Once we have your idea, we refine and format it for flawless
              printing. From colour correction to layout adjustments, we make
              sure everything looks sharp and vibrant across any surface.
            </p>
          </div>
        </div>
      </div>
    </section>;
};

export default OurProcess;
