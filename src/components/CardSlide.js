import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CardSlide() {
  const slides = [
    {
      image: "images/Card1.png",
      title: "This is a fifth title 5",
      description: "This is a fifth description",
      clickEvent: "sliderClick",
    },
    {
      image: "images/Card2.png",
      title: "This is a fifth title 5",
      description: "This is a fifth description",
      clickEvent: "sliderClick"
    },
    {
      image: "images/Card3.png",
      title: "This is a fifth title 5",
      description: "This is a fifth description",
      clickEvent: "sliderClick"
    },
    {
      image: "images/Card4.png",
      title: "This is a fifth title 5",
      description: "This is a fifth description",
      clickEvent: "sliderClick"
    },
    {
      image: "images/Card5.png",
      title: "This is a fifth title 5",
      description: "This is a fifth description",
      clickEvent: "sliderClick"
    },
  ];

  const allSlides = [...slides,];

  return (
    <div className="card-slider-container">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        className="card-slider"
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        centerMode={true}
        centerSlidePercentage={100 / 5}  // Here you can set the number of slides to show
        renderThumbs={() => {}}
      >
        {allSlides.map((slide, index) => (
          <div key={index} className="card-slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CardSlide;
