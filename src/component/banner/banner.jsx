import { Banner, Button } from "flowbite-react";
import React from "react";
import { BsArrowBarDown } from "react-icons/bs";

const options = {
  background: { 
    color: "#d6f2ff", 
  }, 
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
    },
    size: {
      value: { min: 1, max: 8 },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#808080",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: false,
      straight: false,
      outModes: "out",
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 1,
        },
      },
      push: {
        quantity: 4,
      },
    },
  },
};

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BannerContainer = ({ handleBannerExploreClick }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const scrollToCards = () => {
    handleBannerExploreClick();
  };

  return (
    <Banner className="w-screen">
      {/* <div className="h-full md:h-[70vh] lg:h-screen  w-full flex flex-col-reverse md:flex-row md:mt-0">
        <div className=" h-[40vh] md:h-full w-full mb-10 md:mb-0 flex flex-col justify-center items-center bg-[url('/wave_background.png')] bg-no-repeat bg-cover">
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
          className="h-full w-full md:w-1/2"
          animationData={banner_animation}
          loop={true}
        />
      </div> */}
      <div className="h-full md:h-[70vh] lg:h-screen lg:min-h-[1024px]  w-full flex flex-col-reverse md:flex-row md:mt-0">
        <div className="h-[40vh] md:h-full min-h-[300px] w-full mb-10 md:mb-0 flex flex-col justify-center items-center border-b-2">
          <Particles options={options} init={particlesInit}  />
          <p className="xl:text-7xl md:text-5xl text-3xl xl:font-extrabold z-10 mb-5">
            Level Up Your Events
          </p>
          <p className="xl:text-4xl md:text-3xl text-2xl z-10 mb-5 text-center">
            Powering Tomorrow's Tech and Gaming Experiences
          </p>
          <Button onClick={scrollToCards} size="xl" color=""  className="z-10 bg-[#7373E3] hover:bg-[#4D4DDB]">
            Explore services <BsArrowBarDown className="ml-2" size={32} />
          </Button>
        </div>
      </div>
    </Banner>
  );
};

export default BannerContainer;
