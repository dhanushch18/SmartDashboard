// import React from "react";
// import { Paper, Typography, List, ListItem, ListItemText, Avatar, Box,Divider } from "@mui/material";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';

// const admins = [
//   "Charlie Aminoff", "Jaydon Korsgaard", "Brandon Mango", "Wilson Carder", "Marley Passaquindici"
// ];

// const BranchAdmins = () => {
//   return (
//     <Paper elevation={1} sx={{ p: 2, mt: 2,height:407,width:347,overflowY: 'auto'  }}>
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//       <Typography variant="h6" fontWeight={600}>Branch Level Admins</Typography>
//       <Typography color="primary">View All</Typography>
//       <ArrowForwardIosIcon color="primary" fontSize="small"/>
//       </Box>
//       <List>
//         {admins.map((admin, i) => (
//           <React.Fragment key={i}>
//           <ListItem>
//             <Avatar sx={{ mr: 1,ml:-2 }} />
//             <ListItemText primary={admin} secondary="Asis. Manager | Kannur, South" />
//             <MailOutlineIcon color="primary"/>
//           </ListItem>
//             <Divider />
//             </React.Fragment>
//         ))}
//       </List>
//     </Paper>
//   );
// };

// export default BranchAdmins;

import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Box,
  Divider,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const admins = [
  "Charlie Aminoff",
  "Jaydon Korsgaard",
  "Brandon Mango",
  "Wilson Carder",
  "Marley Passaquindici",
];

const BranchAdmins = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        mt: 2,
        height: { xs: 'auto', md: 407 },
        width: { xs: '100%', sm: 300, md: 347 },
        overflowY: { xs: 'visible', md: 'auto' },
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Typography variant="h6" fontWeight={600}>
          Branch Level Admins
        </Typography>
        <Box display="flex" alignItems="center" gap={0.5}>
          <Typography color="primary">View All</Typography>
          <ArrowForwardIosIcon color="primary" fontSize="small" />
        </Box>
      </Box>
      <List>
        {admins.map((admin, i) => (
          <React.Fragment key={i}>
            <ListItem>
              <Avatar sx={{ mr: 1, ml: -1 }} />
              <ListItemText
                primary={admin}
                secondary="Asis. Manager | Kannur, South"
              />
              <MailOutlineIcon color="primary" />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default BranchAdmins;
