import { Image } from "@nextui-org/react";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-1 bg-gradient-to-tr from-indigo-700/20 relative ">
      <div className="absolute min-[1600px]:w-[600px] w-[400px] h-[600px] top-[-50px] right-0 overflow-hidden">
        <img
          src="./moon.png"
          className="object-contain rotate-270 absolute top-0 right-[-80px] "
        />
      </div>

      <div className="w-1/2 justify-center text-center grid place-items-center">
        <div className="h-[400px] text-wrap w-[300px]">
          <h1 className="text-7xl font-bold">To Space & Back</h1>
        </div>
      </div>
      <div className="w-1/2 h-full grid place-items-center relative">
        <Image width={300} src="./spaceman.png" className="animate-float" />
      </div>
    </div>
  );
};

export default Home;
