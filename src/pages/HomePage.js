import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { Pagination, Navigation, Scrollbar, Autoplay } from "swiper/modules";
import Footer from "../components/Footer/Footer";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
// import card styles
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Box from "@mui/material/Box";

const slideImages = [
  { src: "../img/slide1.jpg", alt: "슬라이드1" },
  { src: "../img/slide2.jpg", alt: "슬라이드2" },
  { src: "../img/slide3.jpg", alt: "슬라이드3" },
  { src: "../img/slide4.jpg", alt: "슬라이드4" },
  { src: "../img/slide5.jpg", alt: "슬라이드5" },
  { src: "../img/slide6.jpg", alt: "슬라이드6" },
];

const cardData = [
  {
    title: "Food",
    description: "신선하고 참신한 재료들로 나만의 음식을 만들어보세요!",
    src: "../img/card2.jpg",
    alt: "슬라이드2",
  },
  {
    title: "Recipe",
    description: "다양한 재료들과 요리방법으로 자신만의 요리를 완성시키세요!",
    src: "../img/card3.jpg",
    alt: "슬라이드3",
  },
  {
    title: "Photo",
    description: "사진을 찍어 완성한 요리들을 기록해두세요!",
    src: "../img/card1.jpg",
    alt: "슬라이드1",
  },
];

const clockImages = [
  { id: 1, src: "../img/clock1.jpg", initialAngle: 0 },
  { id: 2, src: "../img/clock2.jpg", initialAngle: (Math.PI / 2) * 3 },
  { id: 3, src: "../img/clock3.jpg", initialAngle: (Math.PI / 2) * 5 },
  { id: 4, src: "../img/clock4.jpg", initialAngle: (Math.PI / 2) * 7 },
  { id: 5, src: "../img/clock5.jpg", initialAngle: (Math.PI / 2) * 10 },
];
const SlideComponent = ({ imageSrc, altText }) => {
  return (
    <img
      src={imageSrc}
      alt={altText}
      style={{ width: "100%", height: "40vw" }}
    />
  );
};

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  // 스크롤 이벤트 감지 및 스크롤 위치 업데이트
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up: 이펙트가 정리될 때 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 빈 의존성 배열로 지정하여 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <>
      <div>
        {/* swiper  */}
        <Swiper
          pagination={true}
          modules={[Pagination, Navigation, Autoplay]}
          rewind={true}
          autoplay={{ delay: 4000 }}
          className="mySwiper"
        >
          {slideImages.map((image, index) => (
            <SwiperSlide key={index}>
              <SlideComponent imageSrc={image.src} altText={image.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* card */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 10,
        }}
      >
        {cardData.map((card, index) => (
          <Card key={index} sx={{ maxWidth: 300, mr: 10 }}>
            <CardActionArea>
              <CardMedia
                sx={{ objectFit: "fill" }}
                component="img"
                height="140"
                image={card.src}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      {/* effect */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          mt: 50,
        }}
      >
        <Box sx={{ flexDirection: "column", position: "absolute" }}>
          <Typography variant="h4" gutterBottom>
            나만의 요리재료와
          </Typography>
          <Typography variant="h4" gutterBottom>
            나만의 레시피를 세상에
          </Typography>
          <Typography variant="h3" gutterBottom>
            공개해 주세요!
          </Typography>
        </Box>

        {/* clock css */}
        <Box
          className="clock-container"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {clockImages.map((src, index) => (
            <img
              key={index}
              src={src.src}
              className={`clock-image image-${index + 1}`}
              style={{
                width: "200px",
                height: "250px",
                position: "absolute",
                borderRadius: "10px",
                opacity: scrollY > 900 ? 1 : 0, // 스크롤이 500px 아래로 내려갔을 때 이미지가 나타남
                transition: "opacity 3s ease", // 투명도 변경에 애니메이션 적용
              }}
            />
          ))}
        </Box>

        {/* video section */}
      </Box>
      <Box
        sx={{
          mt: 70,
          width: "100%",
          height: "75vw",
          // border: "1px solid #000000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* vedio box */}
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            mt: 5,
          }}
        >
          <Box
            sx={{
              width: 390,
              height: 230,
              borderRadius: "13px",
              overflow: "hidden",
              // border: "1px solid #000000",
              objectFit: "fill",
            }}
          >
            <video muted autoPlay loop>
              <source src="../video/video2.mp4" type="video/mp4" />
            </video>
          </Box>
          <Box sx={{ flexDirection: "column", ml: 23, pt: 4 }}>
            <Typography variant="h5" gutterBottom>
              요리할 음식 고르기
            </Typography>
            <Typography variant="h6" gutterBottom>
              참신한 재료들을 골라
              <br /> 요리를 시작하세요
            </Typography>
          </Box>
        </Box>
        <Box sx={{ justifyContent: "center", display: "flex", mt: 8 }}>
          <Box
            sx={{
              width: 390,
              height: 230,
              borderRadius: "13px",
              overflow: "hidden",
              // border: "1px solid #000000",
              objectFit: "fill",
            }}
          >
            <video muted autoPlay loop>
              <source src="../video/video3.mp4" type="video/mp4" />
            </video>
          </Box>
          <Box sx={{ flexDirection: "column", ml: 23, pt: 4 }}>
            <Typography variant="h5" gutterBottom>
              재료손질 하기
            </Typography>
            <Typography variant="h6" gutterBottom>
              남들과 다른 재료손질과
              <br /> 요리비법 사용하기
            </Typography>
          </Box>
        </Box>
        <Box sx={{ justifyContent: "center", display: "flex", mt: 8 }}>
          <Box
            sx={{
              width: 390,
              height: 230,
              borderRadius: "13px",
              overflow: "hidden",
              // border: "1px solid #000000",
              objectFit: "fill",
            }}
          >
            <video muted autoPlay loop>
              <source src="../video/video4.mp4" type="video/mp4" />
            </video>
          </Box>
          <Box sx={{ flexDirection: "column", ml: 23, pt: 4 }}>
            <Typography variant="h5" gutterBottom>
              요리 완성하기
            </Typography>
            <Typography variant="h6" gutterBottom>
              완성한 음식들을
              <br /> 사람들에게 보여주세요
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
