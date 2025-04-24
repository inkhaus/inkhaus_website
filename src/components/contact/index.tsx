import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const ContactHolder = () => {
  return (
    <section
      id="contact"
      className="w-full h-auto contact-holder mt-4 px-3 py-5 md:p-14"
    >
      <div className="w-full container mx-auto flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <h3 className="text-2xl md:text-4xl text-white font-semibold text-center">
            Ofc printing is personal<br /> to us
          </h3>
          <p className="text-sm font-semibold text-center text-white mt-2">
            We’d love to print new ideas with you. Send us a message of <br />{" "}
            what you’d like us to print.
          </p>
          <div className="w-[447px] bg-white shadow rounded-xl p-6">
            <h6 className="text-base font-semibold text-[#555F6D]">
              Got a question, an idea, or ready to start printing? Drop us a
              message
            </h6>
            <form className="w-full flex flex-col gap-3 mt-4">
              <div className="w-full flex flex-col gap-2">
                <label className="text-base ">Full name</label>
                <Input
                  type="text"
                  className="w-full"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="text-base">Phone number</label>
                <Input
                  type="number"
                  className="w-full"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="text-base">Select services</label>
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
        </div>
      </div>
    </section>
  );
};

export default ContactHolder;
