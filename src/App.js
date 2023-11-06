import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BoardPage from "./pages/BoardPage";
import BoardDetail from "./pages/BoardDetail";
import Footer from "./components//Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import BoardCreatePage from "./pages/BoardCreatePage";
import { authActions } from "./store/auth-slice";

const theme = createTheme({
  spacing: 8,
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif",
  },
});
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // 페이지가 로드될때 local storage에서 토큰을 읽어와서 redux 스토어에 저장
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");
    if (storedToken && user_id) {
      dispatch(
        authActions.login({ user_token: storedToken, user_id: user_id })
      );
    }
    if (!isLoggedIn) {
      dispatch(authActions.logout());
    }
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/board" element={<BoardPage />}></Route>
          <Route path="/board/:id" element={<BoardDetail />}></Route>
          <Route path="/board/create" element={<BoardCreatePage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
