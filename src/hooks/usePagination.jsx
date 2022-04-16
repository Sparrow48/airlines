export default function usePagination(page, startNum) {
  const pageNumbers = [];

  for (let i = startNum; i <= page; i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
}
