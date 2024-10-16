import React from "react";
import RightNavBar from "../components/RightNavBar";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";

const Memorize = () => {
  return (
    <div className="w-full font-mono">
      <div className="hero w-[90%] mx-auto flex">
        <LeftSideBar />
        <div className="right ml-2 w-[80%] min-h-screen">
          <RightNavBar />

          <div className="w-[50%] mt-[20%] mx-auto h-[50%] ">Section To Display Features Memorize</div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Memorize;
