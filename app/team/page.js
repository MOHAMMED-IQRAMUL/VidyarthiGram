// src/pages/OurTeam.js
"use client";
import React from "react";
import { Container, Typography, Grid, Card, CardContent, Avatar, Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Navbar from "../components/Navbar";

const teamMembers = [
  {
    name: "Mohammed Iqramul",
    role: "Full Stack Web Developer",
    image: "Iqramul.png",
    linkedin: "https://www.linkedin.com/in/mohammed-iqramul/",
    github: "https://github.com/MOHAMMED-IQRAMUL",
    skills: ["React", "JavaScript", "CSS"],
  },
  {
    name: "Satyam Kumar",
    role: "Frontend Developer",
    image: "Satyam.png.jpg",
    linkedin: "https://www.linkedin.com/in/satyam-thakur-a610b4249",
    github: "https://github.com/shams24x7",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    name: "Shams Tabrej Alam",
    role: "Software Tester",
    image: "Shams.png",
    linkedin: "https://www.linkedin.com/in/shams24x7",
    github: "https://github.com/shams24x7",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    name: "Shivam Kumar",
    role: "Frontend Developer",
    image: "Shivam.png",
    linkedin: "https://www.linkedin.com/in/shivamkumar2687/",
    github: "https://github.com/shams24x7",
    skills: ["Node.js", "Express", "MongoDB"],
  },
];

const OurTeam = () => {
  return (
    <section className="w-screen min-h-screen bg-orange-200">
      <Navbar />

      <Typography
        variant="h4"
        textAlign="center"
        marginY={4}
        fontWeight="bold"
        fontFamily="monospace"
        color="orange"
      >
        Meet Our Team
      </Typography>

      <Container>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="bg-white shadow-lg rounded-xl">
                <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mb-4"
                  />
                  <Typography variant="h6" fontWeight="bold">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {member.role}
                  </Typography>
                  <Box display="flex" justifyContent="center" marginY={2}>
                    <IconButton
                      component="a"
                      href={member.linkedin}
                      target="_blank"
                      color="primary"
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      component="a"
                      href={member.github}
                      target="_blank"
                      color="primary"
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Box>
                  <Typography variant="body2" fontWeight="bold" color="textPrimary">
                    Skills:
                  </Typography>
                  <Box className="flex flex-wrap justify-center mt-1">
                    {member.skills.map((skill, skillIndex) => (
                      <Typography
                        key={skillIndex}
                        variant="body2"
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg m-1"
                      >
                        {skill}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default OurTeam;
