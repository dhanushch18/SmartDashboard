// // // MainDashBoard.jsx
// // import React,{useContext} from "react";
// // import { Box, CssBaseline, Grid, ThemeProvider } from "@mui/material";
// // import theme,{darkTheme} from "../../theme"; 
// // import { ColorModeContext } from "../../context/ThemeContext";
// // //import Header from "./Header";
// // import DashboardCards from "./DashboardCards";
// // import AttendanceChart from "./AttendanceChart";
// // import BranchAdmins from "./BranchAdmins";
// // import EmploymentStatusChart from "./EmployeeStatusChart";
// // import Approvals from "./Approvals";
// // import FavAction from "./FavAction";
// // //import Sidebar from "./Sidebar";
// // import UpcomingAction from "./UpcomingAction";
// // import OverviewBox from "./OverviewBox";


// // const MainDashBoard = () => {
// //   const { mode } = useContext(ColorModeContext);

// //   const selectedTheme = mode === "dark" ? darkTheme : theme;

// //   return (
// // <ThemeProvider theme={selectedTheme}>
// //   <CssBaseline />
// //   <Box sx={{ display: "flex" }}>
// //     {/* <Sidebar /> */}

// //     <Box component="main" sx={{ flexGrow: 1 }}>
// //       {/* <Header /> */}
// //       <OverviewBox />

// //       {/* Two-column layout */}
// //       <Box display="flex" gap={3} flexWrap="wrap">
// //         {/* Left Column */}
// //         <Box flex={1} minWidth={600}>
// //           <DashboardCards />

// //           {/* FavAction and BranchAdmins to be side by side */}
// //           <Box display="flex" gap={1} mt={1} flexWrap="wrap">
// //             <Box flex={1}>
// //               <FavAction />
// //               <Box mt={2}>
// //                 <AttendanceChart />
// //               </Box>
// //             </Box>
// //             <Box width={280} mr={7} >
// //               <BranchAdmins />
// //             </Box>
// //           </Box>
// //         </Box>

// //         {/* Right Column */}
// //         <Box width={360}>
// //           <UpcomingAction />
// //           <Box mt={2}>
// //             <EmploymentStatusChart />
// //           </Box>
// //         </Box>
// //       </Box>

// //       {/* At Bottom */}
// //       <Box mt={3}>
// //         <Approvals />
// //       </Box>
// //     </Box>
// //   </Box>
// // </ThemeProvider>


// //   );
// // };

// // export default MainDashBoard;


// import React, { useContext } from "react";
// import { Box, CssBaseline, ThemeProvider } from "@mui/material";
// import theme, { darkTheme } from "../../theme";
// import { ColorModeContext } from "../../context/ThemeContext";
// import DashboardCards from "./DashboardCards";
// import AttendanceChart from "./AttendanceChart";
// import BranchAdmins from "./BranchAdmins";
// import EmploymentStatusChart from "./EmployeeStatusChart";
// import Approvals from "./Approvals";
// import FavAction from "./FavAction";
// import UpcomingAction from "./UpcomingAction";
// import OverviewBox from "./OverviewBox";

// const MainDashBoard = () => {
//   const { mode } = useContext(ColorModeContext);
//   const selectedTheme = mode === "dark" ? darkTheme : theme;

//   return (
//     <ThemeProvider theme={selectedTheme}>
//       <CssBaseline />
//       <Box sx={{ display: "flex", width: '100%' }}>
//         <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
//           <OverviewBox />

//           {/* Responsive Layout Wrapper */}
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", md: "row" },
//               flexWrap: "wrap",
//               gap: 3,
//             }}
//           >
//             {/* Left Column */}
//             <Box sx={{ flex: 1, minWidth: { xs: "100%", md: 600 } }}>
//               <DashboardCards />

//               {/* FavAction and BranchAdmins Side by Side */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: { xs: "column", sm: "row" },
//                   gap: 2,
//                   mt: 1,
//                   flexWrap: "wrap",
//                 }}
//               >
//                 <Box sx={{ flex: 1 }}>
//                   <FavAction />
//                   <Box mt={2}>
//                     <AttendanceChart />
//                   </Box>
//                 </Box>

//                 <Box
//                   sx={{
//                     width: { xs: "100%", sm: 300, md: 347 },
//                     mt: { xs: 2, sm: 0 },
//                   }}
//                 >
//                   <BranchAdmins />
//                 </Box>
//               </Box>
//             </Box>

//             {/* Right Column */}
//             <Box
//               sx={{
//                 width: { xs: "100%", md: 360 },
//                 mt: { xs: 2, md: 0 },
//               }}
//             >
//               <UpcomingAction />
//               <Box mt={2}>
//                 <EmploymentStatusChart />
//               </Box>
//             </Box>
//           </Box>

//           {/* Bottom Section */}
//           <Box mt={3}>
//             <Approvals />
//           </Box>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default MainDashBoard;


import React, { useContext } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme, { darkTheme } from "../../theme";
import { ColorModeContext } from "../../context/ThemeContext";
import DashboardCards from "./DashboardCards";
import AttendanceChart from "./AttendanceChart";
import BranchAdmins from "./BranchAdmins";
import EmploymentStatusChart from "./EmployeeStatusChart";
import Approvals from "./Approvals";
import FavAction from "./FavAction";
import UpcomingAction from "./UpcomingAction";
import OverviewBox from "./OverviewBox";

const MainDashBoard = () => {
  const { mode } = useContext(ColorModeContext);
  const selectedTheme = mode === "dark" ? darkTheme : theme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex", width: '100%' }}>
        <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
          <OverviewBox />

          {/* Responsive Layout Wrapper */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            {/* Left Column */}
            <Box sx={{ flex: 1, minWidth: { xs: "100%", md: 600 } }}>
              <DashboardCards />

              {/* FavAction and BranchAdmins Side by Side using Grid */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "2fr 1fr",
                  },
                  gap: 2,
                  mt: 1,
                }}
              >
                <Box>
                  <FavAction />
                  <Box mt={2}>
                    <AttendanceChart />
                  </Box>
                </Box>

                <Box>
                  <BranchAdmins />
                </Box>
              </Box>
            </Box>

            {/* Right Column */}
            <Box
              sx={{
                width: { xs: "100%", md: 360 },
                mt: { xs: 2, md: 0 },
              }}
            >
              <UpcomingAction />
              <Box mt={2}>
                <EmploymentStatusChart />
              </Box>
            </Box>
          </Box>

          {/* Bottom Section */}
          <Box mt={3}>
            <Approvals />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainDashBoard;
