// import React from "react";
// import { Paper, Typography,Grid,Box,Divider } from "@mui/material";
// import Payroll from '../../assets/DashBoard/Payroll.png'
// import Month from '../../assets/DashBoard/Month.png'
// import Employee from '../../assets/DashBoard/BranchEmployee.png'
// import arrow from '../../assets/DashBoard/Arrow.png'

// const UpcomingAction = () => {
//   return (
//    <Grid item xs={12} sm={6} md={4}> 
 
//  <Paper  elevation={1} sx={{width: '350px',
//     padding: '12px 16px', mt: 2,
//   }}
//  >
//      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
//       <Typography variant="h6" fontWeight={600}>Upcoming Actions </Typography>
//       </Box>
//       <Box display="flex" justifyContent="space-between" alignItems="center" gap={1} marginBottom={2} >
//       <Box display="flex" alignItems="center" gap={1}>
//      <Box  component="img" src={Payroll} alt="payroll" />
//       <Typography variant="body1" fontWeight={550}>Payroll Processing Deadline</Typography>
//       </Box>
//       <Box  component="img" src={arrow} alt="arrow" />
//       </Box>
//       <Divider sx={{ mb: 2 }} />
//       <Box display="flex" justifyContent="space-between" alignItems="center" gap={1} mb={2} >
//       <Box display="flex" alignItems="center" gap={1}>
//      <Box  component="img" src={Month} alt="month" />
//       <Typography variant="body1" fontWeight={550}>Monthly Attendance Report</Typography>
//       </Box>
//       <Box  component="img" src={arrow} alt="arrow" />
//       </Box>
//       <Divider sx={{ mb: 2 }} />
//       <Box display="flex" justifyContent="space-between" alignItems="center" gap={1} >
//       <Box display="flex" alignItems="center" gap={1}>
//      <Box  component="img" src={Employee} alt="Employee" />
//       <Typography variant="body1" fontWeight={550}>Update Branch Employment Lists</Typography>
//       </Box>
//       <Box  component="img" src={arrow} alt="arrow" />
//       </Box>
//     </Paper>
//     </Grid>
//   );
// };

// export default UpcomingAction;


import React from "react";
import { Paper, Typography, Grid, Box, Divider } from "@mui/material";
import Payroll from '../../assets/DashBoard/Payroll.png';
import Month from '../../assets/DashBoard/Month.png';
import Employee from '../../assets/DashBoard/BranchEmployee.png';
import arrow from '../../assets/DashBoard/Arrow.png';

const UpcomingAction = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        elevation={1}
        sx={{
          width: '100%', // Make the paper responsive
          padding: '12px 16px',
          mt: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={2}
        >
          <Typography variant="h6" fontWeight={600}>
            Upcoming Actions
          </Typography>
        </Box>

        {/* Payroll Processing Deadline */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
          marginBottom={2}
          flexDirection={{ xs: "column", sm: "row" }} // Stack on small screens
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Box component="img" src={Payroll} alt="payroll" sx={{ width: 30, height: 30 }} />
            <Typography variant="h4">
              Payroll Processing Deadline
            </Typography>
          </Box>
          <Box component="img" src={arrow} alt="arrow" sx={{ width: 20, height: 20 }} />
        </Box>
        <Divider sx={{ mb: 2 }} />

        {/* Monthly Attendance Report */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
          mb={2}
          flexDirection={{ xs: "column", sm: "row" }} // Stack on small screens
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Box component="img" src={Month} alt="month" sx={{ width: 30, height: 30 }} />
            <Typography variant="h4">
              Monthly Attendance Report
            </Typography>
          </Box>
          <Box component="img" src={arrow} alt="arrow" sx={{ width: 20, height: 20 }} />
        </Box>
        <Divider sx={{ mb: 2 }} />

        {/* Update Branch Employment Lists */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
          flexDirection={{ xs: "column", sm: "row" }} // Stack on small screens
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Box component="img" src={Employee} alt="Employee" sx={{ width: 30, height: 30 }} />
            <Typography variant="h4">
              Update Branch Employment Lists
            </Typography>
          </Box>
          <Box component="img" src={arrow} alt="arrow" sx={{ width: 20, height: 20 }} />
        </Box>
      </Paper>
    </Grid>
  );
};

export default UpcomingAction;
