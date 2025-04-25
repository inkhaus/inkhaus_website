"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Aos from "aos";

const productList1 = [
  {
    id: 1,
    name: "DTF T-shirt customisation",
    description:
      "Bold, full-color prints with soft textures and long-lasting wear.",
    image: "/images/product/product1.jpg"
  },
  {
    id: 2,
    name: "Vinyl/Flock T-shirt printing",
    description:
      "Perfect for bold text and logos, with a clean, slightly raised finish.",
    image: "/images/product/product2.png"
  },
  {
    id: 3,
    name: "Sublimation T-shirt printing",
    description:
      "Seamless, full-coverage prints with a vibrant photographic quality.",
    image: "/images/product/product3.png"
  }
];
const productList2 = [
  {
    id: 1,
    name: "Car decal stickers",
    description: "Turn your ride into a moving billboard or personality piece.",
    image: "/images/product/product4.png"
  },
  {
    id: 2,
    name: "Customised mugs",
    description: "Perfect for gifts, branding, or everyday style.",
    image: "/images/product/product5.png"
  },
  {
    id: 3,
    name: "Customised hats",
    description: "Embroidered or printed — your style, your cap.",
    image: "/images/product/product6.png"
  },
  {
    id: 4,
    name: "Customised souvenirs",
    description: "Keychains, tote bags, event giveaways and more.",
    image: "/images/product/product7.png"
  },
  {
    id: 5,
    name: "Engraving",
    description:
      "Add a touch of elegance with precision engraving on wood, acrylic, metal or glass.",
    image: "/images/product/product8.png"
  }
];
const productList3 = [
  {
    id: 1,
    name: "Instant passport photos",
    description: "Ready in minutes, approved for local and international use.",
    image: "/images/product/product8.png"
  },
  {
    id: 2,
    name: "Photo printing",
    description: "Studio-quality photos with rich colors and sharp resolution.",
    image: "/images/product/product9.png"
  },
  {
    id: 3,
    name: "ID card printing",
    description:
      "Durable, clean, and professional for schools, companies, and events.",
    image: "/images/product/product10.png"
  },
  {
    id: 4,
    name: "Scanning, photocopying, lamination",
    description: "Efficient service, handled with care",
    image: "/images/product/product11.png"
  },
  {
    id: 5,
    name: "A2/A3 printing",
    description: "Large-format printing for presentations, posters, and more.",
    image: "/images/product/product12.png"
  }
];
const OurServices = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return <section id="services" className="w-full h-full container mx-auto my-4">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full bg-white sticky md:top-[110px] top-[70px] px-4 py-7 left-0 z-50">
          <div className="flex items-center justify-center gap-2">
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} className="text-3xl font-semibold tracking-wide">
              Our services
            </motion.h1>
            <div className="w-[38px] h-[38px] aspect-square">
              <Image src="/icons/services.svg" alt="line" width={500} height={500} className="w-full h-full" />
            </div>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} className="text-sm font-semibold text-[#555F6D] text-center mt-2">
            From prints that speak to you, to souvenirs that speak for you.
          </motion.p>
        </div>
        <div data-aos="fade-up" className="w-full flex flex-col gap-7">
          <div className="w-full p-6 rounded-2xl bg-[#FAFAFA] md:sticky top-[210px] left-0  my-5">
            <h2 className="text-lg font-semibold">
              T-Shirt printing & Customisation
            </h2>
            <div className="w-full my-4 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {productList1.map((item, index) =>
                <motion.div key={index} className="w-full">
                  <div className="w-full md:h-[360px] h-[330px] aspect-square rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={500}
                      height={500}
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                  <div className="w-full mt-3">
                    <h3 className="text-[#555F6D] text-lg font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#AEAEB2]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
          <div className="w-full p-6 rounded-2xl bg-[#FAFAFA] md:sticky top-[210px] left-0 z-10 my-5">
            <h2 className="text-lg font-semibold">
              Branded items & custom prints
            </h2>
            <div className="w-full my-4 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {productList2.map((item, index) =>
                <motion.div key={index} className="w-full mt-7">
                  <div className="w-full md:h-[360px] h-[330px] aspect-square rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={500}
                      height={500}
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                  <div className="w-full mt-3">
                    <h3 className="text-[#555F6D] text-lg font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#AEAEB2]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
          <div className="w-full p-6 rounded-2xl bg-[#FAFAFA] md:sticky top-[210px] left-0 z-20 my-5">
            <h2 className="text-lg font-semibold">
              Photo & document services
            </h2>
            <div className="w-full my-4 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {productList3.map((item, index) =>
                <motion.div key={index} className="w-full mt-7">
                  <div className="w-full md:h-[360px] h-[330px] aspect-square rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={500}
                      height={500}
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                  <div className="w-full mt-3">
                    <h3 className="text-[#555F6D] text-lg font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#AEAEB2]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default OurServices;
