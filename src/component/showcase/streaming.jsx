import Lottie from "lottie-react";
import React from "react";
import LiveAnimation from '../lotties/Live_animation.json'
import {BsGlobe2} from 'react-icons/bs'
import {FaMoneyCheckAlt} from 'react-icons/fa'
import {HiOutlineVideoCamera} from 'react-icons/hi'
const StreamingShowCase = () => {
  return (
    <div className="bg-gray-200 w-full flex flex-row">
      <div className="w-2/3 flex flex-col justify-center items-center">
        <p className="text-3xl md:text-5xl font-semibold mb-2">Live Streaming</p>
        <div className="text-2xl md:text-3xl">
            <ul>
                <li className="flex justify-center"><BsGlobe2 className="mr-2"/> Global Reach </li>
                <li className="flex"><FaMoneyCheckAlt className="mr-2"/> Monetize</li>
                <li className="flex"> <HiOutlineVideoCamera className="mr-2"/> HD Quality</li>
            </ul>
        </div>
      </div>
      <Lottie className="w-1/3"  animationData={LiveAnimation} loop={true}/>
    </div>
  );
};

export default StreamingShowCase;
