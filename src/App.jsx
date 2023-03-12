import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";
import "./styles/styles.css";

import MainContent from "./components/MainContent";

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500]
    },
    secondary: {
      main: "#11cb5f"
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainContent />
    </ThemeProvider>
  );
}
