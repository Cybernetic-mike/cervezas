import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import ResponsiveDrawer from "./ResponsiveDrawer";

function NavBar() {
  return (
    <AppBar
      sx={{
        position: "fixed",
        background: "black",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid red",
      }}
    >
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
          }}
        >
          LOGO
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
