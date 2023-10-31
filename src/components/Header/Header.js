import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import { createTheme } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { useDispatch } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff", // 원하는 배경 색상으로 변경
    },
    text: {
      primary: "#000000", // 흰색 글자로 변경
    },
  },
});

export default function Header() {
  const isLogIn = useSelector((state) => state.auth.isLoggedIn);
  // const user_password = useSelector((state) => state.auth.user_password); // 사용자 정보 가져오기
  const user_id = useSelector((state) => state.auth.user_id); // 사용자 정보 가져오기
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <MuiThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 5, ml: 30 }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: "flex" }}>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <Button color="inherit" sx={{ mr: 8, fontSize: "1.2rem" }}>
                  소개
                </Button>
              </Link>
              <Button color="inherit" sx={{ mr: 8, fontSize: "1.2rem" }}>
                요리모음
              </Button>
              <Link
                to="/board"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button color="inherit" sx={{ mr: 8, fontSize: "1.2rem" }}>
                  게시판
                </Button>
              </Link>

              <Button color="inherit" sx={{ mr: 8, fontSize: "1.2rem" }}>
                스토어
              </Button>
              {isLogIn ? (
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Button
                    color="inherit"
                    sx={{ mr: 8, fontSize: "1.2rem" }}
                    onClick={logoutHandler}
                  >
                    로그아웃
                  </Button>
                </Link>
              ) : (
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Button color="inherit" sx={{ mr: 8, fontSize: "1.2rem" }}>
                    로그인
                  </Button>
                </Link>
              )}
              {isLogIn && (
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <Button color="inherit" sx={{ mr: 8, fontSize: "0.7rem" }}>
                    {user_id}님 접속
                  </Button>
                </Link>
              )}
            </Box>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdN4pqNBVWZDP-MxFFycpHy4v6EKA4-d5WK3FihnuM18KcoQg/viewform?usp=sf_link"
              target="_blank"
            >
              <Button
                color="inherit"
                sx={{ ml: 20, mr: 5, fontSize: "1.2rem" }}
              >
                문의하기
              </Button>
            </a>
          </Toolbar>
        </AppBar>
      </Box>
    </MuiThemeProvider>
  );
}
