// src/pages/AboutUs.js
"use client";
import React from "react";
import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <section className="w-screen h-screen bg-orange-200 ">
      <Navbar />

      <Typography
        variant="h4"
        textAlign="center"
        marginY={1}
        fontWeight="bold"
        fontFamily="monospace"
        color="orange"
      >
        About VidyarthiGram
      </Typography>

      <Card className="w-[80%] h-[80%] bg-white mx-auto">
        <CardContent>
          <Typography color="orange" variant="h4" component="h2" gutterBottom>
            What is VidyarthiGram
          </Typography>

          <Typography variant="body1" color="text.secondary" marginY={2}>
            VidyarthiGram is a platform designed to connect students with their
            potential mentors. It provides a space for students to share their
            expertise, interests, and goals with mentors, and for mentors to
            provide guidance and support to their students.
          </Typography>
          <Typography color="orange" variant="h4" component="h2" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" color="text.secondary" marginY={2}>
            Our mission is to create a supportive and collaborative environment
            where students can gain valuable experience and mentorship from
            experienced professionals in their fields. We believe that by
            providing a platform for this, students can achieve their academic
            goals and find the right mentor or mentorship program that suits
            their needs and aspirations.
          </Typography>
          <Typography color="orange" variant="h4" component="h2" gutterBottom>
            What We Do
          </Typography>
          <Typography variant="body1" color="text.secondary" marginY={2}>
            Our platform offers a range of tools and resources designed to
            support educators and students in rural communities. From digital
            classrooms to online resources, we aim to make education more
            accessible and engaging for everyone.
          </Typography>
          <Typography color="orange" variant="h4" component="h2" gutterBottom>
            Our Team
          </Typography>
          <Typography variant="body1" color="text.secondary" marginY={2}>
            
            
            Our dedicated team of professionals is committed to making a positive impact on education. With expertise in technology, education, and community development, we work tirelessly to bring our vision to life.
            
          </Typography>
          <Box className="text-center mt-8 border-t pt-4">
        <Typography variant="body2" color="textSecondary">
          &copy; 2024 VidyarthiGram. All rights reserved.
        </Typography>
      </Box>
        </CardContent>
      </Card>
    </section>
  );
};

export default AboutUs;
