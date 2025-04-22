// Menu.jsx
import React,{useContext,useEffect} from "react";
import Sidebar from "../Components/HomeScreen/Sidebar";
import Header from "../Components/HomeScreen/Header";
import { Outlet } from "react-router-dom";
import { Box,ThemeProvider,CssBaseline } from "@mui/material";
import theme,{darkTheme} from "../theme"; 
import { ColorModeContext } from "../context/ThemeContext";

const Menu = () => {

    const { mode } = useContext(ColorModeContext);

    const selectedTheme = mode === "dark" ? darkTheme : theme;

    useEffect(() => {
      window.scrollTo(0, 0); // to scroll top section at beginning 
    }, []);

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
    <Box display="flex">
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Header />
        <Box sx={{ p: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
    </ThemeProvider>
  );
};

export default Menu;
