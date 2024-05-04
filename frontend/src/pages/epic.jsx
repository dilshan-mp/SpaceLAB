import { parseDate } from "@internationalized/date";
import { format } from "date-fns";
import React, { useState } from "react";
import { API_KEY } from "../constants";
import useFetch from "../hooks/useFetch";
import { DatePicker, Image } from "@nextui-org/react";
import Container from "../components/common/container";

const Epic = () => {
  const [value, setValue] = useState(parseDate("2019-05-30"));
  const { data, loading, reFetch } = useFetch(
    `https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=${API_KEY}`
  );

  // const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${date.replace(
  //   /-/g,
  //   "/"
  // )}/jpg/${image.image}.jpg`;

  console.log("data >>", data);

  return (
    <Container>
      <div>
        <DatePicker
          label="Date"
          labelPlacement="outside"
          // className="max-w-md"
          description={
            "Beginning of 30 day date range that will be used to look for closest image to that date."
          }
          value={value}
          onChange={setValue}
          variant="underlined"
          className=" text-black"
        />
      </div>
      <div>
        <Image
          width={300}
          alt="NextUI hero Image"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
      </div>
    </Container>
  );
};

export default Epic;
