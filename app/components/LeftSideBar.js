"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
 import React from "react";
import { useEffect } from "react";
import {
  SummarizeOutlined,
  PsychologyOutlined,
  AssistantOutlined,
  ConnectWithoutContactOutlined,
  SportsEsportsOutlined,
  InfoOutlined,
  MoveToInboxOutlined,
  QuizOutlined,
  SchoolOutlined,
  GroupsOutlined,
  GridViewOutlined,
  ArticleOutlined,
  CastForEducationOutlined
} from "@mui/icons-material";

const LeftSideBar = () => {
  const { isLoaded, isSignedIn, user, getFullName } = useUser();
  const [url, setUrl] = React.useState("");
  const router = useRouter();
  

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
    setUrl( window.location.pathname)

console.log(url)
 
  }, [isLoaded, isSignedIn, router, url]);

  const handleNavigation = (path) => {
    router.push(path);
  };


  const menuOptions = [
    { label: "Online Classes", icon: <CastForEducationOutlined />, path: "/classes" },
    { label: "Courses", icon: <GridViewOutlined />, path: "/courses" },
    { label: "Assignment", icon: <ArticleOutlined />, path: "/assignment" },
    { label: "Schools", icon: <SchoolOutlined />, path: "/schools" },

    { label: "Summarize AI", icon: <SummarizeOutlined />, path: "/summarize" },
    { label: "Memorize AI", icon: <PsychologyOutlined />, path: "/memorize" },
    { label: "AI Assistant", icon: <AssistantOutlined />, path: "/assistant" },
    { label: "Mentor Connect", icon: <ConnectWithoutContactOutlined />, path: "/mentor-connect"},
    { label: "Games", icon: <SportsEsportsOutlined />, path: "/games" },

    { label: "About Us", icon: <InfoOutlined />, path: "/about" },
    { label: "Contact Us", icon: <MoveToInboxOutlined />, path: "/contact" },
    { label: "Our Team", icon: <GroupsOutlined />, path: "/team" },
    { label: "FAQs", icon: <QuizOutlined />, path: "/faqs" },
  ];
  return (
    <div className="left w-[25%] min-h-screen border-r-2 border-gray-400">
      <div className="Logo min-h-[100px] flex justify-center items-center text-4xl">
        <a href="/Dashboard">VidyarthiGram</a>
      </div>
      <hr className="w-[80%] my-2 border-gray-500 mx-auto" />
      <div className="menu mt-[15px] mx-auto flex flex-col gap-[15px] w-[80%]">
        {menuOptions.slice(0, 4).map(({ label, icon, path }) => (
          <div
            key={label}
            className={`Opt hover:text-blue-500 hover:fill-blue-500 hover:bg-blue-200 flex gap-2 p-1 pl-3 rounded-xl cursor-pointer  ${path===url ?"text-blue-500" : "text-gray-500"}`}
            onClick={() => handleNavigation(path)}
            
          > 
            {icon}
            <div>{label}</div>
          </div>
        ))}
      </div>
      <hr className="w-[80%] my-2 border-gray-500 mx-auto" />
      <div className="menu mt-[15px] mx-auto flex flex-col gap-[15px] w-[80%]">
        {menuOptions.slice(4, 9).map(({ label, icon, path }) => (
          <div
            key={label}
            className={`Opt text-gray-500 hover:text-blue-500 hover:fill-blue-500 hover:bg-blue-200 flex gap-2 p-1 pl-3 rounded-xl cursor-pointer ${path == url && " text-blue-500 " }`}
            onClick={() => handleNavigation(path)}
          >
            {icon}
            <div>{label}</div>
          </div>
        ))}
      </div>
      <hr className="w-[80%] my-2 border-gray-500 mx-auto" />
      <div className="menu mt-[15px] mx-auto flex flex-col gap-[15px] w-[80%]">
        {menuOptions.slice(9).map(({ label, icon, path }) => (
          <div
            key={label}
            className="Opt text-gray-500 hover:text-blue-500 hover:fill-blue-500 hover:bg-blue-200 flex gap-2 p-1 pl-3 rounded-xl cursor-pointer"
            onClick={() => handleNavigation(path)}
          >
            {icon}
            <div>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
