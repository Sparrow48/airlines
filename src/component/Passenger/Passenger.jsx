import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Passenger() {
  const { passengers } = useSelector((state) => state.passengers);

  return (
    <div>
      {passengers.map((passenger) => (
        <div className="pb-3 ">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {passenger.name}
            </h5>

            <NavLink
              to={`/passengerProfile/${passenger._id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 "
            >
              Read more
              <svg
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Passenger;
