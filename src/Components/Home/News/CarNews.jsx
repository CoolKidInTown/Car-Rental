import React from "react";
import Slider from "react-slick";
import CarNewsCard from "./CarNewsCard";

const CarNews = () => {
  const newsData = [
    {
      id: 0,
      img: "src/assets/img/news1.jpg",
      desc: "Toyota touts internal combustion engine potential, Even in ev age",
    },
    {
        id: 1,
        img: "src/assets/img/news2.jpg",
        desc: "MG Astor 2024 internal combustion engine potential, Even in ev age",
      },
      {
        id: 2,
        img: "src/assets/img/news3.jpg",
        desc: "BMW Group internal combustion engine potential, Even in ev age",
      },
      {
        id: 3,
        img: "src/assets/img/news4.jpg",
        desc: "Kia Sonet nitro internal combustion engine potential, Even in ev age",
      },
      {
        id: 4,
        img: "src/assets/img/news5.jpg",
        desc: "First shift internal combustion engine potential, Even in ev age",
      },
      {
        id: 5,
        img: "src/assets/img/news6.jpg",
        desc: "JLR india sales with internal combustion engine potential, Even in ev age",
      },
  ];

  const settings = {
    dots: false,
    Infinite: true,
    slidesToShow: 3,
    SlidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          SlidesToScroll: 3,
          Infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          SlidesToScroll: 2,
          InitialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          SlidesToScroll: 1,
          InitialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="container mt-14">
      <h1 className="font-bold text-4xl text-center">
        Cars <span className="text-primary">News & Advices</span>
      </h1>

      <p className="text-center">
        o, with this classname, you're creating a flex container with its
        children stacked vertically and centered vertically within the container
        on small screens. On medium-sized screens and larger, the children will
      </p>

      <div className="mt-8">
        <Slider {...settings} >
            {newsData.map((item) => (
                <CarNewsCard key={item.id} img={item.img}
                desc={item.desc} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarNews;
