// import AppRouter from "./screens/AppRouter/AppRouter";
// //import SignIn from "./screens/SignIn/SignIn";

// function App (){
//   return(
//     <AppRouter/>
//   )
// }

// export default App


// // App.js
// import React from "react";
// import { Box, CssBaseline, Grid, ThemeProvider } from "@mui/material";
// import theme from "./theme";
// import Sidebar from "./Components/DashBoard/Sidebar";
// import Header from "./Components/DashBoard/Header";
// import DashboardCards from "./Components/DashBoard/DashboardCards";
// import AttendanceChart from "./Components/DashBoard/AttendanceChart";
// import BranchAdmins from "./Components/DashBoard/BranchAdmins";
// import EmploymentStatusChart from "./Components/DashBoard/EmployeeStatusChart";
// import Approvals from "./Components/DashBoard/Approvals";

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box sx={{ display: "flex" }}>
//         <Sidebar />
//         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//           <Header />
//           <DashboardCards />
//           <Grid container spacing={2} mt={1}>
//             <Grid item xs={12} md={6} lg={8}>
//               <AttendanceChart />
//               <BranchAdmins />
//             </Grid>
//             <Grid item xs={12} md={6} lg={4}>
//               <EmploymentStatusChart />
//             </Grid>
//           </Grid>
//           <Approvals />
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }

// export default App;

// App.js
// import React from "react";
// import MainDashBoard from "./Components/DashBoard/MainDashBoard";

// function App() {
//   return (
//     <>
//       <MainDashBoard />
//     </>
//   );
// }

// export default App;

import AppRouter from "./screens/AppRouter/AppRouter";
//import SignIn from "./screens/SignIn/SignIn";

function App (){
  return(
    <AppRouter/>
  )
}

export default App