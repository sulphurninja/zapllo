"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { Home, Menu, MessageCircle, User, X } from "lucide-react";
import Image from "next/image";
import ShimmerButton from "../magicui/shimmer-button";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

export function FloatingNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Templates",
      link: "/Templates",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Success Stories",
      link: "/successstories",
      icon: (
        <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];


  return (
    <div className="fixed top-0 left-0 right-0 z-[40] opacity-95   supports-backdrop-blur:bg-transparent /60  bg-transparent /95 backdrop-blur  ">
      <div className="hidden md:block">
        <FloatingNav navItems={navItems} />
      </div>
      <div className="flex justify-between md:hidden p-4 ">
        <img src="logo.png" className="h-7 mt-2" />
        <Sheet>
          <SheetTrigger asChild>
            <div className="bg-gradient-to-b from-[#1C1F3E] to-[#010313] px-2 py-2 mt-1 rounded-lg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gradient"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#815BF5', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#FC8929', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <rect y="4" width="24" height="2" fill="url(#grad1)" />
                <rect y="11" width="24" height="2" fill="url(#grad1)" />
                <rect y="18" width="24" height="2" fill="url(#grad1)" />
              </svg>
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle><img src="logo.png" className="h-6" /></SheetTitle>
            <SheetDescription className="mt-12 my-24">
              <h1 className="w-full text-2xl p-2">Home</h1>
              <h1 className="w-full text-2xl p-2 mt-2">Templates</h1>
              <h1 className="w-full text-2xl p-2 mt-2">Success Stories</h1>
              <h1 className="w-full text-2xl p-2 mt-2">Contact Us</h1>

              
            </SheetDescription>

            <SheetFooter>
              <div className="p-2 my-5 ">
              <h1 className="text-[#676B93]">Terms of Use</h1>
              <h1 className="text-[#676B93] mt-4">Privacy</h1>

              </div>
              <SheetClose asChild>

              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

    </div>
  );
}
