import { useState } from "react";
import Link from "@mui/material/Link";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconifyIcon from "../../../../components/base/IconifyIcon";

const ListItem = ({ subheader, icon, path, active }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ListItemButton
      component={Link}
      onClick={handleClick}
      sx={{ opacity: active ? 1 : 0.3 }}
    >
      <ListItemIcon>
        {icon && (
          <IconifyIcon
            icon={icon}
            sx={{
              color: "white",
            }}
          />
        )}
      </ListItemIcon>
      <ListItemText
        primary={subheader}
        sx={{
          "& .MuiListItemText-primary": {
            color: active && path === "/" ? "#101935" : null,
          },
        }}
      />
    </ListItemButton>
  );
};

export default ListItem;
