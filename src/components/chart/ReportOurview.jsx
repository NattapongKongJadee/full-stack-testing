import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
  Checkbox,
} from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import TableHeaderCustom from "../table/TableHeaderCustom";

const ReportsOverview = () => {
  const semiDonutChartOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Desktop users", "Phone app users", "Laptop users"],
    colors: ["#C54CFF", "#0047FF", "#72D2FF"],
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        startAngle: -100,
        endAngle: 100,
        offsetY: 20,
        donut: {
          size: "80%",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: { width: 0 },

    tooltip: {
      enabled: true,
      theme: "dark",
    },
  };

  const chartSeries = [15624, 5546, 2478];
  const totalUsers = chartSeries.reduce((a, b) => a + b, 0);

  const orders = [
    { id: 1532, date: "Dec 30, 10:06 AM", status: "Paid", total: "$329.40" },
    { id: 1531, date: "Dec 29, 2:59 AM", status: "Pending", total: "$117.24" },
    { id: 1530, date: "Dec 29, 12:54 AM", status: "Pending", total: "$52.16" },
    { id: 1529, date: "Dec 28, 2:32 PM", status: "Paid", total: "$350.52" },
    { id: 1528, date: "Dec 27, 2:20 PM", status: "Pending", total: "$246.78" },
    { id: 1527, date: "Dec 26, 9:48 AM", status: "Paid", total: "$64.00" },
  ];

  const [selectedOrders, setSelectedOrders] = useState([]);

  const handleSelectAll = (event) => {
    setSelectedOrders(event.target.checked ? orders.map((o) => o.id) : []);
  };

  const handleSelectOne = (id) => {
    setSelectedOrders((prev) =>
      prev.includes(id)
        ? prev.filter((orderId) => orderId !== id)
        : [...prev, id]
    );
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
      gap={3}
    >
      <Paper
        sx={{
          p: 3,
          borderRadius: 2,
          bgcolor: "#101935",
          border: "0.5px solid",
          borderColor: "gray",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ReactApexChart
            options={semiDonutChartOptions}
            series={chartSeries}
            type="donut"
            height={300}
          />
          <Typography variant="h3" fontWeight="bold" color="white" mt={-20}>
            {totalUsers.toLocaleString()}
          </Typography>
          <Typography variant="subtitle2" color="#7e89ac" mb={8}>
            Users by Device
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mt: 2,
            }}
          >
            {semiDonutChartOptions.labels.map((label, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 1,
                  width: "100%",
                  maxWidth: "200px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: semiDonutChartOptions.colors[index],
                  }}
                />
                <Typography variant="body2" color="white">
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
      <Paper
        sx={{
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: 2,
          bgcolor: "#101935",
          border: "0.5px solid",
          borderColor: "gray",
        }}
      >
        <Typography variant="h6" color="white">
          Recent Orders
        </Typography>
        <TableContainer>
          <Table>
            <TableHeaderCustom
              isAllSelected={selectedOrders.length === orders.length}
              handleSelectAll={handleSelectAll}
            />
            <TableBody>
              {orders.map((order) => {
                const isSelected = selectedOrders.includes(order.id);

                return (
                  <TableRow
                    key={order.id}
                    sx={{
                      bgcolor: isSelected ? "#080F25" : "transparent",
                      transition: "background 0.3s ease-in-out",
                      borderBottom: "none",
                    }}
                  >
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        color: "white",
                        fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      }}
                    >
                      <Checkbox
                        checked={selectedOrders.includes(order.id)}
                        onChange={() => handleSelectOne(order.id)}
                        sx={{
                          color: "#C54CFF",
                          "&.Mui-checked": { color: "#C54CFF" },
                        }}
                      />
                      #{order.id}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        borderBottom: "none",
                        fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      }}
                    >
                      {order.date}
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }}>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          bgcolor:
                            order.status === "Paid" ? "#1B5E20" : "#6D4C41",
                          color:
                            order.status === "Paid" ? "#4CAF50" : "#FFB74D",
                          border: `1px solid ${
                            order.status === "Paid" ? "#4CAF50" : "#FFB74D"
                          }`,
                          borderRadius: 1,
                          fontWeight: 600,
                          textTransform: "none",
                          fontSize: {
                            xs: "0.55rem",
                            sm: "0.65rem",
                          },
                          px: { xs: 0.5, sm: 1.2 },
                          py: { xs: 0.2, sm: 0.5 },
                          minWidth: { xs: "40px", sm: "auto" },
                        }}
                      >
                        {order.status}
                      </Button>
                    </TableCell>
                    <TableCell sx={{ color: "white", borderBottom: "none" }}>
                      {order.total}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ReportsOverview;
