// import React from 'react';
// import {Box,Typography} from "@mui/material";

// const OverviewBox = () => {
//     return (
//         <Box display ="flex" justifyContent="space-between" alignItems="center">
//             <Typography variant="h6" fontWeight={600} ml={1} >Quick Overview</Typography>
//             <Typography>Last log In : Apr 19, 2025 | 12:45 PM</Typography>
//         </Box>
//     )
// };
// export default  OverviewBox;


import React from 'react';
import { Box, Typography } from "@mui/material";

const OverviewBox = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }} // Stacks vertically on small screens, horizontally on larger screens
      justifyContent="space-between"
      alignItems="center"
      sx={{ p: 2 }}
    >
      <Typography variant="h6" fontWeight={600} ml={1}>
        Quick Overview
      </Typography>
      <Typography variant="body2" sx={{ mt: { xs: 1, sm: 0 } }}>
        Last log In : Apr 19, 2025 | 12:45 PM
      </Typography>
    </Box>
  );
};

export default OverviewBox;
