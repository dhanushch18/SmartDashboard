import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import TodayIcon from '@mui/icons-material/Today';
import BusinessIcon from '@mui/icons-material/Business';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RedDownArrow from '../../assets/DashBoard/RedDownArrow.png';
import RedUpArrow from '../../assets/DashBoard/RedUpArrrow.png';
import GreenUpArrow from '../../assets/DashBoard/GreenUpArrow.png';

const cardData = [
  { icon: <PeopleIcon color="primary" />, label: "Employees", value: 352, change: "+12%" },
  { icon: <TodayIcon color="secondary" />, label: "Leaves Today", value: 23, change: "+6%" },
  { icon: <BusinessIcon sx={{ color: '#ff9800' }} />, label: "No. of Branches", value: 63, change: "+6%" },
  { icon: <AccessTimeIcon sx={{ color: '#9c27b0' }} />, label: "Average Hours", value: "7.5 /12", change: "+12%" },
];

const DashboardCards = () => {
  return (
    <Grid container spacing={3} mt={1}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper elevation={0} sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Box display="flex" alignItems="center" gap={1}>
              {card.icon}
              <Typography variant="subtitle2">{card.label}</Typography>
            </Box>
            <Typography variant="h5" fontWeight={700}>{card.value}</Typography>
            <Typography variant="caption" color="green">{card.change}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardCards;