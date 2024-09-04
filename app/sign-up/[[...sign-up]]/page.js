import { SignUp } from "@clerk/nextjs";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import Footer from "../../components/Footer.js";
import Navbar from "@/app/components/Navbar.js";

export default function SignUpPage() {
  return (
    <Container
      maxWidth="xl"
      className="relative p-0 bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"
    >
      <Navbar />
       
        
     

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
          // height: "80vh",
           paddingBottom:'20px'
        }}
      >
        <Typography textAlign='center' fontFamily='monospace' variant="h4" gutterBottom>
          Please Sign In To Continue To Dashboard
        </Typography>
        <SignUp fallbackRedirectUrl="/Dashboard" signInForceRedirectUrl="/Dashboard" signInFallbackRedirectUrl="/Dashboard"
          routing="path" path="/sign-up" />
      </Box>
      <Footer/>
    </Container>
  );
}