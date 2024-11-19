import { createTheme } from "@mui/material/styles";
import { dark } from "@mui/material/styles/createPalette";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffb600",
      light: "#90caf9",
      dark: "#42a5f5",
      contrastText: "#fff",
    },
    secondary: {
      main: "#00e5f4 ",
      dark: "#00d8e7 ",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 300,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 300,
    },
  },
});

export default theme;
