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
import { useLocation, useNavigate } from "react-router-dom";
import { ColorModeContext } from "../../context/ThemeContext";
//import hrLogo from "../../assets/hrLogo.png";
import SmartHrLogo from "../../assets/DashBoard/smartHr.png"
import bankLogo from "../../assets/bankLogo.png";

const drawerWidth = 240;

const Sidebar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard", icon: <DashboardIcon />, path: "/menu/dashboard" },
    { label: "Employees", icon: <PeopleIcon />, path: "/menu/employees" },
    { label: "Payroll", icon: <PaymentIcon />, path: "/menu/payroll" },
    { label: "Reports", icon: <AssessmentIcon />, path: "/menu/reports" },
    { label: "Setup", icon: <SettingsIcon />, path: "/menu/setup" },
  ];

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

      <Box display="flex" alignItems="center" sx={{mt:-5, ml:3,mb:2}}>
      <Box component="img" src={SmartHrLogo} width="26px" sx={{ mt: -0.5, mr: 1 }}
    alt="SmartHR Logo" />
      <Typography variant="h6" fontWeight={600}>SmartHR</Typography>
      </Box>
      <List>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <ListItem
              key={item.label}
              button
              onClick={() => navigate(item.path)}
              sx={{
                backgroundColor: isActive
                  ? theme.palette.mode === "light"
                    ? "#ffffff"
                    : "#2a2a2a"
                  : "transparent",
                borderRadius: 1,
                mx: 1,
                my: 0.5,
                "&:hover": {
                  backgroundColor: theme.palette.mode === "light" ? "#f5f5f5" : "#333",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: isActive ? theme.palette.secondary.main : "inherit",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  color: isActive ? theme.palette.main : "inherit",
                }}
              />
            </ListItem>
          );
        })}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}>
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Box>

      <Box sx={{ p: 3, textAlign: "center" }}>
        <Box component="img" src={bankLogo} width={71} height={40} mb={1} />
        <Typography fontWeight={500}>Silicon IT Solutions</Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
