import useWindowSize from "@/hooks/useWindowSize";
import React from "react";

function Start() {
  const { width, height } = useWindowSize();

  const maxContainerHeight = height >= 959 ? 670 : 500;

  const containerStyle = {
    height: `${maxContainerHeight}px`,
  };

  return (
    <div style={containerStyle} className="flex justify-center items-center">
      <div>start</div>
    </div>
  );
}

export default Start;
