// import React from "react";
// import { Grid, Paper, Typography, Box } from "@mui/material";
// import PeopleIcon from '@mui/icons-material/People';
// import TodayIcon from '@mui/icons-material/Today';
// import BusinessIcon from '@mui/icons-material/Business';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import TrendingDownIcon from '@mui/icons-material/TrendingDown';

// const cardData = [
//   { icon: <PeopleIcon color="secondary" />, label: "Employees", value: 352, change: "+12%",icon2: <TrendingUpIcon color="success" fontSize="small" /> },
//   { icon: <TodayIcon color="secondary" />, label: "Leaves Today", value: 23, change: "+6%", icon2: <TrendingUpIcon color="error" fontSize="small" /> },
//   { icon: <BusinessIcon color="secondary" />, label: "No. of Branches", value: 63, change: "+6%" ,icon2: <TrendingUpIcon color="success" fontSize="small" /> },
//   { icon: <AccessTimeIcon color='secondary'/>, label: "Average Hours", value: "7.5 /12", change: "+12%", icon2: <TrendingDownIcon color="error" fontSize="small" /> },
// ];

// const DashboardCards = () => {
//   return (
//     <Grid container spacing={2.5} mt={1}>
//       {cardData.map((card, index) => (
//         <Grid item xs={12} sm={6} md={3} key={index}>
//           <Paper elevation={1} sx={{ p: 1.9, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//             <Box display="flex" alignItems="center" gap={1}>
//               {card.icon}
//               <Typography variant="subtitle2">{card.label}</Typography>
//             </Box>
//             <Box display="flex" alignItems="center" justifyContent={"center"} gap={2}>
//             <Typography variant="h5" fontWeight={700}>{card.value}</Typography>
//            <Box display="flex" alignItems="center" gap={1}>
//                 <Typography variant="caption">
//                   {card.icon2}
//                 </Typography>
//                 <Typography variant="caption">
//                   {card.change}
//                 </Typography>
//             </Box>
//             </Box>
//           </Paper>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default DashboardCards;

import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import TodayIcon from '@mui/icons-material/Today';
import BusinessIcon from '@mui/icons-material/Business';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const cardData = [
  { icon: <PeopleIcon color="secondary" />, label: "Employees", value: 352, change: "+12%", icon2: <TrendingUpIcon color="success" fontSize="small" /> },
  { icon: <TodayIcon color="secondary" />, label: "Leaves Today", value: 23, change: "+6%", icon2: <TrendingUpIcon color="error" fontSize="small" /> },
  { icon: <BusinessIcon color="secondary" />, label: "No. of Branches", value: 63, change: "+6%" , icon2: <TrendingUpIcon color="success" fontSize="small" /> },
  { icon: <AccessTimeIcon color="secondary"/>, label: "Average Hours", value: "7.5 /12", change: "+12%", icon2: <TrendingDownIcon color="error" fontSize="small" /> },
];

const DashboardCards = () => {
  return (
    <Grid container spacing={3} mt={1}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper
            elevation={1}
            sx={{
              p: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              {card.icon}
              <Typography variant="h6" fontWeight={500}>{card.label}</Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
              flexDirection={{ xs: "column", sm: "row" }} // Stack on small screens, row on larger
            >
              <Typography variant="h3" fontWeight={700}>
                {card.value}
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="caption">{card.icon2}</Typography>
                <Typography variant="h4" fontWeight={500}>{card.change}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardCards;
