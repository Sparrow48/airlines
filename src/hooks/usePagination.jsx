function usePagination(activePage, page) {
  const pageNumbers = [];

  let startNum = activePage < 6 ? 0 : activePage - 5;
  let length =
    activePage < 6 ? page : activePage + 5 > page ? page : activePage + 5;

  for (let i = startNum; i <= length; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
}

export default usePagination;
