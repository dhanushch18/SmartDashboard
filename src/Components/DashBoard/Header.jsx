import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography, Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h6" fontWeight={600}>Dashboard</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <CalendarTodayIcon />
          <Typography variant="body2">Apr 12, 2025 | 12:45 PM</Typography>
          <IconButton>
            <MailIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Avatar alt="User" src="https://i.pravatar.cc/300" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;