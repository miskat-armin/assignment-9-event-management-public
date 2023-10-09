import { Carousel } from "flowbite-react";
import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  console.log(images);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <Carousel slideInterval={2000}>
      {images.map((image, idx) => {
        return (
          <img src={image} alt={idx} className="w-full rounded-lg object-cover" />
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
