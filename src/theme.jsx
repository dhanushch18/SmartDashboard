// theme.jsx
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2D85E6", // Blue 1976d2
    },
    secondary: {
      main: "#FDB814", // Orange F9A825
    },
    error: {
      main: "#E84D4D", // Red FF7F7F
    },
    success: {
      main: "#2FAA35", // Green 4CAF50
    },
    background: {
      default: "#fffff1", //now white ,Light gray background f4f6f8
      paper: "#ffffff",   // Card background
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Helvetica', 'Arial', sans-serif",
    h6: {
      fontWeight: 600,
      fontSize: "14px",
    },
    h1 : {
      fontWeight: 600,
      fontSize: "16px",
    },
    h2 : {
      fontWeight: 600,
      fontSize: "18px",
    },
    h3 : {
      fontWeight: 600,
      fontSize: "24px",
    },
    h4 : {
      fontWeight: 600,
      fontSize: "12px",
    },
    subtitle2: {
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark", // Set dark theme
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#F9A825",//"#f50057", // orange
    },
    background: {
      default: "#000000", // Dark background (#000000)
      paper: "#000000",   // Dark paper , if light dark (#424242)
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Helvetica', 'Arial', sans-serif",
    h6: {
      fontWeight: 600,
      fontSize: "14px",
    },
    h1 : {
      fontWeight: 600,
      fontSize: "16px",
    },
    h2 : {
      fontWeight: 600,
      fontSize: "18px",
    },
    h3 : {
      fontWeight: 600,
      fontSize: "24px",
    },
    h4 : {
      fontWeight: 600,
      fontSize: "12px",
    },
    subtitle2: {
      fontWeight: 500,
    },
    subtitle1:{
      fontWeight: 400,
    }
  },
});


export default theme;
