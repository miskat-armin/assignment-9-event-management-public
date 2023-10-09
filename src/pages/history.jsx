import React, { useEffect } from "react";
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
    <div className="container mx-auto p-4 my-10">
      <h1 className=" text-3xl md:text-5xl  font-bold mb-4">Booked Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookedServices.map((service, index) => (
          <HistoryCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default BookedServices;
