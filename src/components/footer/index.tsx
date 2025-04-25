import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterHolder = () => {
  return (
    <div className="w-full container mx-auto flex flex-col gap-14">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="w-full">
          <div className="w-fit h-[100px] aspect-square">
            <Image
              src="/icons/w-logo.svg"
              alt="logo"
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <h2 className="text-base font-semibold text-white">Visit Us</h2>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-white">Ink Haus GH</p>
            <p className="text-sm font-medium text-white">Mon–Sat: 9am – 6pm</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 ml-8">
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
        <div className="w-full flex flex-col gap-5 ml-10">
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
        <p className="text-sm text-white p-2 border border-[#19181821] rounded-xl">
          The expressive, high-quality printing that makes your brand pop.
        </p>
      </div>
    </div>
  );
};

export default FooterHolder;
