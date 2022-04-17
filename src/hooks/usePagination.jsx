function usePagination(activePage, page) {
  const pageNumbers = [];

  let startNum = activePage - 2 < 0 ? 0 : activePage - 2;
  let length = activePage + 2 > page ? page : activePage + 2;

  for (let i = startNum; i <= length; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
}

export default usePagination;
