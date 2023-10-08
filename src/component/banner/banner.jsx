import { Banner, Button } from "flowbite-react";
import banner_animation from "../lotties/banner_animation.json";
import { BsArrowBarDown } from "react-icons/bs";

import Lottie from "lottie-react";
const BannerContainer = ({ handleBannerExploreClick }) => {
  const scrollToCards = () => {
    handleBannerExploreClick();
  };

  return (
    <Banner className="w-screen">
      <div className="h-full md:h-[70vh] lg:h-screen  w-full flex flex-col-reverse md:flex-row md:mt-0">
        <div className="lg:w-2/4 h-[40vh] md:h-full w-full mb-10 md:mb-0 flex flex-col justify-center items-center bg-[url('/wave_background.png')] bg-no-repeat bg-cover">
          <p className="xl:text-7xl md:text-5xl text-3xl z-10 mb-5">
            Level Up Your Events
          </p>
          <p className="xl:text-4xl md:text-3xl text-2xl z-10 mb-5 text-center">
            Powering Tomorrow's Tech and Gaming Experiences
          </p>
          <Button onClick={scrollToCards} size="xl" className="z-10">
            Explore services <BsArrowBarDown className="ml-2" size={32} />
          </Button>
        </div>
        <Lottie
          className="h-full w-full lg:w-2/4"
          animationData={banner_animation}
          loop={true}
        />
      </div>
    </Banner>
  );
};

export default BannerContainer;