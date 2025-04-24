"use client"
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const items = [
    {
        id: 1,
        name: "Custom shirt print",
        image: "/images/item1.png"
    },
    {
        id: 2,
        name: "",
        image: "/images/item2.png"
    },
    {
        id: 3,
        name: "",
        image: "/images/item3.png"
    },
    {
        id: 4,
        name: "",
        image: "/images/item4.png"
    },
    {
        id: 5,
        name: "Vehicle wrapping",
        image: "/images/item5.png"
    },
    {
        id: 6,
        name: "",
        image: "/images/item6.png"
    },
    {
        id: 7,
        name: "Book/brochure printing",
        image: "/images/item7.png"
    },
    {
        id: 8,
        name: "",
        image: "/images/item8.png"
    }
];
const ProductDisplay = () => {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);
    return <div>
        <div className="w-full ">
            <div className="w-full p-4 rounded-3xl bg-[#FAFAFA] grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map(item =>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        key={item.id}
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className="w-full md:h-[273px] h-[160px] rounded-3xl cursor-pointer aspect-square relative"
                    >
                        <Image
                            src={item.image}
                            alt={item.name + "image"}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                        {hoveredItem === item.id && item?.name && <div className="w-full absolute bottom-0 left-0 rounded-b-3xl backdrop-blur-sm bg-opacity-20  bg-[#19181821] p-3">
                            <motion.p initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.1 }} className="text-sm font-semibold text-white">
                                {item?.name}
                            </motion.p>
                        </div>}

                    </motion.div>
                )}
            </div>
            <p className="tex-xs text-[#555F6D] italic mt-3">Our canvas? Anything you imagine.</p>
        </div>
    </div>;
};

export default ProductDisplay;
