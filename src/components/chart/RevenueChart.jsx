import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box } from "@mui/material";

const RevenueChart = () => {
  const generateMockData = () => {
    return Array.from(
      { length: 12 },
      () => Math.floor(Math.random() * 100) + 20
    );
  };

  const chartSeries = [
    { name: "Revenue", data: generateMockData() },
    { name: "Expenses", data: generateMockData() },
  ];

  const chartOptions = {
    chart: { height: 350, type: "area", toolbar: { show: false } },
    colors: ["#4DB6FF", "#C54CFF"],
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: { colors: "white", fontSize: "12px", fontWeight: 500 },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },

    yaxis: {
      labels: {
        style: { colors: "white", fontSize: "12px", fontWeight: 500 },
      },
    },

    tooltip: {
      theme: "dark",
      style: { fontSize: "12px", color: "white" },
    },
    grid: { show: false },
    legend: {
      position: "top",
      horizontalAlign: "right",
      fontSize: "12px",
      labels: {
        colors: "white",
      },
    },
  };

  return (
    <Box sx={{ width: "100%", height: "100%", minHeight: 350 }}>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="area"
        height="100%"
        width="100%"
      />
    </Box>
  );
};

export default RevenueChart;
