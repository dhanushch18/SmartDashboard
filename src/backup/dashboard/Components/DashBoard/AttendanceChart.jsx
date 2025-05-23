import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Paper, Typography, Box } from "@mui/material";

const data = [
  { month: "Jan", attendance: 200 },
  { month: "Feb", attendance: 260 },
  { month: "Mar", attendance: 120 },
  { month: "Apr", attendance: 190 },
  { month: "May", attendance: 249 },
  { month: "Jun", attendance: 270 },
  { month: "Jul", attendance: 240 },
  { month: "Aug", attendance: 180 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: 2,
          padding: "8px 12px",
        }}
      >
        <Typography variant="subtitle2" fontWeight={600}>
          📅 {label}
        </Typography>
        <Typography variant="body2">
          <strong>{payload[0].value}</strong>/354
        </Typography>
      </Box>
    );
  }

  return null;
};

const AttendanceChart = () => {
  return (
    <Paper elevation={0} sx={{ p: 2, mt: 2 ,width:339,height:241}}>
      <Typography variant="h6" fontWeight={600}>
        Overall Attendance
      </Typography>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barSize={15}>
          <XAxis dataKey="month" />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="attendance"
            radius={[10, 10, 0, 0]}
            fill="url(#colorUv)"
            activeBar={{ fill: "#007bff" }}
          >
            <LabelList dataKey="attendance" position="top" fill="#333" />
          </Bar>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff8c00" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8c00" stopOpacity={0.3} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default AttendanceChart;