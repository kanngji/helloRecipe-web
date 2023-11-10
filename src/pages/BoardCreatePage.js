import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
const BoardCreatePage = () => {
  const navigate = useNavigate();
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
  // back fetch function
  const handleCreate = async () => {
    const dataToSend = {
      title: formData.title,
      content: formData.content,
    };
    try {
      const response = await fetch("http://localhost:3001/api/board/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      if (response.ok) {
        console.log("게시글 작성 성공 F");
        // 게시글 작성 성공 시 리다이렉션 또는 다른 작업 수행
        navigate(-1);
      } else {
        console.log("게시글 작성 실패 f");
        // 게시글 작성 실패 시 에러 처리 또는 사용자에게 알림 표시
      }
    } catch (error) {
      console.log("게시글 작성 오류: ", error);
    }
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
          <Button
            variant="contained"
            size="large"
            color="success"
            onClick={handleCreate}
          >
            작성
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="error"
            onClick={() => navigate(-1)}
          >
            취소
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default BoardCreatePage;
