import useWindowSize from "@/hooks/useWindowSize";
import React from "react";
import Image from "next/image";
import startpng from "../assets/images/start.png";
import Settings from "./settings";

function Start({ openSettings }) {
  const { width, height } = useWindowSize();

  const maxContainerHeight = height >= 959 ? 670 : 500;

  const containerStyle = {
    height: `${maxContainerHeight}px`,
  };

  return (
    <div
      style={containerStyle}
      className="h-5/6 items-center rounded-l-lg flex flex-col justify-around col-span-3"
    >
      <div>
        <h2 className="font-bold text-2xl text-blue-500">Welcome to the App</h2>
      </div>
      <div>
        <div>
          <Image src={startpng} className="ml-20" width={200} height={200} />
        </div>
      </div>
      <div>
        <button
          onClick={openSettings}
          className="bg-green-500 px-4 py-2 rounded-lg text-white"
        >
          Add a friend
        </button>
      </div>
    </div>
  );
}

export default Start;
