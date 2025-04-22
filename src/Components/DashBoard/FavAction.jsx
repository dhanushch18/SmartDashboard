import React from "react";
import { Paper, Typography,Grid,Box } from "@mui/material";
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const FavAction = () => {
  return (
   <Grid item xs={12} sm={6} md={4}> 
   <Paper elevation={1} sx={{ p: 2, mt: 2, width:339,height:99 }}>
     <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
      <Typography variant="h6" fontWeight={600}>Favourite Action </Typography>
      <Box display="flex" alignItems="center" gap={1}>
          <EditDocumentIcon color="primary" fontSize="small" />
      <Typography variant="body2" color="primary" fontWeight={550}>Edit</Typography>
      </Box>
      </Box>
      <Box display="flex"  justifyContent="space-between"  alignItems="center" gap={1}>
      <Box display="flex"  alignItems="center" gap={1}>
      <AccountBoxSharpIcon  color="warning" fontSize="medium"/>
      <Typography variant="body2" fontWeight={550}>Add New Employee</Typography>
      </Box>
      <ArrowForwardIosIcon  fontSize="small"/>
      </Box>
    </Paper>
    </Grid>
  );
};

export default FavAction;
