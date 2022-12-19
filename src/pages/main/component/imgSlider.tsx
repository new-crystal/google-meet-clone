import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
  const settings = {
    infinite: true,
    speed: 400,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: "0px",
  };

  interface img {
    url: string;
  }

  const imgList = [
    {
      url: "https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg",
    },
    {
      url: "https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg",
    },
    {
      url: "https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg",
    },
  ];

  return (
    <Slider {...settings}>
      {imgList.map((img: img, i: number) => {
        return (
          <ImgBox key={i} id={`${i}`}>
            <img src={img.url} alt="img" />
          </ImgBox>
        );
      })}
    </Slider>
  );
};

const ImgBox = styled.div`
  /* width: 330px;
  height: 330px; */
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const StyledSlide = styled(Slider)`
  position: relative;
  margin-top: 60px;
  margin-bottom: -40px;
  width: 100%;

  .slick-list {
    position: absolute;
    width: 890px;
    height: 450px;
    margin: 0 auto;
    overflow: hidden;
    top: -30px;
  }

  .slick-slider {
    display: flex;
  }

  .slick-track {
    display: flex;
    height: 100%;
  }

  .slick-dots {
    display: none !important;
  }

  .slick-arrow {
    padding: 4px 6px;
    transform: translate(30px, 150px);
    background-color: transparent;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }

  .slick-prev {
    position: absolute;
    top: -20px;
    right: -800px;
    cursor: pointer;
    z-index: 100;
  }

  .slick-next {
    position: absolute;
    top: -20px;
    left: 810px;
    cursor: pointer;
  }
`;

export default ImgSlider;
