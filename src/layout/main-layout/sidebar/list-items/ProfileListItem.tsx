import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import React from "react";

const ProfileListItem = ({ subheader, path }) => {
  return (
    <ListItemButton component={Link} href={path}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar
          src="/avatar.png"
          sx={{ height: 36, width: 36, bgcolor: "white" }}
        />
        <Stack direction="column">
          <Typography variant="subtitle2" color="white" letterSpacing={0.5}>
            {subheader}
          </Typography>
          <Typography variant="caption" color="white" fontWeight={400}>
            Account Settings
          </Typography>
        </Stack>
      </Stack>
    </ListItemButton>
  );
};

export default ProfileListItem;
