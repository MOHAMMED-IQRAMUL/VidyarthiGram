"use client";
import TypeIt from "typeit-react";
import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import { Button } from "@mui/material";
import Footer from "./components/Footer";
import Link from "next/link";
import Navbar from "./components/Navbar";

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
      <Navbar/>

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
      <section className="w-full min-h-[100px] bg-orange-100 pb-10 font-mono">
        <div className="w-full mb-4">
          <h2 className="w-full text-center font-extrabold text-4xl text-orange-600">
            Features
          </h2>
        </div>
        <div className="box m-0 p-0 border-0 flex flex-col gap-[2rem]">
          
          <div className="boxes box1 m-0 p-5 border-0 sticky left-[2px] h-[58vh] bottom-[18vh] z-[7]  bg-orange-500 w-[80%] mx-auto rounded-2xl flex flex-col gap-5 justify-center  items-center ">
            <h1 className="font-bold text-4xl  text-orange-200">
              Note Summarizer
            </h1>

            <p className="text-center text-xl text-orange-200">
              Helps students and teachers quickly turn long notes into short
              summaries.
            </p>
          </div>

          <div className="boxes box1 m-0 p-5 border-0 sticky left-[2px] h-[58vh] bottom-[16vh] z-[6]  bg-orange-200 w-[80%] mx-auto rounded-2xl flex flex-col gap-5 justify-center  items-center">
            <h1 className="font-bold text-4xl  text-orange-600 text-center">
            Memorization and Live Text Conversion
            </h1>

            <p className="text-center text-xl text-orange-500">
            Assists with practicing
                  memorization and gives instant feedback on spoken words by
                  converting them to text.
            </p>
          </div>


          <div className="boxes box1 m-0 p-5 border-0 sticky left-[2px] h-[58vh] bottom-[14vh] z-[5]  bg-orange-500 w-[80%] mx-auto rounded-2xl flex flex-col gap-5 justify-center  items-center">
            <h1 className="font-bold text-4xl  text-orange-200">
            Understanding and Evaluation
            </h1>

            <p className="text-center text-xl text-orange-200">
            Uses AI to check how well users
            understand the material and provide helpful feedback.
            </p>
          </div>


          <div className="boxes box1 m-0 p-5 border-0 sticky left-[2px] h-[58vh] bottom-[12vh] z-[4]  bg-orange-200 w-[80%] mx-auto rounded-2xl flex flex-col gap-5 justify-center  items-center">
            <div className="border border-slate-800 m-[10px]  "></div>
            <h1 className="font-bold text-4xl  text-orange-500">
              Dashboard
            </h1>

            <p className="text-center text-xl text-orange-500">
            A central place where users can track their
            progress and access all tools.
            </p>
          </div>


          <div className="boxes box2 m-0 p-5 border-0 sticky left-[2px] h-[58vh] bottom-[10vh] z-[3] bg-orange-500 w-[80%] mx-auto rounded-2xl flex flex-col gap-5 justify-center  items-center">
            <h1 className="font-bold text-4xl  text-orange-200">
              Mentor Connect
            </h1>

            <p className="text-center text-xl text-orange-200">
               A feature that connects users with mentors for
                  guidance.
            </p>
          </div>


          <div className="boxes box3 m-0 p-5 border-0 sticky left-[2px] h-[58vh] bottom-[8vh] z-[2] bg-orange-200 w-[80%] mx-auto rounded-2xl flex flex-col gap-5 justify-center  items-center">
            <h1 className="font-bold text-4xl  text-orange-500">
            AI-Powered Chat Assistant
            </h1>

            <p className="text-center text-xl text-orange-500">
            An intelligent assistant that can
            answer general questions or provide specific help.
            </p>
          </div>
          <div className="boxes box4 m-0 p-5 border-0 sticky left-[2px] h-[58vh] bottom-[6vh] z-[1] bg-orange-500 w-[80%] mx-auto rounded-2xl flex flex-col gap-5 justify-center  items-center">
            <h1 className="font-bold text-4xl  text-orange-200">
            Game-Based Learning
            </h1>

            <p className="text-center text-xl text-orange-200">
            Makes learning fun and interactive
            through educational games.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
