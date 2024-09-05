// src/pages/FAQs.js
"use client";
import React, { useState } from "react";
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Card, CardContent } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "../components/Navbar";

const FAQs = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="w-screen h-screen bg-orange-200">
      <Navbar />

      <Typography
        variant="h4"
        textAlign="center"
        marginY={2}
        fontWeight="bold"
        fontFamily="monospace"
        color="orange"
      >
        Frequently Asked Questions
      </Typography>

      <Card className="w-[80%] h-[70%] bg-white mx-auto ">
        
        <CardContent className="flex flex-col gap-2  ">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography color="orange" variant="h6">
                What is VidyarthiGram?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                VidyarthiGram is a platform designed to connect students with their potential mentors, providing a space for guidance, support, and collaboration in educational pursuits.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography color="orange" variant="h6">
                How do I find a mentor?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                You can find a mentor by signing up on VidyarthiGram and browsing through our mentor profiles, filtering by expertise, experience, and availability to find the best match for your needs.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography color="orange" variant="h6">
                Is VidyarthiGram free to use?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                Yes, VidyarthiGram is free for students. We are committed to making education and mentorship accessible to everyone, regardless of their financial situation.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <Typography color="orange" variant="h6">
                How do I become a mentor on VidyarthiGram?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                To become a mentor, sign up on VidyarthiGram and complete the mentor application process, including providing details about your expertise, experience, and availability. Once approved, you can start mentoring students.
              </Typography>
            </AccordionDetails>
          </Accordion>


        </CardContent>
      </Card>
    </section>
  );
};

export default FAQs;
