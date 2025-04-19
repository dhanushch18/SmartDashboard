import React from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('User Name is required'),
  organisationId: Yup.string().required('Organisation ID is required'),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      organisationId: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form Submitted', values);
      
    },
  });

  return (
    <Box
      sx={{
        backgroundColor: '#fdf5ec',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Sign In to SmartHR
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary" mb={3}>
              Your Bank's Most Reliable HR Partner
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="username"
                name="username"
                label="User Name"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
                margin="normal"
              />

              <TextField
                fullWidth
                id="organisationId"
                name="organisationId"
                label="Organisation ID"
                value={formik.values.organisationId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.organisationId && Boolean(formik.errors.organisationId)}
                helperText={formik.touched.organisationId && formik.errors.organisationId}
                margin="normal"
              />

              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                sx={{ mt: 2, backgroundColor: '#3d2c21', '&:hover': { backgroundColor: '#2c1f16' } }}
              >
                Sign in
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;
