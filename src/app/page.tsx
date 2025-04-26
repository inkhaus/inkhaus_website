"use client";
import AboutSection from "@/components/about";
import ContactHolder from "@/components/contact";
import FooterHolder from "@/components/footer";
import HomeHero from "@/components/hero";
import ComplaintsModal from "@/components/Modals/Complaints";
import TrackOrders from "@/components/Modals/TrackOrders";
import NavigationHolder from "@/components/navigations";
import SmallNav from "@/components/navigations/SmallNav";
import OurProcess from "@/components/Our_process";
import OurServices from "@/components/Our_services";
import { useState } from "react";

export default function Home() {
  const [isComplaints, setIsComplaints] = useState<boolean>(false);
  const [isSmallNav, setIsSmallNav] = useState<boolean>(false);
  const [trackOrder, setTrackOrder] = useState<boolean>(false);

  return (
    <div className="w-full relative font-[family-name:var(--font-geist-sans)]">
      <nav className="w-full sticky top-0 left-0 bg-white z-[10000]">
        <NavigationHolder
          setIsSmallNav={setIsSmallNav}
          setIsComplaints={setIsComplaints}
          setTrackOrder={setTrackOrder}
        />
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
      {isSmallNav && <SmallNav setIsSmallNav={setIsSmallNav} />}
      {trackOrder && <TrackOrders setTrackOrder={setTrackOrder} />}
    </div>
  );
}
