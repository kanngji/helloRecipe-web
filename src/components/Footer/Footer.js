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
const Footer = () => {
  return (
    <Box
      sx={{
        mt: 100,
        position: "relative",
        width: "100%",
        height: "20vw",
        backgroundColor: "#eee",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          pt: 3,
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Button
          color="inherit"
          sx={{ mr: 8, fontSize: "1.2rem", fontWeight: "bold" }}
        >
          소개
        </Button>
        <Button
          color="inherit"
          sx={{ mr: 8, fontSize: "1.2rem", fontWeight: "bold" }}
        >
          요리모음
        </Button>

        <Button
          color="inherit"
          sx={{ mr: 8, fontSize: "1.2rem", fontWeight: "bold" }}
        >
          로그인
        </Button>
        <Button
          color="inherit"
          sx={{ mr: 8, fontSize: "1.2rem", fontWeight: "bold" }}
        >
          스토어
        </Button>
        <Button
          color="inherit"
          sx={{ ml: 20, mr: 5, fontSize: "1.2rem", fontWeight: "bold" }}
        >
          문의하기
        </Button>
      </Box>
      <Box
        sx={{
          mt: 10,
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: "#414141",
          }}
        >
          alleneffort1994@gmail.com | 강지훈 |
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 5,
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: "#414141",
          }}
        >
          전체 유저수: 0명 | today: 0명
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
