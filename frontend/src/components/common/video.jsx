import React from "react";

const Video = () => {
  return (
    <div className="flex-col flex h-full w-full z-[-1]">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Video;
