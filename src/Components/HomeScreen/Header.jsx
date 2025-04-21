import React, { useState } from "react";
import {
  AppBar, Box, IconButton, Toolbar, Typography, Avatar, Menu, MenuItem, Dialog,
  DialogActions, DialogContent, DialogContentText, DialogTitle, Button
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    setAnchorEl(null);
    setOpenDialog(true);
  };

  const confirmLogout = () => {
    setOpenDialog(false);
    navigate("/"); 
  };

  const cancelLogout = () => {
    setOpenDialog(false);
  };

  const PageTitles = (pathname) => {
    if (pathname.includes("/dashboard")) return "Dashboard";
    if (pathname.includes("/employees")) return "Employees";
    return "Welcome";
  };

  const title = PageTitles(location.pathname);

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight={600}>{title}</Typography>

          <Box display="flex" alignItems="center" gap={1}>
            <CalendarTodayIcon />
            <Typography variant="body2">Apr 12, 2025 | 12:45 PM</Typography>
            <SearchIcon />
            <IconButton color="inherit">
              <MailIcon />
            </IconButton >
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <Avatar alt="User" src="https://i.pravatar.cc/300" />
            <IconButton onClick={handleMenuOpen} color="inherit">
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Dropdown Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>

      {/* Confirm Logout Dialog */}
      <Dialog open={openDialog} onClose={cancelLogout}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to logout?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelLogout} color="primary">No</Button>
          <Button onClick={confirmLogout} color="error">Yes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Header;
