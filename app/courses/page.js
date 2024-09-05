// pages/courses/index.js
"use client"
import React from 'react';
import CourseList from '../components/CourseList';

import RightNavBar from '../components/RightNavBar';
import Footer from '../components/Footer';
import LeftSideBar from '../components/LeftSideBar';

const Courses = () => {
  return (
    <div className="w-full font-mono">
      <div className="hero w-[90%] mx-auto flex">
        <LeftSideBar />
        <div className="right ml-2 w-[80%] min-h-screen">
          <RightNavBar />
          <CourseList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
