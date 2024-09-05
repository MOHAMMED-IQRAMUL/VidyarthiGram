// pages/courses/[courseId].js
"use client"
import React from 'react';
import CourseDetails from '../../components/CourseDetails';
import LeftSideBar from '../../components/LeftSideBar';
import RightNavBar from '../../components/RightNavBar';
import Footer from '../../components/Footer';

const CoursePage = () => {
  return (
    <div className="w-full font-mono">
      <div className="hero w-[90%] mx-auto flex">
        <LeftSideBar />
        <div className="right ml-2 w-[80%] min-h-screen">
          <RightNavBar />
          <CourseDetails />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
