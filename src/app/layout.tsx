import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

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
      </body>
    </html>
  );
}
