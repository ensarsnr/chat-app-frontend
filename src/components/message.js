import React, { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import userServices from "@/services/user";
import Avatar from "./avatar";

function Message({ selectedUser }) {
  // Hooks
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [pic, setPic] = useState("");

  const getUser = async (userId) => {
    try {
      const response = await userServices.getName(userId);
      setName(response.data.name);
      setSurname(response.data.surname);
      setPic(response.data.pic);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    getUser(selectedUser);
  }, [selectedUser]);

  return (
    <div className="col-span-5 bg-gray-100 rounded-r-lg text-black py-3 px-4 relative">
      <div className="flex justify-between w-full bg-slate-200  rounded-lg h-14">
        <div className="ml-10 flex justify-center items-center">
          <Avatar pic={pic} />
          <span className="ml-2">
            {name} {surname}
          </span>
        </div>
        <div className="mr-10 flex justify-center items-center">
          <div className="mr-5 rounded-full bg-slate-300 p-2">
            <FaPhoneAlt size={13} color="blue" />
          </div>
          <div className="rounded-full bg-slate-300 p-2">
            <BsThreeDots color="blue" />
          </div>
        </div>
      </div>
      <div>
        {/* Burası mesajların geleceği kısım olacak.. id ye göre mesajlar burada gözükecekkk */}
      </div>
      <div className="absolute inset-x-0 bottom-0  p-3">
        <input
          type="search"
          id="default-search"
          name="default-search"
          className="shadow-xl block w-full p-3 ps-10 text-sm text-gray-900 border border-white rounded-2xl bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type a massage"
          required
        />
        <span
          role="img"
          aria-label="smile"
          className="p-2 rounded-full bg-blue-600 cursor-pointer absolute right-7 bottom-5"
        >
          <IoSend color="white" />
        </span>
      </div>
    </div>
  );
}

export default Message;
