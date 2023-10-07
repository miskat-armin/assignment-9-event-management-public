import { Card } from "flowbite-react";

const ServiceCard = ({image}) => {
  return (
    <Card
    imgSrc={image}
    className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 shadow-md">
      <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </Card>
  );
};

export default ServiceCard;
