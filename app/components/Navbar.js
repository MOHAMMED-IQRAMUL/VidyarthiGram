"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const { isLoaded, isSignedIn } = useUser();
 
  return (
    <nav className="w-full relative top-0 left-0 flex justify-between items-center min-h-[70px] px-10 py-2 font-mono bg-orange-400">
      <div className="text-3xl font-extrabold text-amber-200 cursor-pointer flex gap-1 items-center">
        <a href="/" className="flex gap-1 items-center">
          {" "}
          <Image
            width={50}
            height={50}
            src="/image.png"
            alt="Logo"
            className="rounded-full"
          />{" "}
          VidyarthiGram{" "}
        </a>
      </div>
      <div className="flex gap-10 text-amber-200 font-semibold text-lg">
        <div className="cursor-pointer hover:underline">
          <a href="/about">About US</a>
        </div>
        <div className="cursor-pointer hover:underline">
          <a href="/contact">Contact US</a>
        </div>
        <div className="cursor-pointer hover:underline">
          <a href="/faqs">FAQ&apos;s</a>
        </div>
      </div>
      <div className="flex gap-10 text-amber-200 font-semibold text-lg">
       {isLoaded && isSignedIn &&( <div className="border-2 border-amber-500 px-2 rounded-lg cursor-pointer hover:bg-amber-500 hover:text-white ">
          <a href="/Dashboard">Dashboard</a>
        </div>)}
        {isLoaded && isSignedIn ? (
          <UserButton
            appearance={{ elements: { userButtonAvatarBox: "w-10 h-10" } }}
          />
        ) : (
          <>
            {" "}
            <div className="border-2 border-amber-500 px-2 rounded-lg cursor-pointer hover:bg-amber-500 hover:text-white ">
              <a href="/sign-in">Sign In</a>
            </div>
            <div className="border-2 border-amber-500 px-2 rounded-lg cursor-pointer hover:bg-amber-500 hover:text-white ">
              <a href="sign-up">Sign Up</a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
