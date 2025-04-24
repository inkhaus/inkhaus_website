import Image from "next/image";
import React from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

const NavLinks = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Who we are",
    link: "/"
  },
  {
    name: "Our services",
    link: "/"
  },
  {
    name: "Track order",
    link: "/"
  }
];

const NavigationHolder = () => {
  return (
    <nav className="w-full container mx-auto p-4 flex items-center justify-between">
      <ul className="lg:flex items-center gap-5 hidden ">
        {NavLinks.map((item, index) =>
          <li key={index} className="text-base font-medium">
            <a href={item.link} className=" font-semibold">
              {item.name}
            </a>
          </li>
        )}
      </ul>
      <div className="w-fit lg:h-[80px] h-[50px] object-cover">
        <Image
          src="/icons/logo.svg"
          alt="logo"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:flex hidden items-center gap-3">
        <button className="w-[151px] h-[45px] border border-[#F2F2F7] font-semibold rounded-md flex items-center justify-center gap-2">
          <span className="text-base font-semibold">Complaints</span>
          <BsQuestionCircleFill className="text-base" />
        </button>
        <button className="w-[128px] h-[45px] cursor-pointer bg-[#571F88] text-base text-white font-semibold rounded-md flex items-center justify-center gap-2">
          Get in touch
        </button>
      </div>
      <div className="block lg:hidden">
        <HiMiniBars3BottomRight className="text-2xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default NavigationHolder;
