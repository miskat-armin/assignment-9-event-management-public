import PropTypes from "prop-types";

const HistoryCard = ({ service }) => {
  return (
    <div data-aos="zoom-in" className="max-w-md bg-white border border-gray-200 rounded-lg shadow flex flex-col p-6 cursor-pointer">
      <h5 className="text-2xl font-extrabold tracking-tight text-gray-900">
        {service.serviceName}
      </h5>
      <p className="font-semibold text-lg">
        Total price: ${service.totalPrice}
      </p>
      <p className="font-semibold text-lg mb-4">
        Purchase Date:{service.date}{" "}
      </p>
      <p className="font-bold text-xl">Additional Services: </p>
      {
        <div className=" border-gray-300 w-full flex flex-col justify-between">
          {service.selectedServices?.map((selectedService, index) => (
            <div key={index} className="flex flex-row justify-between border-b-2 py-2">
              <div>
                <div className="flex flex-col">
                  {selectedService.services?.map((service, idx) => (
                    <div key={idx} className="ml-2">{service}</div>
                  ))}
                </div>
              </div>
              <div className="font-semibold">${selectedService?.additionalPrice}</div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

HistoryCard.propTypes = {
  service: PropTypes.shape({
    serviceName: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    selectedServices: PropTypes.arrayOf(
      PropTypes.shape({
        services: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        additionalPrice: PropTypes.number.isRequired,
      }).isRequired
    ),
  }).isRequired,
};

export default HistoryCard;
