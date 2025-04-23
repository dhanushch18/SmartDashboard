
// import React from "react";
// import { Box, Paper, Typography, Stack } from "@mui/material";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Full-Time", value: 176, color: "#FFA500" },   // Orange
//   { name: "Part-Time", value: 67, color: "#FFEB3B" },     // Yellow
//   { name: "Training", value: 108, color: "#4CAF50" }      // Green
// ];

// const EmploymentStatusChart = () => {
//   const total = data.reduce((acc, curr) => acc + curr.value, 0);

//   return (
//     <Paper elevation={1} sx={{ p: 3, borderRadius: 1,width:350,height:268}}>
//       <Typography variant="body1" fontWeight={700}  mb={2}>
//         Employment Status
//       </Typography>

//       <ResponsiveContainer width="100%" height={100}>
//         <PieChart>
//           <Pie
//             data={data}
//             startAngle={180}
//             endAngle={0}
//             innerRadius={60}
//             outerRadius={90}
//             paddingAngle={3}
//             dataKey="value"
//             cx="50%"
//             cy="100%"
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={entry.color} />
//             ))}
//           </Pie>
//         </PieChart>
//       </ResponsiveContainer>

//       {/* Total number in center */}
//       <Box textAlign="center" mt={-6}>
//         <Typography variant="body2" fontWeight={700} color="text.secondary">
//           Total
//         </Typography>
//         <Typography variant="h6" fontSize={25} >
//           {total}
//         </Typography>
//       </Box>
//        <Stack direction="row" spacing={2} justifyContent="center" mt={1}>
//         {data.map((item, i) => (
//           <Paper
//             key={i}
//             elevation={1}
//             sx={{
//               px: 1,
//               py: 0,
//               borderRadius: 1,
//               minWidth: 100,
//               textAlign: "center",
//             }}
//           >
//             <Stack
//               direction="row"
//               spacing={1}
//               alignItems="center"
//               justifyContent="center"
//               mb={0.5}
//             >
//               <Box
//                 sx={{
//                   width: 10,
//                   height: 10,
//                   borderRadius: "50%",
//                   backgroundColor: item.color,
//                 }}
//               />
//               <Typography variant="caption" fontWeight={600}>
//                 {item.name}
//               </Typography>
//             </Stack>
//             <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
//             <Typography variant="subtitle2" fontWeight={700} fontSize={18}>
//               {item.value}  
//             </Typography>
//             <Typography variant="caption" color="text.secondary" fontSize={12}>
//               {Math.round((item.value / total) * 100)}%
//             </Typography>
//             </Stack>
//           </Paper>
//         ))}
//       </Stack>
//     </Paper>
//   );
// };

// export default EmploymentStatusChart;


// import React from "react";
// import { Box, Paper, Typography, Stack } from "@mui/material";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Full-Time", value: 176, color: "#FFA500" },   // Orange
//   { name: "Part-Time", value: 67, color: "#FFEB3B" },     // Yellow
//   { name: "Training", value: 108, color: "#4CAF50" }      // Green
// ];

// const EmploymentStatusChart = () => {
//   const total = data.reduce((acc, curr) => acc + curr.value, 0);

//   return (
//     <Paper elevation={1} sx={{ p: 3, borderRadius: 1, width: { xs: "100%", sm: 350 }, height: 257 }}>
//       <Typography variant="body1" fontWeight={700} mb={2}>
//         Employment Status
//       </Typography>

//       <ResponsiveContainer width="100%" height={100}>
//         <PieChart>
//           <Pie
//             data={data}
//             startAngle={180}
//             endAngle={0}
//             innerRadius={60}
//             outerRadius={90}
//             paddingAngle={3}
//             dataKey="value"
//             cx="50%"
//             cy="100%"
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={entry.color} />
//             ))}
//           </Pie>
//         </PieChart>
//       </ResponsiveContainer>

//       {/* Total number in center */}
//       <Box textAlign="center" mt={-6}>
//         <Typography variant="body2" fontWeight={700} color="text.secondary">
//           Total
//         </Typography>
//         <Typography variant="h6" fontSize={25}>
//           {total}
//         </Typography>
//       </Box>

//       {/* Legend */}
//       <Stack
//         direction={{ xs: "column", sm: "row" }} // Stack vertically on small screens
//         spacing={2}
//         justifyContent="center"
//         mt={1}
//       >
//         {data.map((item, i) => (
//           <Paper
//             key={i}
//             elevation={1}
//             sx={{
//               px: 1,
//               py: 0,
//               borderRadius: 1,
//               minWidth: 100,
//               textAlign: "center",
//               width: { xs: "100%", sm: "auto" }, // Full width on smaller screens, auto on larger
//             }}
//           >
//             <Stack
//               direction="row"
//               spacing={1}
//               alignItems="center"
//               justifyContent="center"
              
//             >
//               <Box
//                 sx={{
//                   width: 10,
//                   height: 10,
//                   borderRadius: "50%",
//                   backgroundColor: item.color,
//                 }}
//               />
//               <Typography variant="caption" fontWeight={600}>
//                 {item.name}
//               </Typography>
//             </Stack>
//             <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
//               <Typography variant="subtitle2" fontWeight={700} fontSize={18}>
//                 {item.value}
//               </Typography>
//               <Typography variant="caption" color="text.secondary" fontSize={12}>
//                 {Math.round((item.value / total) * 100)}%
//               </Typography>
//             </Stack>
//           </Paper>
//         ))}
//       </Stack>
//     </Paper>
//   );
// };

// export default EmploymentStatusChart;

import React from "react";
import { Box, Paper, Typography, Stack } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Full-Time", value: 176, color: "#FFA500" },
  { name: "Part-Time", value: 67, color: "#FFEB3B" },
  { name: "Training", value: 108, color: "#4CAF50" }
];

const EmploymentStatusChart = () => {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <Paper
      elevation={1}
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: 1,
        width: { xs: "100%", sm: 350 },
        height: { xs: 300, sm: 257 },
      }}
    >
      <Typography
        variant="body1"
        fontWeight={700}
        mb={2}
        fontSize={{ xs: 14, sm: 16 }}
        textAlign="center"
      >
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

      <Box textAlign="center" mt={{ xs: -7, sm: -6 }}>
        <Typography
          variant="body2"
          fontWeight={700}
          color="text.secondary"
          fontSize={{ xs: 12, sm: 14 }}
        >
          Total
        </Typography>
        <Typography variant="h6" fontSize={{ xs: 22, sm: 25 }}>
          {total}
        </Typography>
      </Box>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        mt={1}
      >
        {data.map((item, i) => (
          <Paper
            key={i}
            elevation={1}
            sx={{
              px: 1,
              py: 0.5,
              borderRadius: 1,
              minWidth: 100,
              textAlign: "center",
              width: { xs: "100%", sm: "auto" },
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
              <Typography variant="caption" fontWeight={600} fontSize={{ xs: 11, sm: 12 }}>
                {item.name}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
              <Typography
                variant="subtitle2"
                fontWeight={700}
                fontSize={{ xs: 16, sm: 18 }}
              >
                {item.value}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                fontSize={{ xs: 11, sm: 12 }}
              >
                {Math.round((item.value / total) * 100)}%
              </Typography>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Paper>
  );
};

export default EmploymentStatusChart;
