// import React from "react";
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar,Box,Typography} from "@mui/material";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PeopleIcon from "@mui/icons-material/People";
// import PaymentIcon from "@mui/icons-material/Payment";
// import AssessmentIcon from "@mui/icons-material/Assessment";
// import SettingsIcon from "@mui/icons-material/Settings";
// import hrLogo from '../../assets/frame-427319296.png'

// const drawerWidth = 240;

// const Sidebar = () => {
//   const items = [
//     { text: "Dashboard", icon: <DashboardIcon /> },
//     { text: "Employees", icon: <PeopleIcon /> },
//     { text: "Payroll", icon: <PaymentIcon /> },
//     { text: "Reports", icon: <AssessmentIcon /> },
//     { text: "Setup", icon: <SettingsIcon /> }
//   ];

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box", background: "#fff7ea" }
//       }}
//     >
//       <Toolbar />
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "left",
//           flexDirection: "column",
//           py: 2,
//           marginTop:-2,
//           marginLeft:3
//         }}
//       >
//         <img src={hrLogo} alt="HR Logo" style={{ width: 158, height: 60 }} />
//       </Box>

//       <List>
//         {items.map((item, index) => (
//           <ListItem button key={index}>
//             <ListItemIcon>{item.icon}</ListItemIcon>
//             <ListItemText primary={item.text} />
//           </ListItem>
//         ))}
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;

import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PaymentIcon from "@mui/icons-material/Payment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import hrLogo from '../../assets/hrLogo.png'
import bankLogo from '../../assets/bankLogo.png'


const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#ffeccf",//#fff7ea",
        },
      }}
    >
      <Toolbar />

      <Box component='img' src={hrLogo} width='113px' sx={{ mt: -3, ml: 2, marginBottom: 2 }} />

      <List>
        <ListItem button sx={{ bgcolor: "white", my: 0.5, borderRadius: 1 }}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Employees" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Payroll" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Setup" />
        </ListItem>
      </List>

      <Box sx={{ flex: 1 }} />
      <Box sx={{ p: 4 }}>
        <Box component='img' src={bankLogo} width={71} height={40} ml={1} mb={1} />
        <Typography fontWeight={500} ml={1}>Silicon IT Solutions</Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
