import React from "react";
import { Paper, Typography,Grid,Box,Divider } from "@mui/material";
import Payroll from '../../assets/DashBoard/Payroll.png'
import Month from '../../assets/DashBoard/Month.png'
import Employee from '../../assets/DashBoard/BranchEmployee.png'
import arrow from '../../assets/DashBoard/Arrow.png'

const UpcomingAction = () => {
  return (
   <Grid item xs={12} sm={6} md={4}> 
 
 <Paper  elevation={1} sx={{width: '350px',
    padding: '12px 16px', mt: 2,
  }}
 >
     <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
      <Typography variant="h6" fontWeight={600}>Upcoming Actions </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" gap={1} marginBottom={2} >
      <Box display="flex" alignItems="center" gap={1}>
     <Box  component="img" src={Payroll} alt="payroll" />
      <Typography variant="body1" fontWeight={550}>Payroll Processing Deadline</Typography>
      </Box>
      <Box  component="img" src={arrow} alt="arrow" />
      </Box>
      <Divider sx={{ mb: 2 }} />
      <Box display="flex" justifyContent="space-between" alignItems="center" gap={1} mb={2} >
      <Box display="flex" alignItems="center" gap={1}>
     <Box  component="img" src={Month} alt="month" />
      <Typography variant="body1" fontWeight={550}>Monthly Attendance Report</Typography>
      </Box>
      <Box  component="img" src={arrow} alt="arrow" />
      </Box>
      <Divider sx={{ mb: 2 }} />
      <Box display="flex" justifyContent="space-between" alignItems="center" gap={1} >
      <Box display="flex" alignItems="center" gap={1}>
     <Box  component="img" src={Employee} alt="Employee" />
      <Typography variant="body1" fontWeight={550}>Update Branch Employment Lists</Typography>
      </Box>
      <Box  component="img" src={arrow} alt="arrow" />
      </Box>
    </Paper>
    </Grid>
  );
};

export default UpcomingAction;
