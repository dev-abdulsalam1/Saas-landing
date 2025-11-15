"use client";
import { Menu, MoveRight, User } from "lucide-react";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm shadow-md">
      {/* Top banner */}
      <div className="flex justify-center items-center py-2 bg-black text-white text-sm">
        <p className="mx-3 text-white/60 hidden md:block">Streamline your workflow and boost your Productivity</p>
        <p className="text-white">Get started for free</p>
        <MoveRight className="h-4 w-4 inline-flex mx-2" />
      </div>

      {/* Main nav */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div >
          <Link className="flex items-center space-x-2" href="/">
            <Image src={logo} alt="SaaS logo" height={40} width={40} />
            <h1 className="text-2xl font-bold">FocusWave</h1>
          </Link>
        </div>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center lg:space-x-8 md:space-x-4 font-medium text-gray-700">
          <Link className="hover:text-[#0c03ff]" href="#about">About</Link>
          <Link className="hover:text-[#0c03ff]" href="#pricing">Pricing</Link>
          <Link className="hover:text-[#0c03ff]" href="#testimonials">Testimonials</Link>
          <Link className="hover:text-[#0c03ff]" href="#updates">Updates</Link>
          <Link className="hover:text-[#0c03ff]" href="#help">Help</Link>
        </nav>

        {/* Mobile menu */}
        <div className="flex items-center gap-4 md:hidden">

          {/* Menu */}
          <Sheet>
            <SheetTrigger>
              <Menu className="h-7 w-7 text-black cursor-pointer " />
            </SheetTrigger>

            <SheetContent className="bg-black/40 backdrop-blur-lg text-white px-6 py-8">
              <SheetHeader>
                <SheetTitle className="text-white text-xl font-bold mb-6">Menu</SheetTitle>

                <div className="flex flex-col gap-4 text-gray-100 font-medium">
                  <Link className="hover:text-[#060451]" href="/">Home</Link>
                  <Link className="hover:text-[#060451]" href="#about">About</Link>
                  <Link className="hover:text-[#060451]" href="#pricing">Pricing</Link>
                  <Link className="hover:text-[#060451]" href="#testimonials">Testimonials</Link>
                  <Link className="hover:text-[#060451]" href="#updates">Updates</Link>
                  <Link className="hover:text-[#060451]" href="#help">Help</Link>
                </div>
                <div className="border-1 border-t-gray-500 my-3"></div>
                <button className="w-full mt-4 py-2 px-4 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition">
                  Sign In
                </button>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
