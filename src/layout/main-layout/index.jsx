import { useState, PropsWithChildren } from "react";
import Stack from "@mui/material/Stack";
import Sidebar from "./sidebar";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import AllCards from "../../components/rate-badge/AllCard";
import TopSection from "./top-header/TopSection";
import RevenueChart from "../../components/chart/RevenueChart";
import ProfitChart from "../../components/chart/ProfitChart";
import SessionsChart from "../../components/chart/SessionChart";
import ReportsOverview from "../../components/chart/ReportOurview";
import UsersByCountry from "../../components/chart/UserByCountry";
import RateBadge from "../../components/rate-badge/RateBadge";
const MainLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  return (
    <Stack direction="row" width="100vw" minHeight="100vh">
      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        setIsClosing={setIsClosing}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
          minHeight: "100vh",
          bgcolor: "#080F25",
          display: "flex",
          flexDirection: "column",
          p: { xs: 2, sm: 3, lg: 4 },
          pr: { xs: 2, sm: 4, lg: 6 },
          pl: { lg: 3 },
        }}
      >
        <TopSection />
        <AllCards />
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "2fr 1fr" }}
          gap={3}
          sx={{ mt: 3 }}
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
            <Typography variant="subtitle2" color="#7e89ac">
              Total Revenue
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                variant="h6"
                fontWeight={600}
                letterSpacing={1}
                color="white"
                sx={{ marginRight: "10px" }}
              >
                $240.8K
              </Typography>
              <RateBadge rate="24.6" isUp={true} />
            </Box>
            <RevenueChart />
          </Paper>
          <Box display="grid" gridTemplateRows="1fr 1fr" gap={3} height="100%">
            <Paper
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: "#101935",
                border: "0.5px solid",
                borderColor: "gray",
              }}
            >
              <Typography
                variant="subtitle2"
                color="#7e89ac"
                sx={{ marginBottom: "4px" }}
              >
                Total Profit
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  letterSpacing={1}
                  color="white"
                  marginRight="10px"
                >
                  $144.6K
                </Typography>
                <RateBadge rate="24.6" isUp={true} />
              </Box>
              <ProfitChart />
            </Paper>

            <Paper
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: "#101935",
                border: "0.5px solid",
                borderColor: "gray",
              }}
            >
              <Typography
                variant="subtitle2"
                color="#7e89ac"
                sx={{ marginBottom: "4px" }}
              >
                Total Sessions
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  letterSpacing={1}
                  color="white"
                  marginRight="10px"
                >
                  400
                </Typography>
                <RateBadge rate="16.8" isUp={true} />
              </Box>
              <SessionsChart />
            </Paper>
          </Box>
          |{" "}
        </Box>
        <Typography variant="h5" fontWeight={700} color="white">
          Reports overview
        </Typography>
        <Box sx={{ mt: 4 }}>
          <ReportsOverview />
        </Box>
        <Box sx={{ mt: 4 }}>
          <UsersByCountry />
        </Box>
      </Box>
    </Stack>
  );
};

export default MainLayout;
