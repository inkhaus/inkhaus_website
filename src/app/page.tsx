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

  return <div className="w-full relative font-[family-name:var(--font-geist-sans)]">
      <nav className="w-full sticky top-0 left-0 bg-white z-[10000]">
        <NavigationHolder setIsSmallNav={setIsSmallNav} setIsComplaints={setIsComplaints} setTrackOrder={setTrackOrder} />
      </nav>
      <main className="w-full">
        <HomeHero />
        <AboutSection />
        <OurServices />
        <OurProcess />
        <ContactHolder />
        <div className="w-full ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d290.77769021156814!2d-0.17139306950954505!3d5.700898176498345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9da2e7d79ad9%3A0xed0a258763a808e6!2sFeeling%20Auto%20Parts%20ltd-%20Dodowa%20road!5e1!3m2!1sen!2sgh!4v1755591538196!5m2!1sen!2sgh" width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </main>
      <footer className="w-full bg-[#330E53] p-4 md:p-8 flex items-center justify-center">
        <FooterHolder />
      </footer>
      {isComplaints && <ComplaintsModal setIsComplaints={setIsComplaints} />}
      {isSmallNav && <SmallNav setIsSmallNav={setIsSmallNav} />}
      {trackOrder && <TrackOrders setTrackOrder={setTrackOrder} />}
    </div>;
}
