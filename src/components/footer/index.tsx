import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const FooterHolder = () => {
  return <div className="w-full container mx-auto flex flex-col gap-14">
      <div className="w-full grid gap-7 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <div className="w-full">
          <div className="w-fit h-[100px] aspect-square">
            <Image src="/icons/w-logo.svg" alt="logo" width={500} height={500} className="w-full h-full" />
          </div>
          <div className="flex items-center gap-3.5 mt-3">
            <FaXTwitter className="text-2xl text-white" />
            <Link href="https://www.instagram.com/p/DIw_FQOtwnf/?igsh=YXhsa3AxbmxueGIw" target="_blank">
              <BsInstagram className="text-2xl text-white" />
            </Link>
            <FaLinkedin className="text-2xl text-white" />
          </div>
        </div>
        <div className="w-full flex flex-col md:gap-5 gap-3">
          <h2 className="text-base font-semibold text-white">Visit Us</h2>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-white">
              hello@inkhaus-gh.com
            </p>
            <p className="text-sm font-medium text-white">
              Mon–Sat: 9am – 6pm
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:gap-5 gap-3 md:ml-8">
          <h2 className="text-base font-semibold text-white">Company</h2>
          <div className="flex flex-col gap-2">
            <Link href="/#who-we-are">
              <p className="text-sm font-medium text-white">Who we are</p>
            </Link>
            <Link href="/">
              <p className="text-sm font-medium text-white">Careers</p>
            </Link>
            <Link href="/#contact">
              <p className="text-sm font-medium text-white">Contact</p>
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col md:gap-5 gap-3 md:ml-10">
          <h2 className="text-base font-semibold text-white">Resources</h2>
          <div className="flex flex-col gap-2">
            <Link href="/">
              <p className="text-sm font-medium text-white">Help centre</p>
            </Link>
            <Link href="/">
              <p className="text-sm font-medium text-white">Terms of use</p>
            </Link>
            <Link href="/">
              <p className="text-sm font-medium text-white">Privacy policy</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex items-end justify-end">
        <p className="text-sm text-white p-2 border border-[#19181821] bg-[#2e0f4a] rounded-xl">
          The expressive, high-quality printing that makes your brand pop.
        </p>
      </div>
    </div>;
};

export default FooterHolder;
