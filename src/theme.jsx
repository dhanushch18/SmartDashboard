// theme.jsx
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#F9A825", // Orange
    },
    error: {
      main: "#FF7F7F", // Red
    },
    success: {
      main: "#4CAF50", // Green
    },
    background: {
      default: "#f4f6f8", // Light gray background
      paper: "#ffffff",   // Card background
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h6: {
      fontWeight: 600,
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
      default: "#303030", // Dark background
      paper: "#424242",   // Dark paper
    },
  },
});


export default theme;
