import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, Autoplay } from "swiper/modules";

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
    </>
  );
};

export default HomePage;
