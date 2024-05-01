import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { parseDate, getLocalTimeZone } from "@internationalized/date";
import { API_KEY } from "../constants";
import { compareAsc, format } from "date-fns";
import { Image, Slider, DatePicker } from "@nextui-org/react";
import Container from "../components/common/container";

const Earth = () => {
  const [value, setValue] = useState(parseDate("2018-01-01"));
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const { data, loading, reFetch } = useFetch(
    `https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&date=${format(
      new Date(value),
      "yyyy-MM-dd"
    )}&&dim=0.10&api_key=${API_KEY}`
  );

  useEffect(() => {
    console.log(format(new Date(value), "yyyy-MM-dd"));
  }, [value]);

  useEffect(() => {
    reFetch();
  }, [longitude, latitude]);

  const setLongitudeValue = (value) => {
    setLongitude(value);
  };
  const setLatitudeValue = (value) => {
    setLatitude(value);
  };

  return (
    <Container>
      <div className="flex gap-10 min-h-[600px] w-full">
        <div className="flex">
          <Slider
            orientation="vertical"
            label="Longitude"
            size="sm"
            color="warning"
            step={10}
            showSteps
            maxValue={100}
            minValue={-100}
            fillOffset={0}
            defaultValue={1.5}
            className="max-w-md"
            formatOptions={{ signDisplay: "always" }}
            onChangeEnd={setLongitudeValue}
            value={longitude}
            classNames={{
              base: "max-w-md gap-3",
              track: "border-s-secondary-100",
              filler: "bg-gradient-to-t from-secondary-100 to-secondary-500",
            }}
          />

          <Slider
            orientation="vertical"
            label="Latitude"
            size="sm"
            color="warning"
            step={10}
            showSteps
            maxValue={100}
            minValue={-100}
            fillOffset={0}
            defaultValue={1.5}
            className="max-w-md"
            formatOptions={{ signDisplay: "always" }}
            onChange={setLatitudeValue}
            value={latitude}
          />
        </div>

        <Image width={400} height={300} src={data.url} isLoading={loading} />
        <DatePicker
          label="Date"
          labelPlacement="outside"
          className="max-w-[284px]"
          description={
            "Beginning of 30 day date range that will be used to look for closest image to that date."
          }
          value={value}
          onChange={setValue}
        />
      </div>
    </Container>
  );
};

export default Earth;
