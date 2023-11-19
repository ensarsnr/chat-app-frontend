import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

function Settings({ backChat }) {
  return (
    <div className="rounded-lg bg-blue-300 grid grid-rows-5 col-span-7">
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
        <div className="text-black text-center ">
          <h1 class=" mt-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Settings
            </span>
          </h1>
        </div>
        <div className="p-4">
          <MdDarkMode size={30} color="dimgray" />
        </div>
      </div>
      <div className="bg-yellow-100 col-span-1 border-t-4 rounded-bl  rounded-tl-full row-span-4 row-start-2">
        <div className="flex items-center h-5/6 justify-center">
          <div className="m-auto "></div>
        </div>
      </div>
      <div className="bg-yellow-200 col-span-5  border-t-4 rounded-bl row-span-4 row-start-2">
        asdlfjlasdk
      </div>
      <div className="bg-yellow-200 col-span-1 border-t-4 rounded-br  rounded-tr-full row-span-4 row-start-2"></div>
    </div>
  );
}

export default Settings;
