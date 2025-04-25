"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { IoCloseSharp } from "react-icons/io5";

const ComplaintsModal = ({
  setIsComplaints
}: {
  setIsComplaints: (value: boolean) => void;
}) => {
  return <div className="w-full h-full fixed top-0 left-0 right-0 z-[1000] flex items-center justify-center">
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.15)] backdrop-blur-xs" onClick={() => setIsComplaints(false)} />
      <AnimatePresence>
        <motion.div className="fixed inset-0  flex justify-center items-center z-[100000]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="flex flex-col bg-white p-6 rounded-lg shadow-lg w-full md:w-[447px]" initial={{ y: -50 }} animate={{ y: 0 }} exit={{ y: -50 }}>
            <div className="w-full">
              <div className="w-full flex items-center justify-between">
                <h6 className="text-base font-semibold text-[#555F6D]">
                  👋 Need Help? We&apos;re here for you.
                </h6>
                <IoCloseSharp onClick={() => setIsComplaints(false)} className="text-lg cursor-pointer" />
              </div>
              <p className="text-xs text-[#9EA8B3]">
                Having issues or want send a complaint, please provide details
                below
              </p>
              <form className="w-full flex flex-col gap-3 mt-4">
                <div className="w-full flex flex-col gap-2">
                  <label className="text-base ">Full name</label>
                  <Input type="text" className="w-full" placeholder="Enter your full name" />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="text-base">Phone number</label>
                  <Input type="number" className="w-full" placeholder="Enter your phone number" />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="text-base">Select Reason</label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="T-Shirt printing & Customisation">
                        T-Shirt printing & Customisation
                      </SelectItem>
                      <SelectItem value="Branded items & custom prints">
                        Branded items & custom prints
                      </SelectItem>
                      <SelectItem value="Photo & document services">
                        Photo & document services
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="text-base">Message</label>
                  <Textarea placeholder="Describe your style and your service" />
                </div>
                <button className="w-full h-[45px] mt-4 cursor-pointer bg-[#571F88] text-base text-white font-semibold rounded-md flex items-center justify-center gap-2">
                  Send message
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>;
};
export default ComplaintsModal;
