import {
    Box,
    Button,
    Container,
    Paper,
    Stack,
    TextField,
    Typography,
    CircularProgress
  } from "@mui/material";
  import React, { useState } from "react";
  import SignInFooter from "./SignInFooter";
  import SignInHeader from "./SignInHeader";
  import * as Yup from "yup";
  import { Formik, Form, Field } from 'formik'; 
  import man from '../../assets/layer-1.png';
  import bulb from '../../assets/group-1984.png';
  import group2 from '../../assets/group-1985.png';
  import { useNavigate } from "react-router-dom";
  
  const SignInSchema = Yup.object().shape({
    userName: Yup.string().required("User Name is required"),
    orgId: Yup.string().required("Organisation ID is required")
  });
  
  const SignIn = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        navigate("/signIn-password");
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <Box sx={{ bgcolor: "#fff9ef", minHeight: "100vh", width: "100%" }}>
        <Container maxWidth="lg" sx={{ position: "relative", height: "100vh" }}>
          {/* Header */}          
          <SignInHeader />
  
          {/* Decorative image */}
          <Box
            component="img"
            src={bulb}
            alt="Decorative"
            sx={{
              position: "absolute",
              width: 120,
              height: 173,
              top: 0,
              left: "50%",
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
              <Formik
                initialValues={{ userName: "", orgId: "" }}
                validationSchema={SignInSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, handleChange, handleBlur, values }) => (
                  <Form>
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
                            <Field
                              as={TextField}
                              fullWidth
                              name="userName"
                              placeholder="Enter User Name"
                              variant="outlined"
                              size="small"
                              value={values.userName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.userName && Boolean(errors.userName)}
                              helperText={touched.userName && errors.userName}
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
                            <Field
                              as={TextField}
                              fullWidth
                              name="orgId"
                              placeholder="Enter ID"
                              variant="outlined"
                              size="small"
                              value={values.orgId}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.orgId && Boolean(errors.orgId)}
                              helperText={touched.orgId && errors.orgId}
                              InputProps={{
                                sx: {
                                  borderRadius: 2,
                                  py: 0.5,
                                  fontFamily: "Poppins, Helvetica",
                                },
                              }}
                            />
                          </Stack>
                        </Stack>
  
                        <Button
                          fullWidth
                          type="submit"
                          variant="contained"
                          disabled={loading}
                          sx={{
                            bgcolor: "#281808",
                            color: "white",
                            borderRadius: "1000px",
                            py: 1.5,
                            textTransform: "none",
                            "&:hover": { bgcolor: "#3a2410" },
                          }}
                        >
                          {loading ? (
                            <CircularProgress size={20} sx={{ color: "white" }} />
                          ) : (
                            <Typography
                              variant="body2"
                              fontWeight={600}
                              fontFamily="Poppins, Helvetica"
                            >
                              Sign in
                            </Typography>
                          )}
                        </Button>
                      </Stack>
                    </Stack>
                  </Form>
                )}
              </Formik>
            </Paper>
  
            {/* Right illustration */}
            <Box
              component="img"
              src={group2}
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
  
          <SignInFooter />
        </Container>
      </Box>
    );
  };
  
  export default SignIn;