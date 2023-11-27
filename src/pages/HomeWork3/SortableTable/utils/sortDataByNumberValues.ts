export const sortDataByNumberValues = (
  data: Array<Record<string, string | number>>,
  field: string,
  reverse: boolean
) => {
  const sortedData = data.sort((a, b) => Number(a[field]) - Number(b[field]));

  if (reverse) {
    sortedData.reverse();
  }

  return sortedData;
};
