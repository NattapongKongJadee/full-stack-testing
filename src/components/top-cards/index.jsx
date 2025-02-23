import { Box } from "@mui/material";
import TopCard from "./TopCard"; // Ensure you have the correct import

const cardsData = [
  {
    id: 1,
    title: "Save Products",
    value: "50.8K",
    rate: "28.4%",
    isUp: true,
    icon: "carbon:favorite-filled",
  },
  {
    id: 2,
    title: "Stock Products",
    value: "23.6K",
    rate: "12.6%",
    isUp: false,
    icon: "solar:bag-bold",
  },
  {
    id: 3,
    title: "Sale Products",
    value: "756",
    rate: "3.1%",
    isUp: true,
    icon: "ph:bag-simple-fill",
  },
  {
    id: 4,
    title: "Average Revenue",
    value: "2.3K",
    rate: "11.3%",
    isUp: true,
    icon: "mingcute:currency-dollar-2-line",
  },
];

const TopCards = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: "1fr", // 1 column on extra small screens
        sm: "1fr 1fr", // 2 columns on small screens
        lg: "1fr 1fr 1fr 1fr", // 4 columns on large screens
      }}
      gap={{ xs: 2.5, sm: 3, lg: 3.75 }} // Ensures proper spacing
    >
      {cardsData.map((item) => (
        <TopCard
          key={item.id}
          title={item.title}
          value={item.value}
          rate={item.rate}
          isUp={item.isUp}
          icon={item.icon}
        />
      ))}
    </Box>
  );
};

export default TopCards;
