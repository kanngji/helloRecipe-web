import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const BoardDetail = () => {
  const { id } = useParams(); // URL에서 동적인 매개변수(id)추출
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 해당 ID에 해당하는 게시물 정보를 백엔드에서 가져오는 로직
    fetch(`http://localhost:3001/api/board/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data.post);
        setLoading(false);
      })
      .catch((error) => {
        console.error("데이터를 불러오는 중 에러 발생", error);
        setLoading(false);
      });
  }, [id]); // id가 바뀔때 마다 useEffect가 다시 실행됩니다.
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!post) {
    return <div>게시물을 찾을 수 없습니다.</div>;
  }
  return (
    <div>
      <h2>{post.title}</h2>
      <p>작성자: {post.author}</p>
      <p>조회수: {post.view}</p>
      <p>추천수: {post.recommend}</p>
      <p>작성일자: {post.created_at}</p>
      <p>내용: {post.content}</p>
      {/* 게시물 내용 및 기타 정보를 여기에 추가할 수 있습니다. */}
    </div>
  );
};

export default BoardDetail;
