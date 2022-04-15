import React from "react";
import { NavLink } from "react-router-dom";

function index() {
  return (
    <div className=" m-12 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className=" flex flex-col bg-yellow-200 items-center p-5 rounded">
        <h5 className="mb-2 ml-10 text-2xl ">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png"
            alt=""
          />
        </h5>
        <div className=" ">
          <h5 className=" pb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Qatar Airways
          </h5>
          <div className=" flex justify-center items-center">
            <NavLink
              to="/airlinesDetails"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
