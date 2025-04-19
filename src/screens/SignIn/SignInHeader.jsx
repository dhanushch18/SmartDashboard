import {
    Box,
    Link,
    Button,
    Typography,
  } from "@mui/material";
  import hrLogo from '../../assets/hrLogo.png'
  import React from "react";
  
  const SignInHeader = () => {
    return (
    //   <Container>
    <>
         {/* Header */}
         <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pt: 5,
            }}
          >
            <Box
              component="img"
             // src="https://c.animaapp.com/m9jiexp82Ittzg/img/frame-427319296.png"
             src={hrLogo}
              alt="SmartHR Logo"
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#fdb814",
                color: "#281808",
                borderRadius: "1000px",
                textTransform: "none",
                px: 2.25,
                py: 1,
                "&:hover": { bgcolor: "#e9a912" },
              }}
            >
              <Typography variant="caption" fontWeight={600}>
                Contact Us
              </Typography>
            </Button>
          </Box>
      {/* </Container> */}
      </>
    );
  };
  
  export default SignInHeader;
  