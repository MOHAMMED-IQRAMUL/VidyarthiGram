"use client";
import TypeIt from "typeit-react";
import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import { Button } from "@mui/material";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  const [index, setIndex] = useState(0);

  const TEXTS = ["Easy Learning", "New Revolution", "User Friendly"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <nav className="flex justify-between items-center min-h-[70px] px-10 py-2 font-mono bg-orange-400">
        <div className="text-3xl font-extrabold text-amber-200 cursor-pointer ">
        <a href="/" className="flex gap-1 items-center"> <img src="/image.png" alt="Logo" className="w-[50px] h-[50px] rounded-full" /> VidyarthiGram </a> 
        </div>
        <div className="flex gap-10 text-amber-200 font-semibold text-lg">
          <div className="cursor-pointer hover:underline"><a href="/AboutUS">About US</a></div>
          <div className="cursor-pointer hover:underline"><a href="/ContactUS">Contact US</a></div>
        </div>
        <div className="flex gap-10 text-amber-200 font-semibold text-lg">
          <div className="border-2 border-amber-500 px-2 rounded-lg cursor-pointer hover:bg-amber-500 hover:text-white ">
           <a href="/sign-in">Sign In</a> 
          </div>
          <div className="border-2 border-amber-500 px-2 rounded-lg cursor-pointer hover:bg-amber-500 hover:text-white ">
          <a href="sign-up">Sign Up</a>
          </div>
        </div>
      </nav>

      <section className="w-full font-mono min-h-[700px] flex flex-col justify-center items-center bg-orange-100 gap-20">
        <div >
          <TypeIt className="text-center text-6xl font-bold text-orange-500">
            Welcome To VidyarthiGram 
          </TypeIt>
          <p className="text-xl mt-8 text-gray-400 w-full text-center">Building Bridge of Education</p>
          
        </div>
        <div>
        <h1 className="font-extrabold text-4xl text-center w-full text-orange-400 ">
            <TextTransition springConfig={presets.wobbly}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </h1>
        </div>
        <div>
          <a
            href="/Dashboard"
            className="inline-block px-8 py-3  text-white rounded-full bg-orange-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </a> 
          
        </div>
      </section>

      <Footer/>
    </main>
  );
}
