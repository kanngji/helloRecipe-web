import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import "./BoardPage.css";
const BoardPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 마운트될 때 백엔드에서 데이터를 가져옵니다.
    fetch("http://localhost:3001/api/board/")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("데이터를 불러오는 중 에러 발생:", error);
        setLoading(false);
      });
  }, []); // 빈 의존성 배열은 이 효과가 초기 렝ㄴ더링 후 한번만 실행됨을 보장함

  const handleRowClick = (post) => {
    // 클릭된 행의 정보를상태로 저장합니다

    // 클릭된 행의 정보를 기반으로 BoardDetail 컴포넌트로 이동
    navigate(`/board/${post.id}`);
  };
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
          {loading ? (
            <div>Loading...</div>
          ) : (
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
                    <tr key={post.id} onClick={() => handleRowClick(post)}>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      <td>{post.author}</td>
                      <td>{post.view}</td>
                      <td>{post.recommend}</td>
                      <td>{post.created_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
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
          <Link to="create" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="success">
              글쓰기
            </Button>
          </Link>
        </Box>
        <Pagination count={10} />
      </Box>
    </>
  );
};

export default BoardPage;
