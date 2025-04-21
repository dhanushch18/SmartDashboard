import {
    Box,
    Button,
    Container,
    Link,
    Paper,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import React from "react";
  import SignInHeader from "./SignInHeader"
  import  man from '../../assets/man.png';
  import bulb from '../../assets/bulb.png';
//  import group2 from '../../assets/group-1985.png';
  import bankLogo from "../../assets/bankLogo.png";
  import MainDashBoard from "../../Components/DashBoard/MainDashBoard";
  import { useNavigate } from "react-router-dom";
  
   const SignInPassword = () => {
     const navigate = useNavigate();
    // const [loading, setLoading] = useState(false);
       
         const handleSubmit = async () => {
        //   setLoading(true);
           try {
             await new Promise(resolve => setTimeout(resolve, 1500));
             navigate("/menu/dashboard");
           } finally {
           //  setLoading(false);
           }
         };
    return (
      <Box sx={{ bgcolor: "#fff9ef", minHeight: "100vh", width: "100%" }}>
        <Container maxWidth="lg" sx={{ position: "relative", height: "130vh" }}>
          {/* Header */}

           <SignInHeader />
  
          {/* Decorative image */}
          <Box
            component="img"
            //src="https://c.animaapp.com/m9jiexp82Ittzg/img/group-1984.png"
            src={bulb}
            alt="Decorative"
            sx={{
              position: "absolute",
              width: 120,
              height: 173,
              top: 0,
              left: "60%",
              transform: "translateX(-50px)",
            }}
          />
  
          {/* Main content */}
          <Box
            sx={{
              display: "flex",
              position: "relative",
              mt: 10,
            }}
          >

            {/* Left illustration */}
            <Box
              component="img"
              //src="https://c.animaapp.com/m9jiexp82Ittzg/img/layer-1.png"
               src={man}
              alt="Illustration"
              sx={{
                width: 366,
                height: 381,
                position: "relative",
                zIndex: 1000,
              }}
            />
  
            {/* Sign in form */}
            <Paper
              elevation={2}
              sx={{
                width: 400,
                p: 3.75,
                borderRadius: 2,
                ml: -3,
                mt: 3,
                position: "relative",
                zIndex: 2,
                bgcolor: "#ffffff",
              }}
            >
                 <Box 
            component="img"
            //src="https://c.animaapp.com/m9jiexp82Ittzg/img/group-1984.png"
            src={bankLogo}
            alt="Decorative"
            sx={{
              position: "relative",
              width: 99,
              height: 56,
              left: "50%",
              transform: "translateX(-50px)",
            }}
          />
              <Stack spacing={2.5} alignItems="center">
                <Stack spacing={0.5} alignItems="center" width="100%">
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    fontFamily="Poppins, Helvetica"
                    color="#282828"
                    textAlign="center"
                  >
                    Sign In to SmartHR
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontFamily="Poppins, Helvetica"
                    textAlign="center"
                  >
                    Your Bank's Most Reliable HR Partner
                  </Typography>
                </Stack>
  
                <Stack spacing={2.5} width="100%">
                  <Stack spacing={1.75} width="100%">
                    <Stack spacing={0.75}>
                      <Typography
                        variant="body2"
                        fontWeight="medium"
                        fontFamily="Poppins, Helvetica"
                        color="#282828"
                      >
                        User Name
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Enter User Name"
                        variant="outlined"
                        size="small"
                        InputProps={{
                          sx: {
                            borderRadius: 2,
                            py: 0.5,
                            fontFamily: "Poppins, Helvetica",
                          },
                        }}
                      />
                    </Stack>
  
                    <Stack spacing={0.75}>
                      <Typography
                        variant="body2"
                        fontWeight="medium"
                        fontFamily="Poppins, Helvetica"
                        color="#282828"
                      >
                        Organisation ID
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Enter ID"
                        variant="outlined"
                        size="small"
                        InputProps={{
                          sx: {
                            borderRadius: 2,
                            py: 0.5,
                            fontFamily: "Poppins, Helvetica",
                          },
                        }}
                      />
                    </Stack>

                    <Stack spacing={0.75}>
                      <Typography
                        variant="body2"
                        fontWeight="medium"
                        fontFamily="Poppins, Helvetica"
                        color="#282828"
                      >
                        Password
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Enter Password"
                        variant="outlined"
                        size="small"
                        InputProps={{
                          sx: {
                            borderRadius: 2,
                            py: 0.5,
                            fontFamily: "Poppins, Helvetica",
                          },
                        }}
                      />
                    </Stack>

                    <Stack spacing={0.75}>
                      <Typography
                        variant="body2"
                        fontWeight="medium"
                        fontFamily="Poppins, Helvetica"
                        color="#282828"
                      >
                        Forgot Password?
                      </Typography>
                    </Stack>

                  </Stack>
  
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                      bgcolor: "#281808",
                      color: "white",
                      borderRadius: "1000px",
                      py: 1.5,
                      textTransform: "none",
                      "&:hover": { bgcolor: "#3a2410" },
                    }}
                  >
                    <Typography
                      variant="body2"
                      fontWeight={600}
                      fontFamily="Poppins, Helvetica"
                    >
                      Sign in
                    </Typography>
                  </Button>
                </Stack>
              </Stack>
            </Paper>
  
            {/* Right illustration */}
            <Box
              component="img"
              src="https://c.animaapp.com/m9jiexp82Ittzg/img/group-1985.png"
              alt="Illustration"
              sx={{
                width: 275,
                height: 384,
                position: "relative",
                ml: 5,
                mt: 3,
              }}
            />
          </Box>
  
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
        </Container>
      </Box>
    );
  };
  
  export default SignInPassword