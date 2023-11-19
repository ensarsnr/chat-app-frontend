"use client";
import userServices from "@/services/user";
import React, { useEffect, useState } from "react";
import { IoIosSettings } from "react-icons/io";
import Avatar from "./avatar";
import Settings from "./settings";

function Persons({ openSettings, onPersonClick, username, userId }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [search, setSearch] = useState("");
  const [friends, setFriends] = useState([]);
  const [pic, setPic] = useState("");

  const getName = async (userId) => {
    try {
      const response = await userServices.getName(userId);
      setSurname(response.data.surname);
      setName(response.data.name);
      setPic(response.data.pic);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const allFriends = async (userId) => {
    try {
      const response = await userServices.allFriends(userId);
      setFriends(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchFriends = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getName(userId);
    allFriends(userId);
  }, [userId]);

  //
  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="col-span-2 bg-gray-100 rounded-l-lg">
      <div className="justify-between flex m-3 ">
        <div className="flex">
          <Avatar pic={pic} />
          <div className="ml-3 text-black">
            <h1>
              {name} {surname}
            </h1>
            <span className="text-sm text-gray-600">#{username}</span>
          </div>
        </div>
        <div className="text-black mr-3 justify-center items-center flex">
          <IoIosSettings
            type="button"
            onClick={openSettings}
            o
            size={20}
            color="gray"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="mt-2 text-center bg-white w-11/12 shadow-lg rounded-2xl m-auto">
        <div className="p-5">
          <form>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                name="default-search"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Friend"
                required
                value={search}
                onChange={searchFriends}
              />
            </div>
          </form>
          <div className="mt-3 text-black text-start">
            <div
              className="text-black text-start"
              // responsive bir şekilde ayarlaması yapılır.
              style={{ maxHeight: "300px", overflowY: "auto" }}
            >
              {/* Container with fixed height and scrollable */}
              {filteredFriends.map((index) => (
                <div
                  onClick={() => onPersonClick(index._id)}
                  key={index}
                  className="justify-between mt-5 flex cursor-pointer hover:bg-gray-100 p-2 duration-300 hover:duration-300 rounded-lg "
                >
                  <Avatar pic={pic} />
                  <div className="w-3/5 ml-3">
                    <h1 className="text-sm">
                      {index.name} {index.surname}
                    </h1>
                    <div className="text-xs text-gray-600">
                      #{index.username}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 mr-2 flex items-center justify-center">
                      {/* <span>1</span> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Persons;
