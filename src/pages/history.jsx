import React from "react";
import HistoryCard from "../component/card/historyCard";

const BookedServices = () => {

  const bookedServices =
    JSON.parse(localStorage.getItem("servicePurchased")) || [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Booked Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookedServices.map((service, index) => (
          <HistoryCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default BookedServices;
