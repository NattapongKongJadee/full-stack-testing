import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import IconifyIcon from "../base/IconifyIcon";
import RateChip from "../chips/RateChip";

const TopCard = (props) => {
  const { icon, title, value, rate, isUp } = props;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { sm: "48%", xl: "24%" },
        flexGrow: 1,
      }}
    >
      <Stack
        p={2.25}
        pl={2.5}
        direction="column"
        component={Paper}
        gap={1.5}
        height={116}
        width={1}
      >
        <Stack justifyContent="space-between" direction="row">
          <Stack alignItems="center" gap={1} direction="row">
            <IconifyIcon icon={icon} color="red" fontSize="h5.fontSize" />
            <Typography variant="subtitle2" color="red">
              {title}
            </Typography>
          </Stack>
          <IconButton
            aria-label="menu"
            size="small"
            sx={{ color: "black", fontSize: "h5.fontSize" }}
          >
            <IconifyIcon icon="solar:menu-dots-bold" />
          </IconButton>
        </Stack>

        <Stack alignItems="center" gap={0.875}>
          <Typography variant="h3" fontWeight={600} letterSpacing={1}>
            {value}
          </Typography>
          <RateChip rate={rate} isUp={isUp} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default TopCard;
