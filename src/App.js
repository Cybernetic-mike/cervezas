//import logo from "./logo.svg";
import "./App.css";
import theme from "./theme/theme";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveDrawer />
    </ThemeProvider>
  );
}

export default App;
