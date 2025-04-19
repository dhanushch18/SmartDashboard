import React from 'react';
import {Box,Typography} from "@mui/material";

const OverviewBox = () => {
    return (
        <Box display ="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" fontWeight={600} ml={2} >Quick Overview</Typography>
            <Typography>Last log In : Apr 19, 2025 | 12:45 PM</Typography>
        </Box>
    )
};
export default  OverviewBox;
