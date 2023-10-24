import "./App.css";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components//Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/Register";

const theme = createTheme({
  spacing: 8,
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
