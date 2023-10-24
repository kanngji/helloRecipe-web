import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
const RegisterPage = () => {
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
        <TextField
          required
          id="standard-password-input"
          label="Password 확인"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField required id="name-input" label="name" variant="standard" />
        <TextField required id="email-input" label="email" variant="standard" />
      </Box>
      <Box>
        <Button variant="contained" color="primary">
          회원가입
        </Button>
        <Button variant="outlined" color="success">
          로그인
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterPage;
