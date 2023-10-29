import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
const BoardCreatePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" gutterBottom>
            게시판 글쓰기
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="title">
              <Typography variant="h6" gutterBottom>
                제목
              </Typography>
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleChange}
            />
            <label htmlFor="content">
              <Typography variant="h6" gutterBottom>
                내용
              </Typography>
            </label>
            <textarea
              id="content"
              rows="20"
              value={formData.content}
              onChange={handleChange}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around", mt: 3 }}>
          <Button variant="contained" size="large" color="success">
            작성
          </Button>
          <Button variant="outlined" size="large" color="error">
            취소
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default BoardCreatePage;
