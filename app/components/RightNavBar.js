"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  MessageOutlined,
  NotificationsOutlined,
    
} from "@mui/icons-material";
const RightNavBar = () => {
    const { isLoaded, isSignedIn, user, getFullName  } = useUser();
  const router = useRouter();
   

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  const TodayContent = () => {
    const date = new Date().toDateString().split(' ');
    return `${date[0]}, ${date[2]} ${date[1]} ${date[3]}`;
  };
  
  return (
    <div className="nv w-[100%] h-[60px] px-2 pr-5 flex gap-5 justify-between items-center">
    <div className="text-blue-700">{TodayContent()}</div>
    <div className="flex gap-5 items-center">
      <MessageOutlined className="text-gray-500 hover:text-gray-400 cursor-pointer" />
      <NotificationsOutlined className="text-gray-500 hover:text-gray-400 cursor-pointer" />
      <UserButton appearance={{ elements: { userButtonAvatarBox: "w-10 h-10" } }} />
    </div>
  </div>
  )
}

export default RightNavBar
