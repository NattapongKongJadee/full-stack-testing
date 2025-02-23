import { Box, Paper, Typography, Button, LinearProgress } from "@mui/material";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { useEffect } from "react";
import $ from "jquery"; // Import jQuery
import RateBadge from "../rate-badge/RateBadge";

const UsersByCountry = () => {
  const usersData = [
    {
      country: "United States",
      users: "3.72K",
      percentage: 30,
      growth: "+12.5%",
      color: "#B33771",
      coords: [37.0902, -95.7129],
    },
    {
      country: "United Kingdom",
      users: "2.48K",
      percentage: 20,
      growth: "+8.1%",
      color: "#808080",
      coords: [55.3781, -3.436],
    },
    {
      country: "Canada",
      users: "2.48K",
      percentage: 20,
      growth: "+6.3%",
      color: "#A29BFE",
      coords: [56.1304, -106.3468],
    },
    {
      country: "Australia",
      users: "1.86K",
      percentage: 15,
      growth: "+9.2%",
      color: "#00CEC9",
      coords: [-25.2744, 133.7751],
    },
    {
      country: "Spain",
      users: "1.86K",
      percentage: 15,
      growth: "+5.7%",
      color: "#D6EAF8",
      coords: [40.4637, -3.7492],
    },
  ];

  useEffect(() => {
    $(document).on("mouseover", ".jvectormap-marker", function () {
      const index = $(this).attr("data-index");
      if (index !== undefined) {
        const data = usersData[parseInt(index, 10)];
        $(".jvectormap-tip").html(`
          <div style="background:#212C4D; padding:8px; border-radius:6px; color:white; text-align:left;">
            <strong>${data.country}</strong><br/>
            Users: ${data.users}<br/>
            Growth: ${data.growth}
          </div>
        `);
      }
    });
  }, []);

  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: "#101935",
        border: "0.5px solid",
        borderColor: "gray",
      }}
    >
      <Typography variant="h6" color="white">
        Users by Country
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1.5fr" }}
        gap={3}
        mt={2}
      >
        {/* Left Side: Country List with Progress Bars */}
        <Box>
          <Box display="flex" alignItems="center" justifyContent="start">
            <Typography
              variant="h6"
              fontWeight={600}
              letterSpacing={1}
              color="white"
              marginRight="10px"
            >
              $12.4K
            </Typography>
            <RateBadge rate="26.6%" isUp={true}></RateBadge>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#212F3C",
                color: "white",
                marginLeft: "auto",
                textTransform: "none",
              }}
            >
              Export ↓
            </Button>
          </Box>

          {usersData.map((user, index) => (
            <Box key={index} mt={2}>
              <Typography color="white" fontWeight={300} mb={0.5}>
                {user.country}
              </Typography>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box width="50%">
                  <LinearProgress
                    variant="determinate"
                    value={user.percentage}
                    sx={{
                      bgcolor: "#333",
                      "& .MuiLinearProgress-bar": { bgcolor: user.color },
                    }}
                  />
                </Box>
                <Typography color="white">{user.percentage}%</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Right Side: Interactive World Map */}
        <Box sx={{ width: "100%", height: 350 }}>
          <VectorMap
            map={worldMill}
            backgroundColor="#101935"
            regionStyle={{
              initial: { fill: "#444" },
              hover: { fill: "#555" },
            }}
            markers={usersData.map((user) => ({
              latLng: user.coords,
              name: user.country,
            }))}
            markerStyle={{
              initial: {
                fill: "#C54CFF", // Change to pink (previous color)
                stroke: "#fff",
                strokeWidth: 4,
                r: 8, // Adjust marker size
              },
              hover: { fill: "#fff" },
            }}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default UsersByCountry;
