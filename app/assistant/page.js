// src/pages/Assistant.js
"use client";
import React, { useState } from "react";
import { Container, Box, TextField, IconButton, Typography, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Navbar from "../components/Navbar";

const Assistant = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is a bot response", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <section className="w-screen h-screen bg-gray-100">
      <Navbar />

      <Container maxWidth="sm" className="h-[80%] flex flex-col justify-between py-4">
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          fontFamily="monospace"
          color="purple"
          marginBottom={2}
        >
          VidyarthiGram AI Assistant
        </Typography>

        <Paper
          className="flex-1 overflow-y-auto bg-white p-4 shadow-md"
          style={{ maxHeight: "70vh" }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              } mb-2`}
            >
              <Typography
                variant="body1"
                className={`p-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {message.text}
              </Typography>
            </Box>
          ))}
        </Paper>

        <Box className="flex mt-4">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />
          <IconButton
            color="primary"
            className="ml-2"
            onClick={handleSend}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Container>
    </section>
  );
};

export default Assistant;
