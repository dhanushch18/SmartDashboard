
import React from "react";
import { Box, Paper, Typography, Stack } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Full-Time", value: 176, color: "#FFA500" },   // Orange
  { name: "Part-Time", value: 67, color: "#FFEB3B" },     // Yellow
  { name: "Training", value: 108, color: "#4CAF50" }      // Green
];

const EmploymentStatusChart = () => {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <Paper elevation={0} sx={{ p: 3, borderRadius: 1,width:350,hieght:260}}>
      <Typography variant="body1" fontWeight={700}  mb={1}>
        Employment Status
      </Typography>

      <ResponsiveContainer width="100%" height={100}>
        <PieChart>
          <Pie
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
            dataKey="value"
            cx="50%"
            cy="100%"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Total number in center */}
      <Box textAlign="center" mt={-6}>
        <Typography variant="body2" fontWeight={700} color="text.secondary">
          Total
        </Typography>
        <Typography variant="h6" fontSize={25} >
          {total}
        </Typography>
      </Box>
       <Stack direction="row" spacing={2} justifyContent="center" mt={1}>
        {data.map((item, i) => (
          <Paper
            key={i}
            elevation={0}
            sx={{
              px: 1,
              py: 0,
              borderRadius: 2,
              minWidth: 100,
              textAlign: "center",
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
              mb={0.5}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: item.color,
                }}
              />
              <Typography variant="caption" fontWeight={600}>
                {item.name}
              </Typography>
            </Stack>
            <Typography variant="subtitle2" fontWeight={700}>
              {item.value}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {Math.round((item.value / total) * 100)}%
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Paper>
  );
};

export default EmploymentStatusChart;
