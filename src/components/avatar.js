import React from "react";

function Avatar({ pic }) {
  return (
    <div className=" rounded-full w-10 h-10 flex items-center justify-center">
      <img
        src={pic}
        className="rounded-full w-full h-full object-cover"
        alt="Avatar"
      />
    </div>
  );
}

export default Avatar;
