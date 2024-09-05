import React from "react";
import SchoolCard from "../components/SchoolCard";
import schoolData from "./data/schoolData";
import LeftSideBar from "../components/LeftSideBar";
import RightNavBar from "../components/RightNavBar";
 import Footer from "../components/Footer";

const Schools = () => {
  return (
    <div className="w-full font-mono">
      <div className="hero w-[90%] h-screen max-h-screen mx-auto flex">
        <LeftSideBar />
        <div className="right ml-2 w-[80%] ">
          <RightNavBar />
          <div className="max-h-[90%] overflow-x-scroll bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-center text-blue-500 my-4">
              Schools in Greater Noida
            </h1>
            <div className="flex flex-wrap justify-center">
              {schoolData.map((school, index) => (
                <SchoolCard key={index} school={school} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Schools;
