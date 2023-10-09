import { useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import BannerContainer from "../component/banner/banner";
import ServiceCard from "../component/card/serviceCard";
import CustomerReviews from "../component/review/reviews";
import StreamingShowCase from "../component/showcase/streaming";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const Services = useLoaderData();
  const CardRef = useRef(null);
  const handleBannerExploreClick = () => {
    CardRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div data-aos="zoom-in-up" className="w-full mb-20">
        <BannerContainer handleBannerExploreClick={handleBannerExploreClick} />
      </div>

      <p className="font-bold text-3xl md:text-5xl mb-5">Our Services</p>
      <div
        ref={CardRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-10 max-w-[85%]"
      >
        {Services?.map((service, idx) => (
          <ServiceCard
            key={idx}
            image={service.image}
            name={service.name}
            subtitle={service.subtitle}
            price={service.price}
          />
        ))}
      </div>
      <div
        data-aos="slide-up"
        className="flex justify-center items-center flex-col mb-10 max-w-[85%]"
      >
        <p className="font-bold text-3xl md:text-5xl mb-5">Customer Reviews</p>
        <CustomerReviews />
      </div>
      <div data-aos="slide-right" className="w-full">
        <StreamingShowCase />
      </div>
    </div>
  );
};

export default Home;
