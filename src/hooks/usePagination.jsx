function usePagination(activePage, size) {
  const pageNumbers = [];
  const maxPage = Math.ceil(size / 5);
  let endNum = Math.min(maxPage, activePage + 3);

  let startNum = Math.max(endNum - 5, 0);
  endNum += 5 - (endNum - startNum);
  endNum = Math.min(endNum, maxPage);
  for (let i = startNum; i < endNum; i++) {
    pageNumbers.push(i);
  }

  return { pageNumbers, maxPage: maxPage - 1, end: endNum - 1 };
}

export default usePagination;
