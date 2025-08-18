"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { toast } from "sonner"

const servicesItems = [
  {
    value: "t_shirt_printing_and_customization",
    label: "T-Shirt printing & Customisation"
  },
  {
    value: "branded_items_and_customization",
    label: "Branded items & custom prints"
  },
  {
    value: "photography_and_videography",
    label: "Photo & document services"
  }
];
const ContactHolder = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/enquiries/`, {
      fullname:name,
      phoneNumber:phone,
      serviceCategory:service,
      message:message
      });
      // console.log(res)
    toast.success("Message sent successfully!")
    setName("");
      setPhone("");
      setService("");
      setMessage("");
       setLoading(false)
    } catch (error) {
      console.error("Error submitting form:", error);
       setLoading(false)
      toast.error("Failed to send message. Please try again.");
      return;
      
    }
  };
  return <section id="contact" className="w-full h-auto contact-holder mt-4 px-3 py-5 md:p-14">
      <div className="w-full container mx-auto flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <h3 className="text-3xl md:text-5xl text-white font-semibold text-center">
            Ofc printing is personal<br /> to us
          </h3>
          <p className="text-lg font-semibold text-center text-white mt-2">
            We’d love to print new ideas with you. Send us a message of <br /> what you’d like us to print.
          </p>
          <div className="md:w-[447px] w-full mt-2 bg-white shadow rounded-xl p-6">
            <h6 className="text-base font-semibold text-[#555F6D]">
              Got a question, an idea, or ready to start printing? Drop us a
              message
            </h6>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 mt-4">
              <div className="w-full flex flex-col gap-2">
                <label className="text-base ">Full name</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full" placeholder="Enter your full name" />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="text-base">Phone number</label>
                <Input value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" className="w-full" placeholder="Enter your phone number" />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="text-base">Select services</label>
                <Select onValueChange={(value) => setService(value)} value={service}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {servicesItems?.map((item, index)=> (
                    <SelectItem key={index} value={item.value}>
                      {item.label}
                    </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="text-base">Message</label>
                <Textarea placeholder="Describe your style and your service" />
              </div>
              <button type="submit" className="w-full h-[45px] mt-4 cursor-pointer bg-[#571F88] text-base text-white font-semibold rounded-md flex items-center justify-center gap-2">
                {loading ? 'Loading...' : 'Send message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactHolder;
