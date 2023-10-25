import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./BoardPage.css";
const BoardPage = () => {
  const posts = [
    {
      id: 1,
      title: "첫 번째 게시물",
      content: "게시물 내용입니다.",
      author: "작성자1",
      views: 100,
      likes: 10,
      date: "2023-10-25",
    },
    {
      id: 2,
      title: "두 번째 게시물",
      content: "게시물 내용입니다.",
      author: "작성자2",
      views: 150,
      likes: 15,
      date: "2023-10-26",
    },
    // 다른 게시물들도 추가할 수 있습니다.
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 13,
            position: "relative",
            // border: "1px solid black",
            width: "70%",
          }}
        >
          <div>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ justifyContent: "center", alignItems: "center", pb: 3 }}
            >
              총 게시물 : 2건 현재 페이지: 1
            </Typography>
            <table>
              <thead>
                <tr>
                  <th>순번</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>조회수</th>
                  <th>추천수</th>
                  <th>날짜</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.author}</td>
                    <td>{post.views}</td>
                    <td>{post.likes}</td>
                    <td>{post.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            pt: 5,
            // border: "1px solid red",
            flexDirection: "row-reverse",
            width: "45%",
          }}
        >
          <Button variant="contained" color="success">
            글쓰기
          </Button>
        </Box>
        <Pagination count={10} />
      </Box>
    </>
  );
};

export default BoardPage;
