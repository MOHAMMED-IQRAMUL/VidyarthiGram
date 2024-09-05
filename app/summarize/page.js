// src/pages/Summarizer.js
"use client";
import React, { useEffect, useRef, useState } from "react";
import LeftSideBar from "../components/LeftSideBar";
import RightNavBar from "../components/RightNavBar";
import Footer from "../components/Footer";
import {
  Box,
  CircularProgress,
  IconButton,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import SendIcon from "@mui/icons-material/Send";

const Summarizer = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello, I am Vidyagram Summarizer. How can I help you today?",
    },
  ]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (message.trim() === "") return; 
    setLoading(true);
    setMessage("");
    setMessages((messages) => [
      ...messages,
      { role: "user", content: message },
      { role: "assistant", content: "" },
    ]);

    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([...messages, { role: "user", content: message }]),
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let result = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const text = decoder.decode(value, { stream: true });
        result += text;

        setMessages((messages) => {
          const updatedMessages = [...messages];
          const lastMessage = updatedMessages[updatedMessages.length - 1];
          lastMessage.content += text;
          return updatedMessages;
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessages((messages) => [
        ...messages,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !loading) {
      sendMessage();
    }
  };

  const scrollToBottom = () => {
    // messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="w-full font-mono">
      <div className="hero w-[90%] h-[100vh] mx-auto flex">
        <LeftSideBar />
        <div className="right ml-2 w-[80%] min-h-screen">
          <RightNavBar />
          <div className="sec w-full h-[90%] p-2">
            <Paper
            
              elevation={3}
              sx={{
                flexGrow: 1,
                p: 2,
                overflowY: "auto",
                borderRadius: "8px",
                bgcolor: "#ffffff",
                height: "90%",
                maxHeight: "90%",
                overflowY: "scroll",
              }}
            >
              <Stack direction="column" spacing={2}>
                {messages.map((message, index) => (
                  <Box
                    key={index}
                    display="flex"
                    justifyContent={
                      message.role === "assistant" ? "flex-start" : "flex-end"
                    }
                  >
                    <Box
                      sx={{
                        maxWidth: "70%",
                        p: 2,
                        borderRadius: "12px",
                        bgcolor:
                          message.role === "assistant" ? "#f1f1f1" : "#3f51b5",
                        color: message.role === "assistant" ? "black" : "white",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </Box>
                  </Box>
                ))}
                <div ref={messagesEndRef} />
              </Stack>
            </Paper>
            {/* Message Input */}
            <Stack direction="row" spacing={2} mt={2}>
              <TextField
                label="Type a message"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                sx={{ bgcolor: "white", borderRadius: "8px" }}
              />
              <IconButton
                color="primary"
                onClick={sendMessage}
                disabled={loading}
                sx={{
                  bgcolor: loading ? "grey" : "#3f51b5",
                  color: "white",
                  borderRadius: "50%",
                  px: 2,
                  "&:hover": {
                    bgcolor: loading ? "grey" : "#303f9f",
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                  <SendIcon />
                )}
              </IconButton>
            </Stack>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Summarizer;
