import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box } from "@mui/material";

const ProfitChart = () => {
  const chartOptions = {
    chart: {
      type: "bar",
      height: 200,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        endingShape: "rounded",
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["12 AM", "8 AM", "12 PM", "8 PM", "11 PM"],
      labels: { style: { colors: "white" } },
    },
    grid: { show: false },
    // yaxis: { labels: { style: { colors: "white" } } },
    yaxis: { labels: false },
    tooltip: { theme: "dark" },
    colors: ["#4DB6FF", "#C54CFF"],
    legend: {
      show: false, // ✅ This hides the legend
    },
  };

  const chartSeries = [
    { name: "Revenue", data: [12, 15, 10, 20, 18] },
    { name: "Expenses", data: [8, 10, 6, 14, 12] },
  ];

  return (
    <Box sx={{ width: "100%", height: 200 }}>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={200}
      />
    </Box>
  );
};

export default ProfitChart;
