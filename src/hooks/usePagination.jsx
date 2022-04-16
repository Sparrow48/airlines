function usePagination(page) {
  const pageNumbers = [];

  // let flag = Math.floor(page / 5);
  // let startNum = flag % 2 !== 0 ? page - 5 : page < 11 ? 0 : page - 5;
  // let length = flag % 2 !== 0 ? page + 5 : page < 11 ? 10 : page + 5;

  let startNum = page < 6 ? 0 : page - 5;
  let length = page < 6 ? 10 : page + 5;

  for (let i = startNum; i <= length; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
}

export default usePagination;
