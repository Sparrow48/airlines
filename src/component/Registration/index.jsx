import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "../../utils/Debounce";
import { resgisterPassenger } from "./../../store/PassengerSlice";
import { ApiUrl } from "./../../config";

function Index() {
  const [name, setName] = useState("");
  const [trip, setTrip] = useState("");
  const [airId, setAirId] = useState("");

  const dispatch = useDispatch();

  const fullName = (event) => {
    setName(event.target.value);
  };
  const tripNumber = (event) => {
    setTrip(event.target.value);
  };
  const airlineId = (event) => {
    setAirId(event.target.value);
  };

  console.log(name);

  const nameHandler = debounce(fullName, 500);
  const tripHandler = debounce(tripNumber, 500);
  const airIdHandler = debounce(airlineId, 500);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      resgisterPassenger({
        ApiUrl,
        reqConfig: {
          name,
          trip,
          airId,
        },
      })
    );
  };

  return (
    <div className="max-w-2xl py-16 mx-5 lg:mx-auto md:max-w-4xl lg:max-w-6xl ">
      <div className="flex flex-col items-center justify-center h-[calc(100vh-20rem)] gap-10 lg:space-y-0 lg:flex-row">
        <div className="w-1/3 ">
          <form
            className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
            onSubmit={submitHandler}
          >
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
                  onChange={nameHandler}
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
                  onChange={tripHandler}
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
                  onChange={airIdHandler}
                />
              </div>
            </div>

            <div className="flex items-center justify-between w-full">
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
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
