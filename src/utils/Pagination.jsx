import React from "react";

function Pagination(page) {
  const pageNumbers = [1, 2, 3];

  return (
    <div className="flex space-x-2 ">
      {pageNumbers.map((page) => (
        <button className="px-2 py-1 rounded bg-slate-300">{page}</button>
      ))}
    </div>
  );
}

export default Pagination;
