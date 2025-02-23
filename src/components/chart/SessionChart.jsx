import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box } from "@mui/material";

const SessionsChart = () => {
  const chartOptions = {
    chart: {
      type: "line",
      height: 200,
      toolbar: { show: false },
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["12 AM", "8 AM", "12 PM", "8 PM", "11 PM"],
      labels: { style: { colors: "white" } },
    },
    grid: { show: false },
    yaxis: { labels: { style: { colors: "white" } } },
    tooltip: { theme: "dark" },
    colors: ["#C54CFF"],
  };

  const chartSeries = [{ name: "Sessions", data: [100, 200, 150, 250, 180] }];

  return (
    <Box sx={{ width: "100%", height: 200 }}>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={200}
      />
    </Box>
  );
};

export default SessionsChart;
