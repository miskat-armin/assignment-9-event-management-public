import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ImageSlider from "../component/ImageSlider/slider";
import { Button, Radio } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify"; // Import react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for react-toastify

const Service = () => {
  const { service_name } = useParams();
  const [service, setService] = useState(null);
  const services = useLoaderData();
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [cart, setCart] = useState([]);

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
      setTotalPrice((prevTotal) =>
        Math.max(
          prevTotal - additionalService.additionalPrice,
          service?.price || 0
        )
      );
      setCart(cart.filter((item) => item !== additionalService));
    } else {
      setSelectedServices((prevServices) => [
        ...prevServices,
        additionalService,
      ]);
      setTotalPrice(
        (prevTotal) => prevTotal + additionalService.additionalPrice
      );
      setCart([...cart, additionalService]);
    }
  };

  const handleBookNowClick = () => {
    const purchase = {
      serviceName,
      totalPrice,
      selectedServices,
    };

    const existingPurchases =
      JSON.parse(localStorage.getItem("servicePurchased")) || [];
    existingPurchases.push(purchase);
    localStorage.setItem("servicePurchased", JSON.stringify(existingPurchases));

    setSelectedServices([]);
    setTotalPrice(service?.price || 0);
    setCart([]);

 
    toast.success("Booking successful. Thank you!", {
      position: "top-center",
      autoClose: 3000
    });
  };

  return (
    <>
      <div className="container mx-auto p-4 flex flex-col">
      <ToastContainer />
        {service && (
          <div className="md:h-[80vh] h-[40vh] mb-4">
            <ImageSlider images={service?.details.images} />
          </div>
        )}
        <h1 className="text-3xl font-bold mb-4">{serviceName}</h1>
        <div className="flex justify-between items-center mb-4">
          {service && <div className="text-xl font-bold">${service.price}</div>}
          <Button size="xl" onClick={handleBookNowClick}>Book Now</Button>
        </div>
        {service && (
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-3/4">
              <p className="text-gray-700 mb-4">
                {service.details?.description}
              </p>
              <h2 className="text-xl font-semibold mb-2">Services Included:</h2>
              <ul className="list-disc pl-6">
                {service.details?.servicesIncluded.map((serviceItem, index) => (
                  <li key={index}>{serviceItem}</li>
                ))}
              </ul>
              <fieldset
                className="flex max-w-md flex-col gap-4 mt-6"
                id="checkbox"
              >
                <legend className="text-xl font-semibold mt-6 mb-2">
                  Additional Services:
                </legend>

                {service.details?.additionalServices.map(
                  (priceOption, index) => (
                    <div className="flex items-center gap-2" key={index}>
                      <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        checked={selectedServices.includes(priceOption)}
                        onChange={() => handleServiceSelection(priceOption)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor={`checkbox-${index}`}>
                        ${priceOption.additionalPrice} for{" "}
                        {priceOption.services
                          .map((serviceName) => serviceName)
                          .join(", ")}
                      </label>
                    </div>
                  )
                )}
              </fieldset>
            </div>

            <div className="md:w-1/4 md:pl-4 flex flex-col items-center">
              <div className="bg-gray-100 p-6 rounded-md mt-6 md:mt-0 w-full">
                <h2 className="text-xl font-semibold mb-2">Cart</h2>
                <ul className="list-disc ml-4">
                  <li>
                    Base service: {service.price}
                  </li>
                  {cart.map((service, index) => (
                    <li key={index}>
                      {service.services
                        .map((serviceName) => serviceName)
                        .join(", ")}
                      : ${service.additionalPrice}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <strong>Total: ${totalPrice}</strong>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Service;
