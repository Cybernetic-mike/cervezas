import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect } from "react";
import Banner from "./Banner";
import Conten from "./Conten";

const drawerWidth = 240;
function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const sections = [
    "home",
    "subTitle1",
    "subTitle2",
    "subTitle3",
    "subTitle4",
    "subTitle5",
    "subTitle6",
    "subTitle7",
    "subTitle8",
    "subTitle9",
    "subTitle10",
  ];
  const handleScroll = () => {
    const scrollPosition = window.scrollY - 200; // Ajuste opcional para el desplazamiento
    const sectionOffsets = sections.map((sectionId) => {
      const section = document.getElementById(sectionId);
      return {
        id: sectionId,
        offset: section ? section.offsetTop : 1,
      };
    });

    const currentSection = sectionOffsets.find(
      (section) => scrollPosition <= section.offset
    );

    if (currentSection) {
      setValue(sections.indexOf(currentSection.id));
    }
  };
  /*useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);*/
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <Box>
      <Toolbar
        sx={{ background: "black", borderBottom: "1px solid #ffb600" }}
      />

      <Divider />
      <Box
        sx={{
          bgcolor: "background.paper",
          display: "flex",

          background: "white",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderColor: "divider" }}
        >
          <Tab label="Inicio " onClick={() => scrollToSection("home")} />
          <Tab
            label="1. Definición breve y clara del tema: "
            onClick={() => scrollToSection("subTitle1")}
          />
          <Tab
            label="2. Planteamiento del Problema "
            onClick={() => scrollToSection("subTitle2")}
          />
          <Tab
            label="3. Objetivos"
            onClick={() => scrollToSection("subTitle3")}
          />
          <Tab
            label="4. Justificación"
            onClick={() => scrollToSection("subTitle4")}
          />
          <Tab
            label="5. Marco Teórico"
            onClick={() => scrollToSection("subTitle5")}
          />
          <Tab
            label="6. Hipótesis"
            onClick={() => scrollToSection("subTitle6")}
          />
          <Tab
            label="7. Metodologia"
            onClick={() => scrollToSection("subTitle7")}
          />
          <Tab
            label="8. Resultados esperados "
            onClick={() => scrollToSection("subTitle8")}
          />
          <Tab
            label="9. Cronograma del proyecto"
            onClick={() => scrollToSection("subTitle9")}
          />
          <Tab
            label="10. Estadisticas"
            onClick={() => scrollToSection("subTitle10")}
          />
        </Tabs>
      </Box>
    </Box>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{ background: "black", borderBottom: "1px solid #ffb600" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Banner />
        <Box
          sx={{
            maxWidth: "90vw",
            padding: {
              sm: "5px 10px 5px 30px",
              md: "15px 50px 5px 50px",
              lg: "5px 200px 5px 150px",
            },
          }}
        >
          <Conten />
        </Box>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
