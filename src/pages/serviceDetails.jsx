import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ImageSlider from "../component/ImageSlider/slider";

const Service = () => {
  const { service_name } = useParams();
  const [service, setService] = useState(null);
  const services = useLoaderData();
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [serviceName, setServiceName] = useState("");

  useEffect(() => {
    const serviceFound = services?.find(
      (service) => service.name === service_name
    );
    setService(serviceFound);
    setServiceName(serviceFound?.name);
    setTotalPrice(serviceFound?.price || 0);
  }, [service_name, services]);

  const handleServiceSelection = (additionalService) => {
    const isServiceSelected = selectedServices.includes(additionalService);

    if (isServiceSelected) {
      setSelectedServices((prevServices) =>
        prevServices.filter((service) => service !== additionalService)
      );
      setTotalPrice((prevTotal) => prevTotal - additionalService.additionalPrice);
    } else {
      setSelectedServices((prevServices) => [...prevServices, additionalService]);
      setTotalPrice((prevTotal) => prevTotal + additionalService.additionalPrice);
    }
  };

  const handleBookNowClick = () => {
    const purchase = {
      serviceName,
      totalPrice,
      selectedServices,
    };

    const existingPurchases = JSON.parse(localStorage.getItem("servicePurchased")) || [];
    existingPurchases.push(purchase);
    localStorage.setItem("servicePurchased", JSON.stringify(existingPurchases));

    setSelectedServices([]);
    setTotalPrice(0);
  };

  return (
    <>
      {service && (
        <div className="container h-full mx-auto p-4">
          <div className="md:h-[80vh] h-[40vh] mb-4">
            <ImageSlider images={service?.details.images} />
          </div>
          <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold">${totalPrice}</div>
            <button
              onClick={handleBookNowClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Book Now
            </button>
          </div>
          <p className="text-gray-700 mb-4">{service.details?.description}</p>
          <h2 className="text-xl font-semibold mb-2">Services Included:</h2>
          <ul className="list-disc pl-6">
            {service.details?.servicesIncluded.map((serviceItem, index) => (
              <li key={index}>{serviceItem}</li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mt-4 mb-2">Additional Services:</h2>
          <ul className="list-disc pl-6">
            {service.details?.additionalServices.map((priceOption, index) => (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    value={priceOption.additionalPrice}
                    onChange={() => handleServiceSelection(priceOption)}
                    checked={selectedServices.includes(priceOption)}
                  />
                  +${priceOption.additionalPrice} for {priceOption.services.join(", ")}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Service;
