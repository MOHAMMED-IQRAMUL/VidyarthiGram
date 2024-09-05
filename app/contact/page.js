// src/pages/ContactUs.js
"use client";
import React from "react";
import { Container, Typography, Box, TextField, Button, Grid, Card, CardContent } from "@mui/material";
import Navbar from "../components/Navbar";

const ContactUs = () => {
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
        Contact Us
      </Typography>

      <Card className="w-[80%] h-[70%] bg-white mx-auto">
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" color="orange" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="body1" color="text.secondary" marginY={2}>
                If you have any questions, suggestions, or need assistance, feel free to reach out to us. We are here to help and ensure you have the best experience possible with VidyarthiGram.
              </Typography>
              <form noValidate autoComplete="off">
                <Box marginBottom={2}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    color="primary"
                  />
                </Box>
                <Box marginBottom={2}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    variant="outlined"
                    color="primary"
                  />
                </Box>
                <Box marginBottom={2}>
                  <TextField
                    fullWidth
                    label="Your Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    color="primary"
                  />
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  className="bg-orange-500 text-white"
                >
                  Send Message
                </Button>
              </form>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" color="orange" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body1" color="text.secondary" marginY={2}>
                You can also reach us via the following channels:
              </Typography>
              <Box marginY={2}>
                <Typography variant="body1" color="text.secondary">
                  <strong>Email:</strong> support@vidyarthigram.com
                </Typography>
              </Box>
              <Box marginY={2}>
                <Typography variant="body1" color="text.secondary">
                  <strong>Phone:</strong> +91 1234 567 890
                </Typography>
              </Box>
              <Box marginY={2}>
                <Typography variant="body1" color="text.secondary">
                  <strong>Address:</strong> 123 VidyarthiGram Lane, Education City, India
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactUs;
