import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ image, name, subtitle, price }) => {
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col hover:scale-105 transform transition duration-500 cursor-pointer pb-6">
        <img src={image} className="object-fill h-48 xl:h-64  rounded-t-lg" />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white m-0 py-2 px-6">
          {name}
        </h5>
        <p className="text-gray-500 px-6">
          Base Price: {"	\u0024"} {price}
        </p>
        <p className="font-normal text-clip line-clamp-3 text-gray-700 dark:text-gray-400 px-6 my-2">
          {subtitle}
        </p>
        <Link to={`/event/${name}`}>
          <Button
            color=""
            className="w-40 bg-[#7373E3] hover:bg-[#4D4DDB] mx-6"
          >
            <p className="text-white text-lg">More details</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
