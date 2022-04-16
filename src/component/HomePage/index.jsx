import React, { useEffect } from "react";
import { ApiUrl } from "../../config";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllAirlines } from "../../store/AirlinesSlice";

function Index() {
  const { airlines, show } = useSelector((state) => state.airline);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchAllAirlines(ApiUrl));
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(airlines);
  return (
    <div>
      {show ? (
        <div className="flex flex-wrap justify-center">
          {airlines.slice(0, 50).map((air) => (
            <div className="max-w-sm p-6 m-12 bg-white border border-gray-200 rounded-lg shadow-md w-80 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center p-5 bg-yellow-200 rounded ">
                <h5 className="mb-2 ml-10 text-2xl ">
                  <img src={air.logo} alt="" />
                </h5>
                <div className="">
                  <h5 className="pb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {air.name}
                  </h5>
                  <div className="flex items-center justify-center ">
                    <NavLink
                      to={`/airlinesDetails/${air.id}`}
                      // target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Details
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Index;
