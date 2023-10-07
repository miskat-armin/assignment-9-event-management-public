import { useLoaderData } from "react-router-dom";
import ServiceCard from "../component/card/serviceCard";

const Home = () => {
  const Services = useLoaderData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {Services?.map((service, idx) => (
        <ServiceCard key={idx} image={service.image}/>
      ))}
    </div>
  );
};

export default Home;
