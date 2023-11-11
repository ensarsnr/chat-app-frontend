import React from "react";
import MiniProfile from "./mini_profile";

function Persons() {
  return (
    <div className="col-span-2 bg-slate-400">
      <MiniProfile />
      <div className="mt-10 text-center bg-white w-11/12 rounded-2xl m-auto">
        <div className="p-5">
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
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
              {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                <div key={index} className="mt-5 justify-between flex">
                  <div className="rounded-full w-10 h-10 bg-red-500">w</div>
                  <div className="ml-3">
                    <h1 className="text-sm">deneme</h1>
                    <div className="text-xs text-gray-600">deneme</div>
                  </div>
                  <div>asdasd</div>
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
