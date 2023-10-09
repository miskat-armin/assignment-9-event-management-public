import Lottie from "lottie-react";
import LiveAnimation from "../lotties/Live_animation.json";
import { BsGlobe2 } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi";
const StreamingShowCase = () => {
  return (
    <div className="bg-gray-200 w-full flex flex-col md:flex-row max-xl:py-6">
      <div className="w-full md:w-2/3 flex flex-col justify-center items-center pt-4 md:pt-0">
        <div className="w-[60%]">
          <p className="text-3xl md:text-5xl font-semibold mb-2">
            Live Streaming & Recording
          </p>
          <p className="text-xl font-light mb-4">
            Get ready for an immersive journey into the world of technology and
            gaming, right from the comfort of your home! Our live streaming
            event offers:
          </p>
          <div className="text-2xl md:text-3xl">
            <ul>
              <li className="flex">
                <BsGlobe2 className="mr-2" /> Global Reach
              </li>
              <li className="flex">
                <FaMoneyCheckAlt className="mr-2" /> Monetize
              </li>
              <li className="flex">
                <HiOutlineVideoCamera className="mr-2" /> HD Quality
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Lottie
        className="w-full md:w-1/3"
        animationData={LiveAnimation}
        loop={true}
      />
    </div>
  );
};

export default StreamingShowCase;
