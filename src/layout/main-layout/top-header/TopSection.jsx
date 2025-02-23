import { Box, Typography, Button, Stack } from "@mui/material";

const TopSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        bgcolor: "transparent",
        py: 2,
      }}
    >
      <Box>
        <Typography
          variant="h5"
          fontWeight={700}
          color="white"
          sx={{ fontSize: { xs: "1rem", sm: "1.45rem" } }}
        >
          Welcome back, John
        </Typography>
        <Typography
          variant="body2"
          color="grey.400"
          sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}
        >
          Measure your advertising ROI and report website traffic.
        </Typography>
      </Box>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "#101935",
            color: "white",
            textTransform: "none",
            "&:hover": { bgcolor: "primary.main" },
          }}
        >
          Export data ↓
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#6C72FF",
            color: "white",
            textTransform: "none",
            "&:hover": { bgcolor: "primary.light" },
          }}
        >
          Create report
        </Button>
      </Stack>
    </Box>
  );
};

export default TopSection;
