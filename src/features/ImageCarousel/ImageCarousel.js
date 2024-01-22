import React, { useEffect, useState } from "react";

import "./ImageCarousel.css";
const images = [
  "https://thumbs.dreamstime.com/b/jamaica-caribbean-local-art-18789721.jpg",
  "https://media.timeout.com/images/105795964/750/422/image.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwq5Kcwcwe-vuuT-y3amhiuWQ4bGF9hdafD1y2JPQbo7hXLUlYTeQ-FC31EPR8p3ensUQ&usqp=CAU",
  "https://img.freepik.com/free-photo/abstract-backdrop-with-multi-colored-decoration-generative-ai_188544-12870.jpg",
  "https://img.freepik.com/free-photo/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai_188544-9806.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705363200&semt=ais",
  "https://cutewallpaper.org/24/pictures-of-black-love-art/2120722857.jpg",
  "https://www.tenstickers.in/webp/quadres/large/magnificent-peacock-bird-canvas-art-45673.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7I1xMnZyMwzzyyu-0LV6XBW1Yphm3cHO6Q&usqp=CAU",
];

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  useEffect(() => {
    const slideImage = () => {
      const imageWrapper = document.getElementById("image-wrapper");
      imageWrapper.style.transform = `translateX(-${currentIndex * 715}px)`;
    };
    slideImage();
  }, [currentIndex]);
  return (
    <div className="carousel-wrapper">
      <h1 className="carousel-heading">
        Image Carousel with fixed number of images
      </h1>
      <div className="carousel-container">
        <button
          className="control-buttons"
          onClick={handlePreviousClick}
          disabled={currentIndex === 0}
        >
          Previous{" "}
        </button>
        <div className="image-container">
          <div id="image-wrapper" className="image-inner-container">
            {images.map((image, index) => {
              return (
                <img
                  src={image}
                  alt={image.substring(image.length - 5, image.length)}
                  className="image"
                />
              );
            })}
          </div>
        </div>
        <button
          className="control-buttons"
          onClick={handleNextClick}
          disabled={currentIndex === images.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};
