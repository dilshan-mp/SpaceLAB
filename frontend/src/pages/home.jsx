import { Button, Image } from "@nextui-org/react";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-1 bg-gradient-to-tr from-indigo-700/20 relative ">
      <div className="absolute min-[1600px]:w-[600px] w-[400px] h-[600px] top-[-50px] right-0 overflow-hidden">
        <img
          data-testid="moon-image"
          src="./moon.png"
          className="object-contain rotate-270 absolute top-0 right-[-80px] "
        />
      </div>

      <div className="w-1/2 justify-center text-center grid place-items-center relative">
        <div className=" w-fit relative ">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="text-left w-[400px] font-Jersey mb-10">
              <h1 className="text-7xl uppercase z-20">Exploring</h1>
              <h1 className="text-7xl uppercase z-20">Space,</h1>
              <h1 className="text-7xl uppercase z-20">Inspiring Minds</h1>
            </div>
            {/* <GlowingButton
              borderRadius="1.75rem"
              className="bg-white z-20 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore
            </GlowingButton> */}
            <Button
              data-testid="explore-button"
              radius="full"
              className="bg-gradient-to-tr from-purple-500 to-cyan-500 text-white shadow-lg z-20"
            >
              Explore
            </Button>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full grid place-items-center relative">
        <Image width={300} src="./spaceman.png" className="animate-float" />
      </div>
    </div>
  );
};

export default Home;
