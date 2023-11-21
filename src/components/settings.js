import friendService from "@/services/friend";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

function Settings({ userId, backChat }) {
  const [username, setUsername] = useState("");

  const addToFriend = async (e) => {
    e.preventDefault();

    try {
      const response = await friendService.addFriend(userId, username);
      console.log("responseFriend: ", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-lg bg-gray-100 grid grid-rows-5 col-span-7">
      {/* HEADERS */}
      <div className="flex justify-between col-span-7">
        <div class="p-4 rounded-t">
          <IoIosArrowBack
            color="gray"
            addToFriend
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
        <div className="col-span-4  m-auto">
          <h1 className="text-center text-black mb-5">Added Friend</h1>
          <form onSubmit={addToFriend} className="mt-5 text-center">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Frind Username"
              required
            />
            <button
              type="submit"
              className="w-full mt-5 py-2 px-3 bg-blue-500 duration-100 hover:duration-100 hover:bg-blue-600 rounded-lg"
            >
              Added
            </button>
          </form>
        </div>
        <div className="col-span-3 m-auto text-black">
          <div>
            <h1>Friend Requests</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
