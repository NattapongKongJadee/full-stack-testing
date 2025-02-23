import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DrawerItems from "./DrawerItems";

const drawerWidth = 260;

const Sidebar = ({ mobileOpen, setMobileOpen, setIsClosing }) => {
  return (
    <Box
      component="nav"
      sx={{
        width: { lg: drawerWidth },
        flexShrink: 0,
        position: "relative",
        boxShadow: "10px 0px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "#212C4D",
            color: "#6c72ff",
            position: "relative",
            boxShadow: "10px 0px 20px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <DrawerItems />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "#080F25",
            color: "white",
          },
        }}
      >
        <DrawerItems />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
