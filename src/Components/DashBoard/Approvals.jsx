import React from "react";
import { Paper, Typography, Grid, Avatar, Button, Box } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material/styles';

const approvals = [
  {
    name: "Natali Craig",
    transfer: "KANNUR, South Branch to Payyanur Branch",
    by: "Erin Rhiel Madsen",
    id: "#645586"
  },
  {
    name: "Talan Ekstrom Bothman",
    transfer: "KANNUR, South Branch to Payyanur Branch",
    by: "Desirae Ekstrom",
    id: "#645586"
  },
  {
    name: "Alfonso Donin",
    transfer: "KANNUR, South Branch to Payyanur Branch",
    by: "Marley Culhane",
    id: "#645586"
  }
];

const Approvals = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Grid container spacing={1} mt={3}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="space-between" alignItems="center" gap={105}>
          <Typography variant="subtitle1" fontWeight={650}>
            General Approvals
          </Typography>

          <Box display="flex" alignItems="center" gap={0.5} sx={{ cursor: "pointer" }}>
            <Typography
              variant="body2"
              color="primary"
              sx={{ fontWeight: 500 }}
            >
              View All
            </Typography>
            <ArrowForwardIosIcon color="primary" fontSize="small" />
          </Box>
        </Box>
      </Grid>
      <Grid container spacing={1}>
        {approvals.map((app, i) => (
          <Grid item xs={12} md={6} lg={4} key={i}>
            <Paper elevation={1} sx={{ p: 2, width: 350, height: 220 }} >
              <Box display="flex" alignItems="center" gap={2}>
                <Avatar />
                <Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="subtitle1" fontWeight={600}>{app.name}</Typography>
                    <Box
                      sx={{
                        backgroundColor: '#e0e0e0', px: 1.2, py: 0.2,
                        borderRadius: '6px',fontSize: '12px',
                        fontWeight: 500,
                        color: '#333',
                      }}
                    >
                      {app.id}
                    </Box>
                  </Box>
                  <Typography variant="caption">Senior Manager | Kannur, South</Typography>
                </Box>
              </Box>
              <Typography mt={1}>Employee transfer from {app.transfer}</Typography>
              <Typography variant="body2" mt={1}><b>Initiated By</b> {app.by}</Typography>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Button variant="contained" sx={{ textTransform: 'none',backgroundColor: isDark ? "#303030" : '#ECFFED', // inherit
          color: '#2FAA35'}}>Approve</Button>
                <Button variant="contained"  sx={{ textTransform: 'none',backgroundColor: isDark ? "#303030" : '#FFE9E9',
          color: '#E84D4D'}}>Remark</Button>
              </Box>
            </Paper>    
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Approvals;