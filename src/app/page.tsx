"use client";
import AboutSection from "@/components/about";
import ContactHolder from "@/components/contact";
import FooterHolder from "@/components/footer";
import HomeHero from "@/components/hero";
import ComplaintsModal from "@/components/Modals/Complaints";
import NavigationHolder from "@/components/navigations";
import OurProcess from "@/components/Our_process";
import OurServices from "@/components/Our_services";
import { useState } from "react";

export default function Home() {
  const [isComplaints, setIsComplaints] = useState<boolean>(false);
  return (
    <div className="w-full relative font-[family-name:var(--font-geist-sans)]">
      <nav className="w-full sticky top-0 left-0 bg-white z-50">
        <NavigationHolder setIsComplaints={setIsComplaints} />
      </nav>
      <main className="w-full">
        <HomeHero />
        <AboutSection />
        <OurServices />
        <OurProcess />
        <ContactHolder />
      </main>
      <footer className="w-full bg-[#330E53] p-4 md:p-8 flex items-center justify-center">
        <FooterHolder />
      </footer>
      {isComplaints && <ComplaintsModal setIsComplaints={setIsComplaints} />}
    </div>
  );
}
