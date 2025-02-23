import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DrawerItems from "./DrawerItems";

const drawerWidth = 260; // Set a fixed width for the sidebar

const Sidebar = ({ mobileOpen, setMobileOpen, setIsClosing }) => {
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  return (
    <Box
      component="nav"
      sx={{
        width: { lg: drawerWidth },
        flexShrink: 0,
        position: "relative", // Ensures shadow is rendered
        boxShadow: "10px 0px 20px rgba(0, 0, 0, 0.2)", // Strong shadow for testing
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
            boxShadow: "10px 0px 20px rgba(0, 0, 0, 0.2)", // Strong shadow
          },
        }}
      >
        <DrawerItems />
      </Drawer>

      {/* Permanent Sidebar (Desktop) */}
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
