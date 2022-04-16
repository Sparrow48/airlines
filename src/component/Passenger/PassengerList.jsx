import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Pagination from "../../utils/Pagination";
import Passenger from "./Passenger";
import { fatchPassenger } from "./../../store/PassengerSlice";
import { ApiUrl } from "../../config";

function PassengerList() {
  const [page, setPage] = useState(0);
  const pageNumbers = [0, 1, 2, 3];

  const { showPassenger } = useSelector((state) => state.passengers);

  const dispatch = useDispatch();

  const changePage = (pageNumber) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    try {
      dispatch(fatchPassenger({ ApiUrl, page }));
    } catch (err) {
      console.log(err);
    }
  }, [page]);
  return (
    <>
      {showPassenger ? (
        <div className="m-12 ">
          <Passenger />
          <div>
            <div className="flex space-x-2 ">
              {pageNumbers.map((page) => (
                <button
                  onClick={() => changePage(page)}
                  className="px-2 py-1 rounded bg-slate-300"
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h1> Loading... </h1>
      )}
    </>
  );
}

export default PassengerList;
