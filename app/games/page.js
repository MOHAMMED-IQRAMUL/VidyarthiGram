// src/pages/EducationalGames.js
"use client";
import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Navbar from "../components/Navbar";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";
import RightNavBar from "../components/RightNavBar";

const games = [
  {
    title: "Create Quiz",
    description:
      "Test your knowledge by creating custom quizzes on various subjects.",
    buttonLabel: "Start Quiz",
    image: "path_to_image/quiz.jpg", // Add image path
    link: "/create-quiz", // Replace with actual link
  },
  {
    title: "Create Flashcards",
    description: "Make learning easier by creating and reviewing flashcards.",
    buttonLabel: "Create Flashcards",
    image: "path_to_image/flashcards.jpg", // Add image path
    link: "/create-flashcards", // Replace with actual link
  },
  {
    title: "Create MCQs",
    description:
      "Enhance your learning by creating and solving multiple-choice questions.",
    buttonLabel: "Create MCQs",
    image: "path_to_image/mcqs.jpg", // Add image path
    link: "/create-mcqs", // Replace with actual link
  },
];

const EducationalGames = () => {
  return (
    <>
      <div className="w-full font-mono">
        <div className="hero w-[90%] mx-auto flex">
          <LeftSideBar />
          <div className="right ml-2 w-[80%] min-h-screen">
            <RightNavBar />

            <section className="w-screen min-h-screen  ">
           

              <Typography
                variant="h4"
                textAlign="center"
                marginY={4}
                fontWeight="bold"
                fontFamily="monospace"
                color="indigo"
              >
                Educational Games for Fast Learning
              </Typography>

              <Container>
                <Grid container spacing={4}>
                  {games.map((game, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card className="bg-white shadow-lg">
                        <CardContent>
                          <Box
                            component="img"
                            src={game.image}
                            alt={game.title}
                            className="w-full h-48 object-cover mb-4 rounded-lg"
                          />
                          <Typography variant="h6" fontWeight="bold">
                            {game.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            marginY={2}
                          >
                            {game.description}
                          </Typography>
                          <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            href={game.link}
                            className="mt-4"
                          >
                            {game.buttonLabel}
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default EducationalGames;
