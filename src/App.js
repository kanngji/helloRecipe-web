import "./App.css";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import Header from "./components/Header/Header";

const theme = createTheme({
  spacing: 8,
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
