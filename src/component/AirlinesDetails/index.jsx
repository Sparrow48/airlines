import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ApiUrl } from "../../config";
import { airlinesDetails } from "./../../store/AirlinesSlice";

function Index() {
  const param = useParams();
  const dispatch = useDispatch();

  const { airlinesDetail: airlines } = useSelector((state) => state.airline);

  useEffect(() => {
    try {
      dispatch(airlinesDetails({ ApiUrl, id: param.id }));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <div className="max-w-sm p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow-md w-80 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center p-5 bg-yellow-200 rounded ">
          <h5 className="mb-2 ml-10 text-2xl ">
            <img src={airlines.logo} alt="" />
          </h5>
          <div className="">
            <h5 className="pb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {airlines.name}
            </h5>
            <p>{airlines.slogan}</p>
            <div className="flex items-center justify-center ">
              <a
                href="http://www.thaiairways.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visit {airlines.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
