import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ image, name, subtitle, price }) => {
  return (
    <div data-aos="zoom-in">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col hover:scale-105 transform transition duration-500 cursor-pointer pb-6">
        <img src={image} className="object-fill h-48 xl:h-64  rounded-t-lg" />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white m-0 py-2 px-6">
          {name}
        </h5>
        <p className="text-gray-500 px-6">
          Base Price: {"	\u0024"} {price}
        </p>
        <p className="font-normal text-clip line-clamp-3 text-gray-700 dark:text-gray-400 px-6 my-4">
          {subtitle}
        </p>
        <Link to={`/event/${name}`}>
          <Button className="w-40 bg-[#7373E3] hover:bg-[#4D4DDB] mx-6">
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
      </div>
    </div>
  );
};

export default ServiceCard;
