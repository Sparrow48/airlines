import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { passengerProfile, deleteProfile } from "./../../store/PassengerSlice";
import { ApiUrl } from "../../config";
import profileImage from "./../../asset/profile.png";

function PassengerProfile() {
  const { profile, message } = useSelector((state) => state.passengers);
  const param = useParams();
  const dispatch = useDispatch();

  const deleteProfileById = () => {
    try {
      dispatch(deleteProfile({ ApiUrl, id: param.id }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    try {
      dispatch(passengerProfile({ ApiUrl, id: param.id }));
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div>
      {profile.length ? (
        <>
          {" "}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={profileImage}
                alt="profile_image"
              />

              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {profile.name}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>
              <div className="flex mt-4 space-x-3 lg:mt-6">
                <button
                  onClick={deleteProfileById}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Delete Profile
                </button>
                <a
                  href="/"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 "
                >
                  Edit info
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center h-screen space-y-3 ">
            <h1 className="p-2 text-xl text-white bg-red-200 rounded">
              {message}
            </h1>
            <NavLink
              className="px-2 py-1 bg-gray-300 rounded  hover:bg-gray-500"
              to="/allPassenger"
            >
              Go Back
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
}

export default PassengerProfile;
