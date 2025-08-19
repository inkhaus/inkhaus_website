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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15880.337268919728!2d-0.1713061!3d5.7009579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9dd7632112db%3A0xef77d1c879af77a9!2sInkhaus-GH!5e0!3m2!1sen!2sgh!4v1755622969887!5m2!1sen!2sgh" width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
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
