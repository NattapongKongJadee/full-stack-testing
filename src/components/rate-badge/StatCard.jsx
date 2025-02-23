import { Box, Stack, Paper, Typography, IconButton } from "@mui/material";
import IconifyIcon from "../base/IconifyIcon";
import RateBadge from "./RateBadge";

const StatCard = ({ icon, title, value, rate, isUp }) => {
  return (
    <Paper
      sx={{
        p: 2.5,
        borderRadius: 2,
        bgcolor: "#101935",
        border: "0.5px solid",
        borderColor: "gray",
        boxShadow: 3,
        minWidth: 240,
        minHeight: "20px",
        maxHeight: { xs: "auto", md: "400px" },
      }}
    >
      <Stack spacing={1.5}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconifyIcon icon={icon} color="white" fontSize="1.5rem" />
            <Typography variant="subtitle2" color="#7e89ac">
              {title}
            </Typography>
          </Stack>
          <IconButton size="small" sx={{ color: "white" }}>
            <IconifyIcon icon="solar:menu-dots-bold" />
          </IconButton>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography
            variant="h6"
            fontWeight={600}
            letterSpacing={1}
            color="white"
          >
            {value}
          </Typography>
          <RateBadge rate={rate} isUp={isUp} />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default StatCard;
