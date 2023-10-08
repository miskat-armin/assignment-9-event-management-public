import React from "react";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const HistoryCard = ({ service }) => {
  return (
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {service.serviceName}
      </h5>
      <p className="font-semibold">Total price: {service.totalPrice}</p>
      <p className="mb-[-16px]">Additional Services: </p>
      {
        <ul className="list-decimal ml-4">
          {service.selectedServices?.map((selectedService, index) => (
            <div>
              <li>Price: {selectedService.additionalPrice}</li>
              <ul className="list-disc">
                {selectedService.services?.map((service, idx) => (
                  <li className="ml-2">{service}</li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      }

      <Link to={`/event/${service.serviceName}`}>
        <Button className="w-40">
          More details
          <svg
            className="w-6 h-6 text-white dark:text-white ml-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Button>
      </Link>
    </Card>
  );
};

export default HistoryCard;
