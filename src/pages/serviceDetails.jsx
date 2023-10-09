import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Import react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for react-toastify
import ImageSlider from "../component/ImageSlider/slider";
import { useAuth } from "../context/authContext";
import AOS from "aos";
import "aos/dist/aos.css";

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

  const { user } = useAuth();

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

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleBookNowClick = () => {
    const purchase = {
      serviceName,
      totalPrice,
      selectedServices,
      date: new Date().toLocaleDateString(),
    };
  
    const userUID = user?.uid;
    const existingPurchases = JSON.parse(localStorage.getItem(userUID)) || [];
    existingPurchases.push(purchase);
    localStorage.setItem(userUID, JSON.stringify(existingPurchases));
  
    setSelectedServices([]);
    setTotalPrice(service?.price || 0);
    setCart([]);
  
    toast.success("Booking successful. Thank you!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <>
      <div className="container mx-auto p-4 flex flex-col mb-10">
        <ToastContainer />
        {service && (
          <div className="md:h-[80vh] h-[40vh] mb-4">
            <ImageSlider images={service?.details.images} />
          </div>
        )}
        <h1 className="text-3xl font-extrabold mb-4">{serviceName}</h1>
        <h1 className="text-xl font-light mb-4">{service?.subtitle}</h1>
        <div className="flex justify-between items-center mb-4">
          {service && (
            <div className="text-2xl font-bold text-green-800">
              ${service.price}
            </div>
          )}
          <Button
            size="xl"
            onClick={handleBookNowClick}
            color=""
            className="w-40 font-semibold text-xl bg-[#7373E3] hover:bg-[#4D4DDB]"
          >
            <p className="text-xl text-white">Book now</p>
          </Button>
        </div>
        {service && (
          <div className="flex flex-col lg:flex-row">
            <div data-aos="slide-right" className="w-full lg:w-3/4">
              <p className="text-2xl font-semibold">Description</p>
              <p className="text-lg font-light mb-4">
                {service.details?.description}
              </p>
              <h2 className="text-2xl font-semibold mb-2 mt-10">
                Services Included:
              </h2>
              <ul className="list-disc pl-6">
                {service.details?.servicesIncluded.map((serviceItem, index) => (
                  <li key={index}>{serviceItem}</li>
                ))}
              </ul>
              <fieldset
                className="flex max-w-md flex-col gap-4 mt-10"
                id="checkbox"
              >
                <legend className="text-2xl font-semibold mt-6 mb-2">
                  Additional Services:
                </legend>

                {service.details?.additionalServices.map(
                  (priceOption, index) => (
                    <div
                      className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-row items-center"
                      key={index}
                    >
                      <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        checked={selectedServices.includes(priceOption)}
                        onChange={() => handleServiceSelection(priceOption)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={`checkbox-${index}`}
                        className="flex flex-row justify-between items-center w-full ml-10"
                      >
                        <div className="flex flex-col">
                          {priceOption.services.map((serviceName) => {
                            return <div>{serviceName}</div>;
                          })}
                        </div>
                        <div className="font-semibold">
                          ${priceOption.additionalPrice}
                        </div>
                      </label>
                    </div>
                  )
                )}
              </fieldset>
            </div>

            {/*cart */}
            <div data-aos="slide-left" className="bg-gray-100 p-6 rounded-md mt-6 md:mt-0 w-full lg:w-1/4 md:pl-4 flex flex-col items-start h-full">
              <h2 className="text-3xl font-bold mb-2">Cart</h2>
              <div className="w-full">
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-row justify-between">
                  <p>{service.name}</p>
                  <p className="font-semibold">${service.price}</p>
                </div>

                <div className="border-b-2 w-full" />
                {cart.map((service, index) => (
                  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-row justify-between">
                    <div className="flex flex-col">
                      {service.services.map((serviceName) => (
                        <div>{serviceName}</div>
                      ))}
                    </div>
                    <div className="font-semibold">
                      ${service.additionalPrice}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-b-2 w-full my-4" />
              <div className="text-xl w-full font-semibold flex flex-row justify-between">
                <div className=" ">Total:</div>
                <div>${totalPrice}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Service;
