"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  LinearProgress,
  Checkbox,
} from "@mui/material";
import {
  MessageOutlined,
  NotificationsOutlined,
  SchoolOutlined,
  MenuBookOutlined,
  
    
} from "@mui/icons-material";
  import CalendarCard from "../components/CalendarCard";
import Footer from "../components/Footer";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import LeftSideBar from "../components/LeftSideBar";
 ;

const data = [
  { name: "Sat", blue: 20, orange: 15 },
  { name: "Sun", blue: 30, orange: 10 },
  { name: "Mon", blue: 50, orange: 15 },
  { name: "Tue", blue: 20, orange: 35 },
  { name: "Wed", blue: 10, orange: 15 },
  { name: "Thu", blue: 30, orange: 20 },
  { name: "Fri", blue: 15, orange: 15 },
];

const Dashboard = () => {
  const { isLoaded, isSignedIn, user, getFullName  } = useUser();
  const router = useRouter();
  const [checkedTasks, setCheckedTasks] = useState({
    task1: true,
    task2: true,
    task3: false,
    task4: false,
    task5: true,
    task6: false,
  });

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  const handleCheckboxChange = (task) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [task]: !prev[task],
    }));
  };

  
  const TodayContent = () => {
    const date = new Date().toDateString().split(' ');
    return `${date[0]}, ${date[2]} ${date[1]} ${date[3]}`;
  };



  return (
    <div className="w-full font-mono">
      <div className="hero w-[80%] mx-auto flex">
       
          <LeftSideBar/>

        {/* Main Content */}
        <div className="right ml-2 w-[80%] min-h-screen">
          <div className="nv w-[100%] h-[60px] px-2 pr-5 flex gap-5 justify-between items-center">
            <div className="text-blue-700">{TodayContent()}</div>
            <div className="flex gap-5 items-center">
              <MessageOutlined className="text-gray-500 hover:text-gray-400 cursor-pointer" />
              <NotificationsOutlined className="text-gray-500 hover:text-gray-400 cursor-pointer" />
              <UserButton appearance={{ elements: { userButtonAvatarBox: "w-10 h-10" } }} />
            </div>
          </div>

          <div className="mtd w-[100%] h-[150px] px-2 flex justify-between items-center">
            <div className="flex flex-col">
              <Typography variant="h6" className="font-bold">
                Welcome,  User
              </Typography>
              <Typography variant="body1" className="font-bold text-gray-500">
                Continue Your Learning
              </Typography>
            </div>
            <div className="r flex items-center gap-2">
              <MenuBookOutlined className="w-28 h-28 text-gray-500" />
              <div className="flex flex-col gap-2">
                <Typography variant="body2" className="text-gray-400">
                  Course Enrolled
                </Typography>
                <Typography variant="h4">10</Typography>
              </div>
            </div>
            <div className="r flex items-center gap-2">
              <SchoolOutlined className="w-28 h-28 text-gray-500" />
              <div className="flex flex-col gap-2">
                <Typography variant="body2" className="text-gray-400">
                  Score
                </Typography>
                <Typography variant="h4">50</Typography>
              </div>
            </div>
          </div>

          <div className="bel">
            <div className="row w-full px-5 pt-5 flex justify-between">
              <Card sx={{ width: 350, borderRadius: 3 }}>
                <CardContent>
                  <div className="w-[100%] flex items-center justify-around">
                    <Typography variant="h6">Progress</Typography>
                    <Select value="This week" variant="outlined" sx={{ height: "25px" }}>
                      <MenuItem value="This week">This week</MenuItem>
                      <MenuItem value="Last week">Last week</MenuItem>
                    </Select>
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={data} barSize={18}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="blue" stackId="a" fill="#4285F4" />
                      <Bar dataKey="orange" stackId="a" fill="#FBBC05" radius={[10, 10, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card sx={{ width: 500, borderRadius: 3 }}>
                <CardContent>
                  <div className="w-[100%] flex items-center justify-around">
                    <Typography variant="h6">Courses Enrolled</Typography>
                    <Typography className="text-sm text-blue-700 underline cursor-pointer">
                      See All
                    </Typography>
                  </div>
                  <div className="w-full h-full flex items-center justify-center gap-2">
                    <div className="c1 w-[45%]">
                      <Typography>Comprehensive English</Typography>
                      <LinearProgress sx={{ height: "10px", borderRadius: "10px" }} variant="determinate" value={50} />
                      <div className="pt-2 text-sm text-gray-400 w-full flex justify-between items-center">
                        <span>50%</span>
                        <span>25 Sept</span>
                      </div>
                    </div>
                    <div className="c1 w-[45%]">
                      <Typography>Mathematics</Typography>
                      <LinearProgress sx={{ height: "10px", borderRadius: "10px" }} variant="determinate" value={30} />
                      <div className="pt-2 text-sm text-gray-400 w-full flex justify-between items-center">
                        <span>30%</span>
                        <span>20 Sept</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="row w-full px-5 pt-5 flex justify-between">
              <Card sx={{ width: 400, borderRadius: 3 }}>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Typography variant="h6">Upcoming Tasks</Typography>
                    <Typography className="text-sm text-blue-700 underline cursor-pointer">
                      See All
                    </Typography>
                  </div>
                  <div className="list mt-2 w-full flex flex-col gap-3">
                    {Object.entries(checkedTasks).map(([task, checked], index) => (
                      <div key={index} className="flex items-center">
                        <Checkbox checked={checked} onChange={() => handleCheckboxChange(task)} />
                        <div className="text-sm">
                          Task {index + 1} - Due Date <span className="text-gray-400">12 Sept 2024</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <CalendarCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
