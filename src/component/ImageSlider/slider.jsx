import { Carousel } from "flowbite-react";
import PropTypes from "prop-types";


const ImageSlider = ({ images }) => {
  console.log(images);

  return (
    <Carousel slideInterval={2000}>
      {images.map((image, idx) => {
        return (
          <img key={idx} src={image} alt={idx} className="w-full rounded-lg object-cover" />
        );
      })}
    </Carousel>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};


export default ImageSlider;
