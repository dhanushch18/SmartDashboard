// // Menu.jsx
// import React,{useContext,useEffect} from "react";
// import Sidebar from "../Components/HomeScreen/Sidebar";
// import Header from "../Components/HomeScreen/Header";
// import { Outlet } from "react-router-dom";
// import { Box,ThemeProvider,CssBaseline } from "@mui/material";
// import theme,{darkTheme} from "../theme"; 
// import { ColorModeContext } from "../context/ThemeContext";

// const Menu = () => {

//     const { mode } = useContext(ColorModeContext);

//     const selectedTheme = mode === "dark" ? darkTheme : theme;

//     useEffect(() => {
//       window.scrollTo(0, 0); // to scroll top section at beginning 
//     }, []);

//   return (
//     <ThemeProvider theme={selectedTheme}>
//       <CssBaseline />
//     <Box display="flex">
//       <Sidebar />
//       <Box component="main" sx={{ flexGrow: 1 }}>
//         <Header />
//         <Box sx={{ p: 2 }}>
//           <Outlet />
//         </Box>
//       </Box>
//     </Box>
//     </ThemeProvider>
//   );
// };

// export default Menu;


import React, { useContext, useEffect } from "react";
import Sidebar from "../Components/HomeScreen/Sidebar";
import Header from "../Components/HomeScreen/Header";
import { Outlet } from "react-router-dom";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import theme, { darkTheme } from "../theme";
import { ColorModeContext } from "../context/ThemeContext";

const Menu = () => {
  const { mode } = useContext(ColorModeContext);
  const selectedTheme = mode === "dark" ? darkTheme : theme;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // column on mobile, row on desktop
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "250px" }, // full width on mobile, fixed on desktop
            flexShrink: 0,
          }}
        >
          <Sidebar />
        </Box>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            overflow: "auto",
          }}
        >
          <Header />
          <Box
            sx={{
              p: { xs: 1, sm: 2, md: 3 }, // responsive padding
              flexGrow: 1,
              overflowY: "auto",
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Menu;
