import React from "react";
import { Paper, Typography, Grid, Avatar, Button, Box } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const approvals = [
  {
    name: "Natali Craig",
    transfer: "KANNUR, South Branch to Payyanur Branch",
    by: "Erin Rhiel Madsen"
  },
  {
    name: "Talan Ekstrom Bothman",
    transfer: "KANNUR, South Branch to Payyanur Branch",
    by: "Desirae Ekstrom"
  },
  {
    name: "Alfonso Donin",
    transfer: "KANNUR, South Branch to Payyanur Branch",
    by: "Marley Culhane"
  }
];

const Approvals = () => {
  return (
    <Grid container spacing={1} mt={3}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" fontWeight={650}>
            General Approvals
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            sx={{ cursor: "pointer", fontWeight: 500 }}
          >
            View All
          </Typography>
          <ArrowForwardIosIcon color="primary" fontSize="small"/>
          
        </Box>
      </Grid>
      <Grid container spacing={1}>
      {approvals.map((app, i) => (
        <Grid item xs={12} md={6} lg={4} key={i}>
          <Paper elevation={1} sx={{ p: 2,width:350,height:220 }} >
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar />
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>{app.name}</Typography>
                <Typography variant="caption">Senior Manager | Kannur, South</Typography>
              </Box>
            </Box>
            <Typography mt={1}>Employee transfer from {app.transfer}</Typography>
            <Typography variant="body2" mt={1}><b>Initiated By</b> {app.by}</Typography>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button variant="contained" color="success">Approve</Button>
              <Button variant="outlined" color="error">Remark</Button>
            </Box>
          </Paper>
        </Grid>
      ))}
      </Grid>
    </Grid>
  );
};

export default Approvals;