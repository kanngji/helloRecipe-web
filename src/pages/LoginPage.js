import { useDispatch } from "react-redux";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../store/auth-slice";
const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(authActions.login());
  };

  const handleLogin = async () => {
    const dataToSend = {
      id: formData.id,
      password: formData.password,
    };
    try {
      const response = await fetch("http://localhost:3001/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      if (response.status === 200) {
        const responseData = await response.json();
        console.log(responseData.message);
        navigate(-1);
        loginHandler();
        // 로그인이 성공하면 리다이렉트 또는 다음 단계를 수행
      } else {
        console.error("Invalid credentials");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
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
          id="id"
          label="ID"
          variant="standard"
          value={formData.id}
          onChange={handleChange}
        />

        <TextField
          required
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          value={formData.password}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <Button variant="contained" color="primary" onClick={handleLogin}>
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
