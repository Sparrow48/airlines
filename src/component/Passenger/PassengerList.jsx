import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Passenger from "./Passenger";
import { fatchPassenger } from "./../../store/PassengerSlice";
import { ApiUrl } from "../../config";
// import usePagination from "./../../hooks/usePagination";

function PassengerList() {
  const [page, setPage] = useState(0);
  // const pageNumbers = usePagination(page);
  const { showPassenger } = useSelector((state) => state.passengers);

  const dispatch = useDispatch();

  // const changePage = (pageNumber) => {
  //   setPage(pageNumber);
  // };

  const changePage = () => {
    setPage(page + 1);
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
        <div className="flex flex-col items-center justify-center m-12 space-y-7 ">
          <div>
            <Passenger />
          </div>
          <div>
            <button
              className="px-2 py-1 text-white bg-blue-700 rounded "
              onClick={changePage}
            >
              see more
            </button>
          </div>

          {/* <div>
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
          </div> */}
        </div>
      ) : (
        <h1> Loading... </h1>
      )}
    </>
  );
}

export default PassengerList;
