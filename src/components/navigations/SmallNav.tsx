"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";

const NavLinks = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Who we are",
    link: "/#who-we-are"
  },
  {
    name: "Our services",
    link: "/#services"
  },
  {
    name: "Track order",
    link: "/"
  }
];

const SmallNav = ({
  setIsSmallNav
}: {
  setIsSmallNav: (value: boolean) => void;
}) => {
  return <div className="w-full h-full  lg:hidden fixed top-0 left-0 right-0 z-[1000000] flex items-center justify-center ">
      <AnimatePresence>
        <motion.div exit="exit" initial={{ y: -30 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 120 }} className=" w-full h-screen  bg-[#fff] overflow-y-auto shadow z-[1000000] p-4">
          <div className="w-full flex items-center justify-between">
            <div className="w-fit lg:h-[80px] h-[70px] object-cover">
              <Image src="/icons/logo.svg" alt="logo" width={500} height={500} className="w-full h-full object-cover" />
            </div>
            <IoCloseSharp onClick={() => setIsSmallNav(false)} className="text-3xl cursor-pointer" />
          </div>
          <div className="w-full h-[70vh] flex items-center justify-center mt-5">
            <ul className="flex flex-col items-center gap-8 ">
              {NavLinks.map((item, index) =>
                <li key={index} className="text-2xl font-medium">
                  <a
                    href={item.link}
                    onClick={() => setIsSmallNav(false)}
                    className="cursor-pointer font-semibold"
                  >
                    {item.name}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>;
};

export default SmallNav;
