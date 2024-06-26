import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
} from "../../assets/images";
import Image from "../designLayouts/Image";

const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => {
  const isExternal = buttonLink.startsWith("http://") || buttonLink.startsWith("https://");

  return (
    <div className="relative flex items-center justify-center bg-gray-100 p-6 md:flex-row flex-col">
      <div className="max-w-lg mb-6 md:mb-0 md:mr-10 text-center md:text-left">
        <h1 className="mb-4 text-3xl md:text-5xl font-bold text-black">
          {text}
        </h1>
        <p className="mb-6 text-lg md:text-2xl text-gray-600">
          {Subtext}
        </p>
        {isExternal ? (
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
              {buttonText}
            </button>
          </a>
        ) : (
          <Link to={buttonLink}>
            <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
              {buttonText}
            </button>
          </Link>
        )}
      </div>
      <div className="ml-0 md:ml-10">
        <Image imgSrc={imgSrc} />
      </div>
    </div>
  );
};

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "1%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  const slides = [
    {
      imgSrc: bannerImgOne,
      text: "Back To School",
      Subtext: "Back To School - Ưu đãi cực Cool",
      buttonLink: "/shop",
      buttonText: "Shop Now",
    },
    {
      imgSrc: bannerImgTwo,
      text: "Mở Bcard - Dùng Thỏa Thích",
      Subtext: "Download Loyalty App - Tích lũy điểm khi mua sắm tại B's Mart.",
      buttonLink: "https://bcard.bsmartvina.com",
      buttonText: "Download",
    },
    {
      imgSrc: bannerImgThree,
      text: "Tưng Bừng Ưu Đãi Cùng Comfort.",
      Subtext:
        "Từ 13/6 - 30/7. Tưng Bừng Ưu Đãi Cùng Comfort. Giảm giá đến 50%.",
      buttonLink: "/shop",
      buttonText: "Mua Ngay",
    },
    // Add more slides as needed
  ];

  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
