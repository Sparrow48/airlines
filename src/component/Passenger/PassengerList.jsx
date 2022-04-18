import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Passenger from "./Passenger";
import { fatchPassenger } from "./../../store/PassengerSlice";
import { PassengerActions } from "./../../store/PassengerSlice";
import { ApiUrl } from "../../config";
import usePagination from "./../../hooks/usePagination";

function PassengerList() {
  const [disable, setDisable] = useState(false);
  const { passengers, showPassenger, page, activePage } = useSelector(
    (state) => state.passengers
  );
  const {
    pageNumbers,
    end: endNum,
    maxPage,
  } = usePagination(activePage, passengers.length);
  console.log("endNum", endNum, maxPage);
  const start = activePage * 5;
  const end = (activePage + 1) * 5;

  const dispatch = useDispatch();

  const changePageNumber = (pageNumber) => {
    dispatch(PassengerActions.activePageHandler(pageNumber));
  };

  console.log("hello");

  const changePage = () => {
    const updatePage = page + 1;
    dispatch(PassengerActions.incrementPage());
    dispatch(PassengerActions.activePageHandler(updatePage));
    setDisable(false);
  };

  const loadMore = async (_page) => {
    if (_page) setDisable(true);
    try {
      await dispatch(fatchPassenger({ ApiUrl, page: _page }));

      if (_page) changePage();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!page) loadMore(0);
  }, []);

  return (
    <>
      {showPassenger ? (
        <div className="flex flex-col items-center justify-center m-12 space-y-7 ">
          <div>
            {passengers.slice(start, end).map((passenger) => (
              <Passenger key={passenger._id} passenger={passenger} />
            ))}
          </div>

          <div>
            <button
              disabled={disable}
              className="px-2 py-1 text-white bg-blue-700 rounded disabled:opacity-0 hover:bg-blue-500"
              onClick={() => loadMore(page + 1)}
            >
              Load more
            </button>
          </div>
          <div>
            <div className="flex space-x-2 ">
              {pageNumbers[0] !== 0 ? (
                <>
                  <button
                    key={page}
                    onClick={() => changePageNumber(0)}
                    className={"px-2 py-1 rounded bg-slate-300"}
                    // className="px-2 py-1 rounded bg-slate-300"
                  >
                    0
                  </button>

                  <p className="pt-2 ">...</p>
                </>
              ) : null}
              {pageNumbers.map((page) => (
                <button
                  key={page}
                  onClick={() => changePageNumber(page)}
                  className={
                    activePage === page
                      ? "px-2 py-1 rounded bg-green-300"
                      : "px-2 py-1 rounded bg-slate-300"
                  }
                  // className="px-2 py-1 rounded bg-slate-300"
                >
                  {page}
                </button>
              ))}

              {maxPage !== endNum ? (
                <>
                  <p className="pt-2 ">...</p>
                  <button
                    key={page}
                    onClick={() => changePageNumber(maxPage)}
                    className={"px-2 py-1 rounded bg-slate-300"}
                    // className="px-2 py-1 rounded bg-slate-300"
                  >
                    {maxPage}
                  </button>
                </>
              ) : null}
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
