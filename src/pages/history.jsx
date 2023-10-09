import { useEffect } from "react";
import HistoryCard from "../component/card/historyCard";
import { useAuth } from "../context/authContext";

import AOS from "aos";
import "aos/dist/aos.css";

const BookedServices = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { user } = useAuth();

  const bookedServices = JSON.parse(localStorage.getItem(user?.uid)) || [];

  return (
    <div className="container mx-auto my-10 min-h-screen p-2">
      <h1 className=" text-3xl md:text-5xl font-extrabold mb-4">Booked Services</h1>
      <div className="flex flex-row flex-wrap justify-center xl:justify-normal gap-6 ">
        {bookedServices.map((service, index) => (
          <HistoryCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default BookedServices;
