"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Aos from "aos";
import Link from "next/link";

const text_items = [
  "We are more than just a printing company, we are creators!",
  "Born in Ghana and driven by expression, Ink Haus GH exists to help businesses, events, and individuals stand out.",
  "Whether you're branding your fleet, rocking custom apparel, or designing merchandise, we deliver with heart, color, and excellence."
];
const AboutSection = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return <section id="who-we-are" className="w-full container mx-auto my-10 p-4">
    <div className="w-full flex flex-col md:flex-row gap-5">
      <div data-aos="fade-up" className="w-full">
        <div className="flex items-center gap-2">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} className="text-4xl font-semibold tracking-wide">
            Who We Are
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} className="w-[38px] h-[38px] aspect-square">
            <Image src="/icons/about_icon.png" alt="about-icon" width={500} height={500} className="w-full h-full" />
          </motion.div>
        </div>
        <div className="w-full flex flex-col gap-3.5 my-7">
          {text_items?.map((item, index) => (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} key={index} className="text-base font-medium text-[#555F6D]">
              {item}
            </motion.p>
          ))}
        </div>
        <Link href="/#contact">
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} className="w-[128px] h-[45px] cursor-pointer bg-[#571F88] text-base text-white font-semibold rounded-md flex items-center justify-center gap-2">
            Get in touch
          </motion.button>
        </Link>
      </div>
      <motion.div data-aos="fade-up" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} className="w-full md:h-[429px] h-[300px] aspect-square rounded-2xl">
        <Image src="/images/whoWeAre.png" alt="about-image" width={500} height={500} className="w-full h-full rounded-2xl" />
      </motion.div>
    </div>
  </section>;
};

export default AboutSection;
