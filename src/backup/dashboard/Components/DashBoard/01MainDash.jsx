// MainDashBoard.jsx
import React from "react";
import { Box, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import theme from "../../theme"; // Adjust the path if needed
import Header from "./Header";
import DashboardCards from "./DashboardCards";
import AttendanceChart from "./AttendanceChart";
import BranchAdmins from "./BranchAdmins";
import EmploymentStatusChart from "./EmployeeStatusChart";
import Approvals from "./Approvals";
import FavAction from "./FavAction";
import Sidebar from "./Sidebar";
import UpcomingAction from "./UpcomingAction";

const MainDashBoard = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        {/* Sidebar can be included here if needed */}
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Header />
          <DashboardCards />
          <UpcomingAction />
          <FavAction />
          <Grid container spacing={2} mt={1}>
            <Box display="flex" alignItems="center" gap={1}>
            {/* <Grid item xs={4} md={4} lg={4}> */}
              <AttendanceChart />
            {/* </Grid> */}
            {/* <Grid item xs={4} md={4} lg={4}> */}
              <BranchAdmins />
            {/* </Grid> */}
            {/* <Grid item xs={4} md={4} lg={4}> */}
              <EmploymentStatusChart />
            {/* </Grid> */}
            </Box>
          </Grid>
          <Approvals />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
//     <ThemeProvider theme={theme}>
//   <CssBaseline />
//   <Box sx={{ display: "flex" }}>
//     <Sidebar />

//     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//       <Header />

//       {/* DashboardCards + UpcomingActions + EmploymentStatusChart */}
//       <Box display="flex" gap={2} flexWrap="wrap">
//         <Box flexGrow={1}>
//           <DashboardCards />
//         </Box>

//         <Box width={340}>
//           <UpcomingAction />
//           <Box mt={2}>
//             <EmploymentStatusChart />
//           </Box>
//         </Box>
//       </Box>

//       {/* FavAction, BranchAdmins, AttendanceChart */}
//       <Box mt={2}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <FavAction />
//             <Box mt={2}>
//               <AttendanceChart />
//             </Box>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <BranchAdmins />
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Approvals at the bottom */}
//       <Box mt={2}>
//         <Approvals />
//       </Box>
//     </Box>
//   </Box>
// </ThemeProvider>

export default MainDashBoard;
