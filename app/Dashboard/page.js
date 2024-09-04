"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/Psychology";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MoveToInboxOutlinedIcon from "@mui/icons-material/MoveToInboxOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import * as React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  LinearProgress,
  Checkbox,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import CalendarCard from "../components/CalendarCard";
import Footer from "../components/Footer";

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
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  const [checkedTasks, setCheckedTasks] = React.useState({
    task1: true,
    task2: true,
    task3: false,
    task4: false,
    task5: true,
    task6: false,
  });

  const handleCheckboxChange = (task) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [task]: !prev[task],
    }));
  };
const TodayContent = () => {
  //////display today date day
  const Data = "" + new Date();
  const day = Data.slice(0, 3);
  const date = Data.slice(8, 10);
  const month = Data.slice(4, 7);
  const year = Data.slice(11, 15);
  const todayDate = day + ", " + date + " " + month + " " + year;
  return todayDate;
}
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  const getFullName = () => {
    // const FullName = user.firstName;
    // return FullName;
    return "Vidyarthi Gram";
  };
  return (
    <div className="w-full font-mono">
      <div className="hero  w-[80%] mx-auto flex">
        <div className="left w-[25%] min-h-screen border-r-2 border-gray-400   ">
          <div className="Upper">
            <div className="Logo min-h-[100px] flex justify-center items-center text-4xl">
              {" "}
              VidyarthiGram{" "}
            </div>
          </div>

          <hr className="w-[80%] my-2 border-1 border-gray-500 mx-auto" />

          <div className="Middle">
            <div className="w-[80%] mt-[15px] mx-auto flex flex-col  gap-[15px] ">
              <div className="Opt text-gray-500 fill-gray-500 hover:text-blue-500  hover:fill-blue-500 hover:bg-blue-200 flex gap-2 p-1 pl-3 rounded-xl">
                <SummarizeOutlinedIcon />

                <div>Summarize AI</div>
              </div>
              <div className="Opt text-gray-500 fill-gray-500 hover:text-blue-500  hover:fill-blue-500 hover:bg-blue-200 flex gap-2 p-1 pl-3 rounded-xl">
                <PsychologyOutlinedIcon />
                <div>Memorize AI</div>
              </div>
              <div className="Opt text-gray-500 fill-gray-500 hover:text-blue-500  hover:fill-blue-500 hover:bg-blue-200 flex gap-2 p-1 pl-3 rounded-xl">
                <AssistantOutlinedIcon />
                <div>AI Assistant</div>
              </div>
              <div className="Opt text-gray-500 fill-gray-500 hover:text-blue-500  hover:fill-blue-500 hover:bg-blue-200 flex gap-2 p-1 pl-3 rounded-xl">
                <ConnectWithoutContactOutlinedIcon />
                <div>Mentor Connect</div>
              </div>

              <div className="Opt text-gray-500 fill-gray-500 hover:text-blue-500  hover:fill-blue-500 hover:bg-blue-200 flex gap-2 p-1 pl-3 rounded-xl">
                <SportsEsportsOutlinedIcon />
                <div>Games</div>
              </div>
            </div>
          </div>

          <hr className="w-[80%] my-2 border-1 rounded-full border-gray-500 mx-auto" />

          <div className="bottom">
            <div className="w-[80%] mt-[15px] mx-auto flex flex-col  gap-[15px] ">
              <div className="Opt text-gray-500 fill-gray-500 hover:text-blue-500  hover:fill-blue-500 hover:bg-blue-200 flex gap-2 p-1 pl-3 rounded-xl">
                <InfoOutlinedIcon />

                <div>About US</div>
              </div>
              <div className="Opt text-gray-500 fill-gray-500 hover:text-blue-500  hover:fill-blue-500 hover:bg-blue-200 flex gap-2 p-1 pl-3 rounded-xl">
                <MoveToInboxOutlinedIcon />
                <div>Contact US</div>
              </div>
              <div className="Opt text-gray-500 fill-gray-500 hover:text-blue-500  hover:fill-blue-500 hover:bg-blue-200 flex gap-2 p-1 pl-3 rounded-xl">
                <QuizOutlinedIcon />
                <div>FAQ&apos;s</div>
              </div>
            </div>
          </div>
        </div>

        <div className="right ml-2 w-[80%] min-h-screen  ">
          <div className="nv w-[100%]  h-[60px]  px-2 pr-5 flex gap-5 justify-between  items-center">
            
            <div className="text-blue-700">{TodayContent()}</div>
            <div className="flex gap-5 items-center"><div className="msg text-gray-500 fill-gray-500 hover:text-gray-400  hover:fill-gray-400">
              <MessageOutlinedIcon />
            </div>
            <div className="noti  text-gray-500 fill-gray-500 hover:text-gray-400  hover:fill-gray-400">
              <NotificationsOutlinedIcon />
            </div>
            <div className="user">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-10 h-10",
                  },
                }}
              />
            </div></div>
            
          </div>

          <div className="mtd w-[100%]  h-[150px]  px-2 flex justify-between  items-center   ">
            <div className="l flex flex-col   ">
              <div className="btm text-xl font-bold">
                Welcome, {getFullName()}{" "}
              </div>
              <div className="btm text-base font-bold text-gray-500">
                Continue Your Learning
              </div>
            </div>

            <div className="r flex items-center gap-2">
              <MenuBookOutlinedIcon className="w-28 h-28 text-gray-500 " />

              <div className="flex flex-col gap-2 ">
                <div className="text-base text-gray-400">Course Enrolled</div>
                <div className="text-2xl  ">10</div>
              </div>
            </div>
            <div className="r flex items-center gap-2">
              <SchoolOutlinedIcon className="w-28 h-28 text-gray-500 " />

              <div className="flex flex-col gap-2 ">
                <div className="text-base text-gray-400">Score</div>
                <div className="text-2xl  ">50</div>
              </div>
            </div>
          </div>

          <div className="bel">
            <div className="row w-full px-5 pt-5 flex justify-between">
              <Card sx={{ width: 350, borderRadius: 3 }}>
                <CardContent fontFamily={"monospace"}>
                  <div className="w-[100%] flex items-center justify-around">
                    <Typography fontFamily={"monospace"} variant="h6">
                      Progress
                    </Typography>
                    <Select
                      value="This week"
                      variant="outlined"
                      sx={{ height: "25px" }}
                    >
                      <MenuItem fontFamily={"monospace"} value="This week">
                        This week
                      </MenuItem>
                      <MenuItem fontFamily={"monospace"} value="Last week">
                        Last week
                      </MenuItem>
                    </Select>
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart
                      data={data}
                      margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                      barSize={20}
                    >
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="blue" stackId="a" fill="#4285F4" />
                      <Bar
                        dataKey="orange"
                        stackId="a"
                        fill="#FBBC05"
                        radius={[10, 10, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card sx={{ width: 500, borderRadius: 3 }}>
                <CardContent>
                  <div className="w-[100%] flex items-center justify-around">
                    <Typography fontFamily={"monospace"} variant="h6">
                      Courses Enrolled
                    </Typography>

                    <Typography
                      className="text-sm text-blue-700 underline cursor-pointer"
                      variant="h6"
                    >
                      See All
                    </Typography>
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <div className="w-full h-full flex items-center justify-center gap-2">
                      <div className="c1 w-[45%] ">
                        <p>Comprehensive English</p>
                        <div className="pt-2 ">
                          <LinearProgress
                            sx={{ height: "10px", borderRadius: "10px" }}
                            variant="determinate"
                            value={50}
                          />
                        </div>
                        <div className="pt-2 text-sm text-gray-400 w-full flex justify-between items-center ">
                          <div>4/8</div>
                          <div>50%</div>
                        </div>
                      </div>
                      <div className="  border-[1px] rounded-full h-[80%]  border-gray-300"></div>
                      <div className="c2 w-[45%] ">
                        <p>Mathematics</p>
                        <div className="pt-2 ">
                          <LinearProgress
                            sx={{ height: "10px", borderRadius: "10px" }}
                            variant="determinate"
                            value={40}
                          />
                        </div>
                        <div className="pt-2 text-sm text-gray-400 w-full flex justify-between items-center ">
                          <div>4/10</div>
                          <div>40%</div>
                        </div>
                      </div>
                    </div>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="row w-full px-5 pt-5 flex justify-between">
              <CalendarCard />

              <Card sx={{ width: "50%", borderRadius: 3 }}>
                <CardContent>
                  <div className="w-[100%] flex items-center justify-around">
                    <Typography fontFamily={"monospace"} variant="h6">
                      Assignments
                    </Typography>

                    <Typography
                      className="text-sm text-blue-700 underline cursor-pointer"
                      variant="h6"
                    >
                      (3/6) Completed
                    </Typography>
                  </div>

                  <ResponsiveContainer width="100%" height={300}>
                    <div className="w-full h-full flex flex-col justify-around items-start p-2 list-none">
                      {Object.entries(checkedTasks).map(
                        ([task, isChecked], index) => (
                          <React.Fragment key={task}>
                            <div className="w-full flex justify-between items-center">
                              <li className={isChecked ? "line-through" : ""}>
                                Task {index + 1}
                              </li>
                              <Checkbox
                                checked={isChecked}
                                onChange={() => handleCheckboxChange(task)}
                                color="success"
                              />
                            </div>
                            <hr className="w-[100%] mx-auto" />
                          </React.Fragment>
                        )
                      )}
                    </div>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
