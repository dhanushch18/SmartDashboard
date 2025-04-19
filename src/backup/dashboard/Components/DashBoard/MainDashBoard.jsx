// MainDashBoard.jsx
import React from "react";
import { Box, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import theme from "../../theme"; 
import Header from "./Header";
import DashboardCards from "./DashboardCards";
import AttendanceChart from "./AttendanceChart";
import BranchAdmins from "./BranchAdmins";
import EmploymentStatusChart from "./EmployeeStatusChart";
import Approvals from "./Approvals";
import FavAction from "./FavAction";
import Sidebar from "./Sidebar";
import UpcomingAction from "./UpcomingAction";
import OverviewBox from "./OverviewBox";

const MainDashBoard = () => {
  return (
<ThemeProvider theme={theme}>
  <CssBaseline />
  <Box sx={{ display: "flex" }}>
    <Sidebar />

    <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
      <Header />
      <OverviewBox />

      {/* Two-column layout */}
      <Box display="flex" gap={2} flexWrap="wrap">
        {/* Left Column */}
        <Box flex={1} minWidth={600}>
          <DashboardCards />

          {/* FavAction and BranchAdmins to be side by side */}
          <Box display="flex" gap={1} mt={1} flexWrap="wrap">
            <Box flex={1}>
              <FavAction />
              <Box mt={2}>
                <AttendanceChart />
              </Box>
            </Box>
            <Box width={350} >
              <BranchAdmins />
            </Box>
          </Box>
        </Box>

        {/* Right Column */}
        <Box width={360}>
          <UpcomingAction />
          <Box mt={2}>
            <EmploymentStatusChart />
          </Box>
        </Box>
      </Box>

      {/* At Bottom */}
      <Box mt={3}>
        <Approvals />
      </Box>
    </Box>
  </Box>
</ThemeProvider>


  );
};

export default MainDashBoard;
