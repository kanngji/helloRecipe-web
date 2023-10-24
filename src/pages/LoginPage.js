import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 20,
        flexDirection: "column",
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          required
          id="standard-required"
          label="ID"
          variant="standard"
        />

        <TextField
          required
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </Box>
      <Box>
        <Button variant="contained" color="primary">
          로그인
        </Button>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button variant="outlined" color="success">
            회원가입
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default LoginPage;
