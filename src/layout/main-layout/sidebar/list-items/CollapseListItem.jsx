import { useState } from "react";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconifyIcon from "../../../../components/base/IconifyIcon";
import React from "react";

const CollapseListItem = ({ subheader, active, items, icon }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {icon && (
            <IconifyIcon
              icon={icon}
              sx={{
                color: active ? "#6c72ff" : null,
              }}
            />
          )}
        </ListItemIcon>
        <ListItemText
          primary={subheader}
          sx={{
            "& .MuiListItemText-primary": {
              color: "#6c72ff",
            },
          }}
        />
        <IconifyIcon
          icon="iconamoon:arrow-right-2-duotone"
          color="#6c72ff"
          sx={{
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease-in-out",
          }}
        />
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items?.map((route) => {
            return (
              <ListItemButton
                key={route.pathName}
                component={Link}
                href={route.path}
                sx={{
                  pl: 1.75,
                  borderLeft: 4,
                  borderStyle: "solid",
                  borderColor: route.active ? "red" : "transparent !important",
                  bgcolor: route.active ? "info.dark" : "info.darker",
                }}
              >
                <ListItemText
                  primary={route.name}
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: "#FFFFFF",
                    },
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

export default CollapseListItem;
