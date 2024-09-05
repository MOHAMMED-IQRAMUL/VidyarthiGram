import React from 'react'
import LeftSideBar from '../components/LeftSideBar'
import RightNavBar from '../components/RightNavBar'
import Footer from '../components/Footer'

const Courses = () => {
  return (
    <div className="w-full font-mono">
      <div className="hero w-[90%] mx-auto flex">
        <LeftSideBar />
        <div className="right ml-2 w-[80%] min-h-screen">
<RightNavBar/>
Courses
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Courses
