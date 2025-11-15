import { ArrowRight } from "lucide-react";
import HeroImage from "../assets/ChatGPT_Image_Sep_27__2025__11_48_54_AM-removebg-preview.png";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-[700] bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] relative overflow-hidden">
      <div className="container lg:mt-30 mx-auto px-6 flex flex-col md:flex-col lg:flex-row items-center lg:justify-around">
        
        {/* Text Content */}
        <div className="w-full md:w-4/5 lg:w-[500px] flex flex-col justify-center mx-20 text-center md:text-center lg:text-left">
          {/* Badge */}
          <div className="inline-block text-sm font-semibold border border-[#222]/10 px-4 py-1 rounded-full tracking-tight text-gray-800 mx-auto lg:mx-0 md:w-2/6 w-auto">
            Version 2.0 is here
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-6 bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text leading-tight">
            Pathway to <br className="hidden sm:block" /> Productivity
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-[#010D3E] mt-6 max-w-xl leading-relaxed mx-auto lg:mx-0">
            Turn progress into motivation with an app that tracks your journey, fuels your drive, and celebrates every win.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto justify-center lg:justify-start">
            <SignedOut>
            <SignInButton mode="modal">
              <button className="px-5 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition">
                Get started
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link
              href="/dashboard"
              className="px-5 py-2 bg-[#010D3E] text-white rounded-lg hover:bg-[#213273] transition items-center flex"
            >
              Go to Dashboard
            </Link>
          </SignedIn>
            <button className="w-full sm:w-auto px-6 py-3 flex justify-center items-center gap-2 rounded-lg bg-white text-black border border-gray-300 font-semibold hover:bg-gray-100 transition-all duration-300">
              <Link className="flex items-center" href="#help"> 
              Learn More
              </Link>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="w-full lg:flex-1 flex justify-center mt-10 lg:mt-0">
          <Image
            src={HeroImage}
            quality={100}
            alt="Hero Illustration"
            className="w-full max-w-xl sm:max-w-2xl md:max-w-2xl lg:max-w-lg xl:max-w-2xl h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
