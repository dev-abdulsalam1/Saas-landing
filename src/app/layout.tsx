import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose weights you want
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "FocusWave -Productivity",
  description: "Boost your productivity",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${poppins.variable} antialiased bg-[#EAEEFE]`}
      >
        {children}
      </body>
    </html>
  );
}
