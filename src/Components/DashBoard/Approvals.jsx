import React from "react";
import { Paper, Typography, Grid, Avatar, Button, Box } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material/styles';
import man1 from "../../assets/DashBoard/man1.png"
import man2 from "../../assets/DashBoard/man2.png"
import woman from "../../assets/DashBoard/women.png"
import manSmall1 from "../../assets/DashBoard/ManS1.png"
import manSmall2 from "../../assets/DashBoard/ManS2.png"
import womanSmall1 from "../../assets/DashBoard/womanS1.png"

const approvals = [
  {
    name: "Natali Craig",
    transfer: "KANNUR, South Branch to Payyanur Branch",
    by: "Erin Rhiel Madsen",
    id: "#645586",
    Avatar:woman,
    smallAvatar:womanSmall1
  },
  {
    name: "Talan Ekstrom Bothman",
    transfer: "KANNUR, South Branch to Payyanur Branch",
    by: "Desirae Ekstrom",
    id: "#645586",
    Avatar:man1,
    smallAvatar:manSmall1
    },
  {
    name: "Alfonso Donin",
    transfer: "KANNUR, South Branch to Payyanur Branch",
    by: "Marley Culhane",
    id: "#645586",
    Avatar:man2,
    smallAvatar:manSmall2
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
            <Paper elevation={1} sx={{ p: 2, width: 350, height: 225 }} >
              <Box display="flex" alignItems="center" gap={2}>
                <Avatar src={app.Avatar} />
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
              {/* <Typography variant="body2" mt={1}><b>Initiated By</b>  <Avatar src={app.smallAvatar} /> {app.by}</Typography>
               */}
            <Box display="flex" alignItems="center" gap={1} mt={1}>
              <Typography variant="body2" fontWeight={500}>Initiated By</Typography>
              <Box display="flex" alignItems="center" ml={10} gap={1}>
    <Avatar src={app.smallAvatar} sx={{ width: 24, height: 24 }} />
    <Typography variant="body2">{app.by}</Typography>
  </Box>
  </Box>
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