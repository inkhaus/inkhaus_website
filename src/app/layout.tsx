import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import { Toaster } from "sonner"



const geistMono = Montserrat({
  weight: ["300", "400", "700", "900"],
  variable: "--font-Montserrat",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Inkhaus Gh",
  description: "We are more than just a printing company, we are creators!Born in Ghana and driven by expression, Ink Haus GH exists to help businesses, events, and individuals stand out.",
  keywords:
    "printing, custom printing, Ghana printing, Inkhaus Gh, creative printing, business printing, event printing, personalized printing, high-quality prints, design and print, professional printing services",
  authors: [{ name: "Inkhaus Gh" }],
  creator: "Daniel Acquah",
  publisher: "Inkhaus Gh",
  formatDetection: {
    email: false,
    telephone: false
  },
  metadataBase: new URL("https://www.linkhusgh.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Inkhaus Gh",
    description:
      "We are more than just a printing company, we are creators!Born in Ghana and driven by expression, Ink Haus GH exists to help businesses, events, and individuals stand out.",
    url: "https://www.linkhusgh.com",
    siteName: "Inkhaus Gh",
    images: [
      {
        url: "/Image/logo.svg",
        width: 1200,
        height: 630,
        alt: "Inkhaus Gh"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={` ${geistMono.variable} antialiased scroll-smooth`}
      >
        {children}
         <Toaster richColors />
      </body>
    </html>
  );
}
