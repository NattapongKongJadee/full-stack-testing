import { Box } from "@mui/material";
import StatCard from "./StatCard";

const cardsData = [
  {
    id: 1,
    title: "Monthly Users",
    value: "23.6K",
    rate: "12.6%",
    isUp: false,
    icon: "solar:user-bold",
  },
  {
    id: 2,
    title: "Revenue",
    value: "$45.3K",
    rate: "8.2%",
    isUp: true,
    icon: "mingcute:currency-dollar-2-line",
  },
  {
    id: 3,
    title: "New Orders",
    value: "1.2K",
    rate: "5.4%",
    isUp: true,
    icon: "solar:cart-bold",
  },
  {
    id: 4,
    title: "Product Views",
    value: "89.4K",
    rate: "9.1%",
    isUp: false,
    icon: "solar:eye-bold",
  },
];

const AllCards = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: "1fr", // 1 column on extra small screens
        sm: "1fr 1fr", // 2 columns on small screens
        lg: "1fr 1fr 1fr 1fr", // 4 columns on large screens
      }}
      sx={{ color: "#212C4D" }}
      gap={{ xs: 1, sm: 1, lg: 2 }}
    >
      {cardsData.map((item) => (
        <StatCard
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

export default AllCards;
