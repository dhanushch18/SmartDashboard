import React, { useContext } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PaymentIcon from "@mui/icons-material/Payment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { ColorModeContext } from "../../context/ThemeContext";

import hrLogo from "../../assets/hrLogo.png";
import bankLogo from "../../assets/bankLogo.png";

const drawerWidth = 240;

const Sidebar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: theme.palette.mode === "light" ? "#ffeccf" : "#1e1e1e",
          color: theme.palette.text.primary,
        },
      }}
    >
      <Toolbar />

      <Box component="img" src={hrLogo} width="113px" sx={{ mt: -3, ml: 2, mb: 2 }} />

      <List>
        <ListItem button sx={{ bgcolor: theme.palette.background.paper, my: 0.5, borderRadius: 1 }}>
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

      <Box sx={{ flexGrow: 1 }} />

      {/* Theme Toggle Button */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}>
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Box>

      {/* Footer */}
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Box component="img" src={bankLogo} width={71} height={40} mb={1} />
        <Typography fontWeight={500}>Silicon IT Solutions</Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
