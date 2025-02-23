import { Box } from "@mui/material";
const RateBadge = ({ rate, isUp }) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        px: 1.5,
        py: 0.5,
        borderRadius: 1,
        border: "1px solid",
        bgcolor: isUp ? "rgba(46, 125, 50, 0.15)" : "rgba(211, 47, 47, 0.15)",

        borderColor: isUp ? "success.main" : "error.main",
        color: isUp ? "success.main" : "error.main",
        fontSize: "0.875rem",
        fontWeight: 600,
      }}
    >
      {rate} {isUp ? "↑" : "↓"}
    </Box>
  );
};

export default RateBadge;
