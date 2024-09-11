export const getCount = (num: number) => {
  const count = [];
  for (let i = 0; i < num; i++) {
    count.push(i);
  }
  return count;
};