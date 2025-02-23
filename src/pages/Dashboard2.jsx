import { Box } from "@mui/material";
import TopCards from "../components/top-cards/TopCard";
import TopCard from "../components/top-cards/TopCard";

const Dashboard2 = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr" // Adjust columns as needed
      gap={{ xs: 2.5, sm: 3, lg: 3.75 }} // Replaces `spacing`
    >
      <TopCard />
    </Box>
  );
};

export default Dashboard2;
