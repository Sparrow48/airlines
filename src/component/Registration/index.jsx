import React from "react";

function Index() {
  return (
    <div className="max-w-2xl py-16 mx-5 lg:mx-auto md:max-w-4xl lg:max-w-6xl ">
      <div className="flex flex-col items-center justify-center h-[calc(100vh-20rem)] gap-10 lg:space-y-0 lg:flex-row">
        <div className="w-1/3 ">
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
            <div className="flex flex-col w-full ">
              <div className="mb-4">
                <label
                  className="block text-sm font-bold text-gray-700"
                  htmlFor="username"
                >
                  Full Name
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="username"
                >
                  trip Number
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="username"
                >
                  airline Id
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                />
              </div>
            </div>

            <div className="flex items-center justify-between w-full">
              <button
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Index;
