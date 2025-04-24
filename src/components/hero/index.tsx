"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ProductDisplay from "./ProductDisplay";

const HomeHero = () => {
  return (
    <section id="home" className="w-full container mx-auto md:pt-5 pt-5 px-4">
      <div className="w-full relative">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="lg:text-[120px] md:text-[70px] text-[45px] font-semibold tracking-wide relative"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F05323] via-[#F1BC35] via-[#75C183] via-[#60a46d] to-[#3D63AE]">
            COLOR
          </span>{" "}
          <span className="tracking-wide">YOUR</span>
          <div className="lg:w-[336px] md:w-[200px] w-[120px] absolute lg:top-[137px] md:top-[90px] top-[55px] left-0.5">
            <Image
              src="/icons/line.png"
              alt="arrow-down"
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="lg:text-[120px] md:text-[70px] text-[45px] font-semibold tracking-wide"
        >
          WORLD
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm font-[600] text-[#555F6D] mt-3"
        >
          From concept to color, we’re your go-to hub for expressive,<br />
          high-quality printing that makes your brand pop.
        </motion.p>
        <div className="w-[180px] h-[164px] sm:block hidden aspect-square absolute bottom-3 right-4">
          <Image
            src="/icons/Group_icons.svg"
            alt="arrow-down"
            width={500}
            height={500}
            className="w-full h-full "
          />
        </div>
      </div>
      <div className="w-full my-14">
        <ProductDisplay />
      </div>
    </section>
  );
};

export default HomeHero;
