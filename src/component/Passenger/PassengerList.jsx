import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Passenger from "./Passenger";
import { fatchPassenger } from "./../../store/PassengerSlice";
import { ApiUrl } from "../../config";
import usePagination from "./../../hooks/usePagination";

function PassengerList() {
  const [page, setPage] = useState(0);
  const pageNumbers = usePagination(page);

  const { showPassenger } = useSelector((state) => state.passengers);

  const dispatch = useDispatch();
  //   console.log("hello");

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
