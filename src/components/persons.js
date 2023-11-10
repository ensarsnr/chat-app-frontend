import React from "react";

function Persons() {
  return (
    <div className="col-span-2 bg-slate-400">
      <div className="flex m-3 ">
        <div className="bg-black rounded-full w-10 h-10 text-center">s</div>
        <div className="ml-3 text-black">
          <h1>Username</h1>
          <span className="text-sm text-gray-600">Id: UserId</span>
        </div>
      </div>
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
          <div className="mt-5 text-black text-start">persons</div>
        </div>
      </div>
    </div>
  );
}

export default Persons;
