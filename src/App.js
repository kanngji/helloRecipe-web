import "./App.css";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components//Footer/Footer";

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
      <HomePage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
