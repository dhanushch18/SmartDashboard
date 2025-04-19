import {
    Box,
    Container,
    Link,
    Stack,
    Typography,
  } from "@mui/material";
  import React from "react";
  
  const SignInFooter = () => {
    return (
    //   <Container>
    <>
        {/* Footer */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            bottom: 3,
            width: "calc(100% - 48px)",
          }}
        >
          <Stack direction="row" spacing={2.5}>
            <Link
              underline="hover"
              color="#282828"
              sx={{
                fontSize: 12,
                fontFamily: "Poppins, Helvetica",
                cursor: "pointer",
              }}
            >
              Terms & Conditions
            </Link>
            <Link
              underline="hover"
              color="#282828"
              sx={{
                fontSize: 12,
                fontFamily: "Poppins, Helvetica",
                cursor: "pointer",
              }}
            >
              Privacy Policy
            </Link>
          </Stack>
          <Typography
            variant="caption"
            color="#282828"
            fontFamily="Poppins, Helvetica"
          >
            Copyright © 2025, Silicon IT Solutions. All rights reserved.
          </Typography>
        </Box>
      {/* </Container> */}
      </>
    );
  };
  
  export default SignInFooter;
  