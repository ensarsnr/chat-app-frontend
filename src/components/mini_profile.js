import React from "react";

function MiniProfile() {
  return (
    <div className="flex m-3 ">
      <div className="bg-black rounded-full w-10 h-10 text-center">s</div>
      <div className="ml-3 text-black">
        <h1>Username</h1>
        <span className="text-sm text-gray-600">Id: UserId</span>
      </div>
    </div>
  );
}

export default MiniProfile;
