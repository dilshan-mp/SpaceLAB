import React from "react";
import { API_KEY } from "../constants";
import useFetch from "../hooks/useFetch";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import Container from "../components/common/container";
import Video from "../components/common/video";

const Home = () => {
  const { data, error, loading } = useFetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  );

  console.log(data);

  return (
    <Container>
      <div className="p-10 mt-8 z-20 flex flex-col xl:flex-row gap-20 flex-1 items-center ">
        <div className="w-full lg:3/5 drop-shadow-[0_25px_35px_rgba(6,182,212,0.25)]">
          <Card isFooterBlurred className="w-full">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                {data.date}
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                {data.title}
              </h4>
            </CardHeader>
            <Image
              loading={loading}
              removeWrapper
              alt="Relaxing app background"
              className="z-0 h-[600px] object-cover "
              src={data.url}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  isLoading={loading}
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src={data.url}
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Copyright</p>
                  <p className="text-tiny text-white/60">@{data.copyright}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="w-full xl:w-2/5 xl:min-h-[600px]">
          <h1 className="mb-6 break-words text-5xl text-transparent font-semibold xl:text-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Astronomy Picture of the Day
          </h1>
          <p className="xl:text-center text-base text-justify">
            {data.explanation}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Home;
