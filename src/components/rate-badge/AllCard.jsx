import { Box } from "@mui/material";
import StatCard from "./StatCard";

const cardsData = [
  {
    id: 1,
    title: "Pageviews",
    value: "50.8K",
    rate: "28.4%",
    isUp: true,
    icon: "solar:eye-bold",
  },
  {
    id: 2,
    title: "Monthly users",
    value: "$23.6K",
    rate: "12.6%",
    isUp: false,
    icon: "solar:user-bold",
  },
  {
    id: 3,
    title: "New sign ups",
    value: "756",
    rate: "3.1%",
    isUp: true,
    icon: "solar:user-plus-bold",
  },
  {
    id: 4,
    title: "Subscriptions",
    value: "2.3K",
    rate: "11.3%",
    isUp: true,
    icon: "solar:crown-star-bold",
  },
];

const AllCards = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: "1fr",
        sm: "1fr 1fr",
        lg: "1fr 1fr 1fr 1fr",
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
