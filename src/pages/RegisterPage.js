import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
  });
  const [passwordMatch, setPasswordMath] = useState(false);
  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleRegister = () => {
    const dataToSend = {
      id: formData.id,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      name: formData.name,
      email: formData.email,
    };
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호와 비밀번호 확인이 다릅니다.");
      return;
    } else {
      fetch("http://localhost:3001/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      })
        .then((response) => {
          if (response.ok) {
            navigate("/");
            return response.json();
          } else {
            alert("회원가입이 실패 했습니다.");
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("에러 발생:", error);
        });
    }
    // 서버로 post
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
        <TextField
          required
          id="confirmPassword"
          label="Password 확인"
          type="password"
          autoComplete="current-password"
          variant="standard"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <TextField
          required
          id="name"
          label="name"
          variant="standard"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          required
          id="email"
          label="email"
          variant="standard"
          value={formData.email}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <Button variant="contained" color="primary" onClick={handleRegister}>
          회원가입
        </Button>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button variant="outlined" color="success">
            로그인
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default RegisterPage;
