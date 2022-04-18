export const debounce = (fn, delay = 1000) => {
  let timeout = null;
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    return new Promise((resolve, reject) => {
      timeout = setTimeout(() => {
        const ret = fn(...args);
        resolve(ret);
      }, delay);
    });
  };
};
