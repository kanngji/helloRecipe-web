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
              sx={{ mr: 20, ml: 30 }}
            >
              <MenuIcon />
            </IconButton>
            <div>
              <Button color="inherit" sx={{ mr: 8, fontSize: "1.2rem" }}>
                소개
              </Button>
              <Button color="inherit" sx={{ mr: 8, fontSize: "1.2rem" }}>
                요리모음
              </Button>
              <Button color="inherit" sx={{ mr: 8, fontSize: "1.2rem" }}>
                게시판
              </Button>

              <Button color="inherit" sx={{ mr: 8, fontSize: "1.2rem" }}>
                스토어
              </Button>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button color="inherit" sx={{ mr: 8, fontSize: "1.2rem" }}>
                  로그인
                </Button>
              </Link>
            </div>

            <Button color="inherit" sx={{ ml: 20, mr: 5, fontSize: "1.2rem" }}>
              문의하기
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </MuiThemeProvider>
  );
}
