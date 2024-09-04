"use client";
import { SignIn } from "@clerk/nextjs";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Footer from "../../components/Footer.js";
import Navbar from "../../components/Navbar.js";

export default function SignInPage() {
  const router = useRouter();

  return (
    <Container
      maxWidth="xl"
      className="relative p-0 bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"
    >
      <Navbar />
        
<div className="h-[20px]"></div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Typography
          textAlign="center"
          fontFamily="monospace"
          variant="h4"
          gutterBottom
          paddingBottom={3}
        >
          Please Sign In To Continue To Dashboard
        </Typography>
        <SignIn fallbackRedirectUrl="/Dashboard" signUpForceRedirectUrl="/Dashboard" signUpFallbackRedirectUrl="/Dashboard" forceRedirectUrl="/Dashboard"  />
      </Box>
      <Footer />
    </Container>
  );
}
