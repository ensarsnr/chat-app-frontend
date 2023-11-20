import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

function Settings({ backChat }) {
  return (
    <div className="rounded-lg bg-gray-100 grid grid-rows-5 col-span-7">
      {/* HEADERS */}
      <div className="flex justify-between col-span-7">
        <div class="p-4 rounded-t">
          <IoIosArrowBack
            color="gray"
            type="button"
            onClick={backChat}
            size={40}
            className="cursor-pointer"
          />
        </div>
        <div className="p-2 items-center flex">
          <div className="w-20 ml-2 h-20 rounded-full bg-black"></div>
          <div className="w-20 ml-2 h-20 rounded-full bg-black"></div>
          <div className="w-20 ml-2 h-20 rounded-full bg-black"></div>
          <div className="w-20 ml-2 h-20 rounded-full bg-black"></div>
        </div>
        <div className="p-4">
          <MdDarkMode size={30} color="dimgray" />
        </div>
      </div>
      <div className="border-t-2 border-gray-400 bg-gray-100 col-span-7 row-span-4 flex justify-between ">
        <div className="w-1/6 border-r-2 border-gray-400">
          <h1 className="text-center text-black">Friend Requests</h1>
          {/* Buraya arkadaş istekleri gelecek */}
          <div className="bg-red-300 text-black mt-5">n-y</div>
          <h1 className="text-black">Added Friend</h1>
          <form></form>
        </div>
        <div className=" w-4/6">asd</div>
        <div className="bg-gray-200 w-1/6">asd</div>
      </div>
    </div>
  );
}

export default Settings;
