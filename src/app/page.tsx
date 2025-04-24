import AboutSection from "@/components/about";
import ContactHolder from "@/components/contact";
import HomeHero from "@/components/hero";
import NavigationHolder from "@/components/navigations";
import OurProcess from "@/components/Our_process";
import OurServices from "@/components/Our_services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full font-[family-name:var(--font-geist-sans)]">
      <nav className="w-full sticky top-0 left-0 bg-white z-50">
        <NavigationHolder />
      </nav>
      <main className="w-full">
        <HomeHero />
        <AboutSection />
        <OurServices />
        <OurProcess />
        <ContactHolder />
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer> */}
    </div>
  );
}
